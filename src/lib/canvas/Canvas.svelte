<script lang='ts'>
    //@ts-nocheck
    import {
        clearAll,
        stMode,
        arcMode,
        rectMode,
        drawMode,
        strokeColor,
        lineWidth,
        globalCompositeOperation,
    } from "$lib/canvas/stores";
    import { onMount } from "svelte";
    export let width = 100;
    export let height = 100;
    let canvas, ctx;
    let points = [],
        reducedPoints = [],
        areas = [],
        tangents = [],
        controlPoints = [],
        snapshot,
        areaThreshold = 2,
        tangentThreshold = 0.01,
        animeFrame;
    let boundingRect = {
        left: 0,
        top: 0,
    };
    // let startTime, endTime;
    let scaleX = 1,
        scaleY = 1;
    onMount(() => {
        ctx = canvas.getContext("2d", { willReadFrequently: true });
        init();
    });
    var flag = false,
        dot_flag = false;

    function init() {
        ctx = canvas.getContext("2d", { willReadFrequently: true });
        width = canvas.width;
        height = canvas.height;
        canvas.addEventListener(
            "touchstart",
            function (e) {
                e.preventDefault();
            },
            false
        );

        canvas.addEventListener(
            "pointermove",
            function (e) {
                findxy("move", e);
            },
            false
        );
        canvas.addEventListener(
            "pointerdown",
            function (e) {
                findxy("down", e);
            },
            false
        );
        canvas.addEventListener(
            "pointerup",
            function (e) {
                findxy("up", e);
            },
            false
        );
        canvas.addEventListener(
            "pointercancel",
            function (e) {
                findxy("out", e);
            },
            false
        );
        canvas.addEventListener(
            "contextmenu",
            function (e) {
                e.preventDefault();
            },
            false
        );
        // canvas.addEventListener("touchmove", function (e) {
        //     findxy('move', e)
        // }, false);
        // canvas.addEventListener("touchstart", function (e) {
        //     findxy('down', e)
        // }, false);
        // canvas.addEventListener("touchend", function (e) {
        //     findxy('up', e)
        // }, false);
        // canvas.addEventListener("touchcancel", function (e) {
        //     findxy('out', e)
        // }, false);
    }
    const sqrDist = (p1, p2) => {
        return (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y);
    };
    const needCubic = (p1, p2, p3, p4) => {
        let d12 = sqrDist(p1, p2);
        let d23 = sqrDist(p2, p3);
        let d34 = sqrDist(p3, p4);
        if (d23 > 2 * (d12 + d34)) return true;
        return false;
    };
    const tangent = (p1, p2) => {
        return (p2.y - p1.y) / (p2.x - p1.x);
    };
    const isSharp = (index) => {
        if (index < 1 || index > reducedPoints.length - 2) return false;
        let intangent = tangent(reducedPoints[index - 1], reducedPoints[index]);
        let outtangent = tangent(
            reducedPoints[index],
            reducedPoints[index + 1]
        );
        // console.log(index, Math.atan(outtangent), Math.atan(intangent), Math.abs(Math.atan(outtangent) - Math.atan(intangent)) > Math.PI - 0.01)
        return (
            Math.abs(Math.atan(outtangent) - Math.atan(intangent)) >
            Math.PI - 0.01
        );
    };
    const area = (p1, p2, p3) => {
        return (
            0.5 *
            Math.abs(
                p1.x * (p2.y - p3.y) -
                    p2.x * (p1.y - p3.y) +
                    p3.x * (p1.y - p2.y)
            )
        );
    };
    const reduceAreaPoints = () => {
        // console.log('reduced length', reducedPoints.length);
        let minArea = Math.min(...areas);
        // console.log(minArea)
        if (minArea > areaThreshold) {
            // console.log('initial length', points.length);
            // console.log('reduced length', reducedPoints.length);
            return;
        }
        let minIndex = areas.indexOf(minArea);
        if (minArea === 0) {
            areas[minIndex] = 10000;
            reduceAreaPoints();
        }
        // console.log('minIndex-->', minIndex)
        else if (minIndex > 0) {
            //check if it is a very sharp point

            reducedPoints.splice(minIndex, 1);
            areas.splice(minIndex, 1);
            if (minIndex > 2) {
                areas[minIndex - 1] = area(
                    reducedPoints[minIndex - 2],
                    reducedPoints[minIndex - 1],
                    reducedPoints[minIndex]
                );
            }
            if (minIndex < reducedPoints.length - 1) {
                areas[minIndex] = area(
                    reducedPoints[minIndex - 1],
                    reducedPoints[minIndex],
                    reducedPoints[minIndex + 1]
                );
            }

            reduceAreaPoints();
        }
    };
    const flatIndex = () => {
        for (let i = 1; i < reducedPoints.length - 1; i++) {
            if (tangents[i].in === "inf" && tangents[i].out === "inf") {
                return i;
            }
            if (tangents[i].in === "inf") {
                if (1 / Math.abs(tangents[i].out) > tangentThreshold) return i;
            }
            if (tangents[i].out === "inf") {
                if (1 / Math.abs(tangents[i].in) > tangentThreshold) return i;
            }
            if (Math.abs(tangents[i].in - tangents[i].out) < tangentThreshold) {
                return i;
            }
        }
        return -1;
    };
    const reduceTangentPoints = () => {
        let fIndex = flatIndex();
        if (fIndex !== -1) {
            tangents.splice(fIndex, 1);
            reducedPoints.splice(fIndex, 1);
            tangents[fIndex - 1].out = tangent(
                reducedPoints[fIndex - 1],
                reducedPoints[fIndex]
            );
            tangents[fIndex].in = tangents[fIndex - 1].out;
        }
    };
    const pointLength = (p1, p2) => {
        return Math.sqrt(sqrDist(p1, p2));
    };
    const cubicControls = (p1, p2, p3) => {
        let alpha = 0.1;
        let beta = 0.1;
        let v = {
            x: p3.x - p1.x,
            y: p3.y - p1.y,
        };
        let controls = {
            tin: { x: p2.x - alpha * v.x, y: p2.y - alpha * v.y },
            tout: { x: p2.x + beta * v.x, y: p2.y + beta * v.y },
        };
        return controls;
    };
    const intersectLines = (p1, p2, p3, p4) => {
        let m1 = tangent(p1, p2);
        let m2 = tangent(p3, p4);
        let c1 = p1.y - m1 * p1.x;
        let c2 = p3.y - m2 * p3.x;
        let x = (c2 - c1) / (m1 - m2);
        let y = m1 * x + c1;
        return {
            x,
            y,
        };
    };
    function gradient(a, b) {
        return (b.y - a.y) / (b.x - a.x);
    }

    let control = (P0, P, P1, t) => {
        if (t == 0) return P0;
        if (t == 1) return P1;
        return {
            x:
                (P.x - (1 - t) * (1 - t) * P0.x - t * t * P1.x) /
                (2 * t * (1 - t)),
            y:
                (P.y - (1 - t) * (1 - t) * P0.y - t * t * P1.y) /
                (2 * t * (1 - t)),
        };
    };
    let stLine = (P1, P2) => {
        let m = tangent(P1, P2);
        let k = P1.y - m * P1.x;
        return {
            m,
            k,
        };
    };
    let computeTime = (C0, P0, P, P1) => {
        let line = stLine(C0, P0);
        return Math.sqrt(
            (P.y - line.m * P.x - line.k) / (P1.y - line.m * P1.x - line.k)
        );
    };
    let extendedControl = (C0, P0, P1) => {
        let l1 = pointLength(C0, P0);
        let l2 = pointLength(P0, P1);
        return {
            x: P0.x - (l2 / (2 * l1)) * (C0.x - P0.x),
            y: P0.y - (l2 / (2 * l1)) * (C0.y - P0.y),
        };
    };
    let drawThrough = (points) => {
        let l = points.length;
        let i = 0;
        if (l > 3) {
            for (i = 3; i < l; i++) {
                if (i == 3) {
                    let t =
                        pointLength(points[1], points[0]) /
                        pointLength(points[2], points[0]);
                    let c = control();
                }
            }
        }
    };
    function draw() {
        if (points.length > 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.putImageData(snapshot, 0, 0);

            ctx.beginPath();
            ctx.globalCompositeOperation = $globalCompositeOperation;
            switch ($drawMode) {
                case "pen": {
                    ctx.moveTo(points[0].x, points[0].y);
                    let i = 1;
                    let n = points.length;
                    for (i = 1; i < n - 2; i++) {
                        ctx.quadraticCurveTo(
                            points[i].x,
                            points[i].y,
                            controlPoints[i - 1].x,
                            controlPoints[i - 1].y
                        );
                    }
                    if (n > 2)
                        ctx.quadraticCurveTo(
                            points[i].x,
                            points[i].y,
                            points[i + 1].x,
                            points[i + 1].y
                        );
                    else
                        ctx.quadraticCurveTo(
                            points[i].x,
                            points[i].y,
                            points[i].x,
                            points[i].y
                        );
                    break;
                }
                case "line": {
                    ctx.moveTo(points[0].x, points[0].y);
                    ctx.lineTo(points[1].x, points[1].y);
                    break;
                }
                case "circle": {
                    let r = pointLength(points[0], points[1]);
                    ctx.arc(points[0].x, points[0].y, r, 0, 2 * Math.PI);
                    break;
                }
                case "rect": {
                    ctx.rect(
                        points[0].x,
                        points[0].y,
                        Math.abs(points[0].x - points[1].x),
                        Math.abs(points[0].y - points[1].y)
                    );
                    break;
                }
            }

            ctx.stroke();
            ctx.closePath();
        }
    }
    function drawSmooth(givenPoints) {
        // controlPoints.length = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(snapshot, 0, 0);

        ctx.beginPath();
        ctx.globalCompositeOperation = $globalCompositeOperation;
        // ctx.moveTo(prevX, prevY);
        // ctx.lineTo(currX, currY);
        ctx.moveTo(givenPoints[0].x, givenPoints[0].y);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = $lineWidth;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        let m = 0;
        let dx1 = 0;
        let dy1 = 0;
        let dx2 = 0;
        let dy2 = 0;
        let preP = givenPoints[0];
        let nexP;
        let i = 1;
        for (i = 1; i < givenPoints.length; i++) {
            let curP = givenPoints[i];
            nexP = givenPoints[i + 1];
            if (nexP) {
                m = tangent(preP, nexP);
                dx2 = (nexP.x - curP.x) * -0.3;
                dy2 = dx2 * m * 1;
            } else {
                dx2 = 0;
                dy2 = 0;
            }
            // ctx.bezierCurveTo(controlPoints[i - 1].tout.x, controlPoints[i - 1].tout.y,  controlPoints[i].tin.x, controlPoints[i].tin.y, givenPoints[i].x, givenPoints[i].y);
            ctx.bezierCurveTo(
                preP.x - dx1,
                preP.y - dy1,
                curP.x + dx2,
                curP.y + dy2,
                curP.x,
                curP.y
            );
            dx1 = dx2;
            dy1 = dy2;
            preP = curP;

            // controlPoints.push({
            //     x: 2 * givenPoints[i].x - controlPoints[i - 1].x,
            //     y: 2 * givenPoints[i].y - controlPoints[i - 1].y
            // })

            // p1 = givenPoints[i];
            // p2 = givenPoints[i + 1];
        }
        // console.log(controlPoints)
        ctx.stroke();
        ctx.closePath();
    }

    function erase() {
        var m = confirm("Want to clear");
        if (m) {
            ctx.clearRect(0, 0, width, height);
            document.getElementById("canvasimg").style.display = "none";
        }
    }

    function save() {
        document.getElementById("canvasimg").style.border = "2px solid";
        var dataURL = canvas.toDataURL();
        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";
    }
    const getMousePosition = (evt) => {
        let clientx = evt.clientX;
        let clienty = evt.clientY;
        return {
            x: (clientx - boundingRect.left) * scaleX,
            y: (clienty - boundingRect.top) * scaleY,
        };
    };
    const getCanvasCoords = (screenX, screenY) => {
        let matrix = ctx.getTransform();
        let inv = matrix.inverseSelf();
        return {
            x: screenX * inv.a + screenY * inv.c + inv.e,
            y: screenY * inv.b + screenY * inv.d + inv.f,
        };
    };
    function findxy(res, e) {
        if (res == "down") {
            // startTime = Date.now();
            boundingRect = canvas.getBoundingClientRect();
            scaleX = canvas.width / boundingRect.width;
            scaleY = canvas.height / boundingRect.height;
            // console.log(scaleX, scaleY)
            let pos = getMousePosition(e);
            e.preventDefault();
            snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
            points.push({ x: pos.x, y: pos.y });
            if ($drawMode !== "pen") points.push({ x: pos.x, y: pos.y });
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = $strokeColor;
                ctx.ellipse(
                    pos.x,
                    pos.y,
                    $lineWidth / 2,
                    $lineWidth / 2,
                    0,
                    0,
                    2 * Math.PI
                );
                ctx.fill();
                ctx.closePath();
                dot_flag = false;
            }
            ctx.strokeStyle = $strokeColor;
            ctx.lineWidth = $lineWidth;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            // animeFrame = requestAnimationFrame(draw);
        }
        if (res == "out") {
            e.preventDefault();
            flag = false;
            points.length = 0;
            reducedPoints.length = 0;
            areas.length = 0;
            controlPoints.length = 0;
            cancelAnimationFrame(animeFrame);
        }
        if (res == "up") {
            e.preventDefault();
            // requestAnimationFrame(draw);
            // draw();
            // endTime = Date.now();
            // console.log(points.length/(endTime - startTime)*1000)
            requestAnimationFrame(draw);
            //apply smoothing now
            flag = false;

            points.length = 0;
            reducedPoints.length = 0;
            areas.length = 0;
            controlPoints.length = 0;
            cancelAnimationFrame(animeFrame);
        }
        if (res == "move") {
            if (flag) {
                let pos = getMousePosition(e);
                e.preventDefault();
                if ($drawMode !== "pen") {
                    points[1] = {
                        x: pos.x,
                        y: pos.y,
                    };
                } else {
                    points.push({ x: pos.x, y: pos.y });
                    let n = points.length;
                    if (n > 2) {
                        controlPoints.push({
                            x: (points[n - 2].x + points[n - 1].x) / 2,
                            y: (points[n - 2].y + points[n - 1].y) / 2,
                        });
                    }
                }
                if (points.length % 4 === 0 || points.length === 2)
                    requestAnimationFrame(draw);
            }
        }
    }
    $: if ($clearAll) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snapshot = null;
        $clearAll = false;
    }
</script>

<!-- <div class="colors">
    {#each colors as color}
        <button style="background: {color};" on:click={() => strokeColor = color}></button>
    {/each}
</div> -->
<canvas bind:this={canvas} {width} {height} />

<!-- <style>
    .colors {
        display: flex;
        gap: 0.5em;
    }
</style> -->

<style>
    canvas {
        cursor: crosshair;
        -webkit-touch-callout: none !important;
        -webkit-user-select: none !important;
        -webkit-tap-highlight-color: transparent !important;
        -moz-user-select: -moz-none;
        -ms-user-select: none;
        touch-action: none !important;
        user-select: none !important;
        -webkit-user-drag: none;
    }
</style>

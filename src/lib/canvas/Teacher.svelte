<script>
	import { onMount } from "svelte";
    import { Point } from "$lib/utils/common/point";

	let teacher, person;
    // let ctm = {
    //     a: 1,
    //     d: 1,
    //     c: 0, 
    //     b: 0,
    //     e: 0,
    //     f: 0
    // };
    onMount(() => {
        // setTimeout(() => {
        //     ctm = teacher?.getScreenCTM().inverse();
        // }, 0)
        
    })
    // $: if (teacher) ctm = teacher.getScreenCTM().inverse();
	export function makeDraggable(node) {
		node.addEventListener(
			'touchstart',
			function (e) {
				e.preventDefault();
			},
			false
		);
		node.addEventListener('pointerdown', startDrag, false);
		node.addEventListener('pointerup', endDrag, false);
		node.addEventListener('pointercancel', endDrag, false);
		node.addEventListener('pointermove', drag, false);
		let dragOffset;
		let isDragging = false;
		
		function getPointerPosition(evt) {
			let clientx = evt.clientX;
			let clienty = evt.clientY;
			return {
				x: clientx,
				y: clienty
			};
		}
		function startDrag(evt) {
			let coord = getPointerPosition(evt);
            dragOffset = {
                x: coord.x - parseInt(window.getComputedStyle(node).left),
                y: coord.y - parseInt(window.getComputedStyle(node).top)
            }
            isDragging = true;
		}
		function drag(evt) {
            if (isDragging) {
                let coord = getPointerPosition(evt);
			    let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
                //update
                updatePosition(change);
            }
            
		}
		function endDrag(evt) {
			isDragging = false;	
		}
	}
    const updatePosition = (change) => {
        teacher.style.left = change.x + 'px';
        teacher.style.top = change.y + 'px';
    }
</script>

<div class="teacher noMenu" bind:this={teacher} use:makeDraggable>
    <img class="noMenu" src="/favicon.png" alt="">
</div>

<style>
	.teacher {
		background: transparent;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
	}
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        /* box-shadow: 0 0 3px gray; */
    }
</style>

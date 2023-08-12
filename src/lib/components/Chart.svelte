<script>
    import { attempted } from "../utils/practiceproblem/practiceStore";


    export let workoutClass = '';
    export let workoutChapter = '';
    export let dataSet = {
        attempted: [],
        correct: [],
        average: [],
        fastest: [],
        slowest: []
    };
    dataSet.attempted.reverse();
    dataSet.correct.reverse();
    dataSet.average.reverse();
    dataSet.fastest.reverse();
    dataSet.slowest.reverse();
    let Attempted = dataSet.attempted.reduce((sum, term) => sum + term, 0);
    let Correct = dataSet.correct.reduce((sum, term) => sum + term, 0);
    let Average = (dataSet.average.reduce((sum, term) => sum + Number(term), 0)/dataSet.average.length).toFixed(1);
    let Fastest = Math.min(...dataSet.fastest);
    let Slowest = Math.max(...dataSet.slowest);
    let colors = ['red', 'green', 'skyblue', 'orange', 'magenta'];
    let labels = {Attempted, Correct, Average, Fastest, Slowest}
    let points = ['', '', '', '', ''];
    let n = dataSet.attempted.length;
    let nat = Math.max(...dataSet.attempted)
    let nsl = Math.max(...dataSet.slowest)
    for(let j = 0; j < dataSet.attempted.length; j++) {
        points[0] += (300 * j/n) + ',' + (-dataSet.attempted[j] * 250/nat) + ' ';
    }
    for(let j = 0; j < dataSet.attempted.length; j++) {
        points[1] += (300 * j/n) + ',' + (-dataSet.correct[j] * 250/nat) + ' ';
    }
    for(let j = 0; j < dataSet.attempted.length; j++) {
        points[2] += (300 * j/n) + ',' + (-dataSet.average[j] * 50/nsl) + ' ';
    }
    for(let j = 0; j < dataSet.attempted.length; j++) {
        points[3] += (300 * j/n) + ',' + (-dataSet.fastest[j] * 50/nsl) + ' ';
    }
    for(let j = 0; j < dataSet.attempted.length; j++) {
        points[4] += (300 * j/n) + ',' + (-dataSet.slowest[j] * 50/nsl) + ' ';
    }

</script>
<div class="chart">
    <div class="caption">
        <div class="workoutClass">Class {workoutClass}</div>
        <div class="workoutChapter">{workoutChapter}</div>
    </div>
    <div class="figure">
        <div class="labels">
            {#each Object.keys(labels) as label,i}
                <span style="color: {colors[i]};border: 1px solid;padding:0.2em;">{label} = {labels[label]}</span>
            {/each}
        </div>
        <svg width="100%" height="200px" viewBox="-10 -310 320 320">
            <defs>
                <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="gray"/>
                </marker>
                {#each colors as color}
                    <marker
                        id={color}
                        viewBox="0 0 10 10"
                        refX="5"
                        refY="5"
                        markerWidth="5"
                        markerHeight="5">
                        <circle cx="5" cy="5" r="5" fill={color} />
                    </marker>
                {/each}
            </defs>
            <path d="M 0,-300 V 0 H 300" stroke="gray" stroke-width="1" fill="none" marker-start="url(#arrow)" marker-end="url(#arrow)" />
            {#each points as point,i}
                <polyline points={point} stroke={colors[i]} stroke-width="2" fill="none" marker-start="url(#{colors[i]})" marker-mid="url(#{colors[i]})" marker-end="url(#{colors[i]})" />
            {/each}
        </svg>
    </div>
    
</div>
<style>
    .figure {
        background: rgba(255, 255, 255, 0.2);
        padding: 0.5em;
        border-radius: 10px;
        margin-top: 0.5em;
        margin-bottom: 1em;
    }
    .caption {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }
    .labels {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
</style>
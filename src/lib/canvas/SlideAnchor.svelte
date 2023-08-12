<script lang='ts'>
    //@ts-nocheck
    import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/iit/stores';
    import {ripple} from '$lib/ui/ripple';
    export let anchors = [];
</script>
<ul>
    {#each anchors as anchor, index}
        <li use:ripple class:highlight={$currentSlide === index} on:click={() => $currentSlide = index}>{anchor}</li>
    {/each}
</ul>
<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        padding: 0.5em;
        font-size: 0.85em;
        line-height: 1.2;
        cursor: pointer;
    }
    .highlight {
        font-weight: 600;
        color: rgb(2, 136, 145);
        background-color: rgba(250, 250, 250, 0.9);
        border-radius: 5px;
    }
</style>
<script lang='ts'>
    //@ts-nocheck
    import Chip, { Set, Text } from '@smui/chips';
    import {ripple} from '$lib/ui/ripple';
    import { goto } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();
    export let chosenDay = 1;
    const days = [43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const gotoDay = (day) => {
        chosenDay = day;
        dispatch('chosenDay', chosenDay);
    }   
</script>
<h3 class="mdc-typography--headline4">Other days</h3>
<section class="days">
    <Set chips={days} let:chip style="display:flex;flex-direction:row;flex-wrap:nowrap;overflow-x:auto;">
        <Chip {chip} on:click={() => gotoDay(chip)}>
            <Text>{chip}</Text>
        </Chip>
    </Set>
    <!-- {#each days as day}
        <div class="day {chosenDay === day ? 'chosenDay':''}" use:ripple on:click={() => gotoDay(day)}>{day}</div>
    {/each} -->
</section>
<style>
    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        /* font-size: 10vw; */
        background: linear-gradient(
            to right,
            rgb(2 176 245),
            rgb(240 0 255),
            rgb(207 166 35),
            rgb(241 7 7)
        );
        background-clip: text;
        background: -webkit-linear-gradient(
            to right,
            rgb(2 176 245),
            rgb(240 0 255),
            rgb(207 166 35),
            rgb(241 7 7)
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .days {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        /* background: radial-gradient(rgb(35 100 120), black); */
        align-items: center;
        justify-content: start;
    }
    /* .days::-webkit-scrollbar {
        width: 5px;
        height: 10px;
    } */
    /* .day {
        display: flex;
        flex: 0 0 auto;
        width: 35px;
        height: 35px;
        cursor: pointer;
        padding: 0.5em;
        border: 0.5px solid rgba(0, 175, 255, 1);
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
    .chosenDay {
        display: flex;
        background: white;
        color: red;
    } */

</style>

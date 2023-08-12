<script lang='ts'>
    //@ts-nocheck
    import Card, {Content,
        PrimaryAction,
        Media,
        MediaContent,
        Actions,
        ActionButtons,
        ActionIcons,} from '@smui/card';
    import Button, { Icon, Label } from '@smui/button';
    import Chip, { Set, Text } from '@smui/chips';
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    
    import {onMount, onDestroy} from 'svelte';
    
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    
    
    import { currentPath } from "$lib/stores.js";
    $currentPath = "Satirigal";
    
    let W;
    
    const taglines = ['TRAIN YOUR BRAIN', 'Geniuses are not born, they are made.', 'They thought your kid has not got it.', 'Practice! Practice! Practice!'];
    let currentTagline = taglines[0];
    let tagTimer, tagIndex = 0;
    onMount(() => {
        tagTimer = setInterval(() => tagIndex = (tagIndex + 1) % taglines.length, taglines.length * 1000)
    })

    onDestroy(() => clearInterval(tagTimer));
    const updateProblem = (evt) => {
        goto(`/day_${chosenDay}`)
        
    }
    const selecteChapter = (i) => {
        goto(`/class_${i}`);
    };
    // let topics = {};
    // for(let i = 0; i < classes.length; i++) {
    //     for(let j = 0; j < chapters[classes[i]].length; j++) {
    //         topics[chapters[classes[i]][j]] = [];
    //     }
    // }
    // for(let i = 0; i < classes.length; i++) {
    //     for(let j = 0; j < chapters[classes[i]].length; j++) {
    //         topics[chapters[classes[i]][j]].push(classes[i]);
    //     }
    // }
    let keywords = "Politics, Economics, Satire, Satirical, Geo-politics";
    let title = "Satirigal: Satirical Girl";
    let description = "Your regular dose of satires";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://satirigal.com" />
    <meta name="description" content={description} />
    <meta name="keywords" content="{keywords}">
</svelte:head>
<!-- <section class="banner">
    <img src="/banner.svg" alt="" />
</section> -->
<article class="container">
    <!-- <section class="slide">
        <button class="subscription" use:ripple on:click={gotoSubscription}>Let's Practice</button>
        <h1 on:click={gotoSubscription}>Up 2 Math</h1>
    </section> -->
    
    <Card>
        <Content style="display:flex; align-items:center; justify-content:center;">
           <h1>Your regular dose of satires coming soon...</h1>
        </Content>
        <!-- <Actions>
            <Button on:click={() => goto('/auth')}>Start 1 week free trial</Button>
        </Actions> -->
    </Card>
    
</article>

<style>
    article {
        display:flex;
        flex-direction:column;
        gap:0.5em;
    }
    /* .slide h1, .top {
        font-family: roboto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 8vw;
        background: linear-gradient(
            to right,
            rgb(2 176 245),
            rgb(240 0 255),
            rgb(0, 164, 185),
            rgb(241 7 7)
        );
        background-clip: text;
        background: -webkit-linear-gradient(
            to right,
            rgb(2 176 245),
            rgb(240 0 255),
            rgb(0, 164, 185),
            rgb(241 7 7)
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        cursor: pointer;
    } */
    /* .top {
        background: linear-gradient(
            to right,
            rgb(2 176 245),
            rgb(240 0 255),
            rgb(0, 164, 185),
            rgb(241 7 7)
        );
        background-clip: text;
        background: -webkit-linear-gradient(
            to right,
            rgb(2 176 245),
            rgb(240 0 255),
            rgb(0, 164, 185),
            rgb(241 7 7)
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    } */
</style>

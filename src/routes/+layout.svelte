<script lang="ts">
    //@ts-nocheck
    import Drawer, {
        AppContent,
        Content,
        Scrim,
        Header,
        Title,
        Subtitle,
    } from "@smui/drawer";
    import Fab from "@smui/fab";
    import { Svg } from "@smui/common";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Nav from "$lib/components/Nav.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";
    import TopAppBar, { Row, Section } from "@smui/top-app-bar";
    import IconButton, {Icon} from "@smui/icon-button";
    import Button, { Label } from "@smui/button";
    import List, { Item, Text } from "@smui/list";
    import { showLeft, darkMode } from "$lib/stores.js";
    import { page, updated } from '$app/stores';
    import Analytics from "$lib/components/Analytics.svelte";
    import { goto } from '$app/navigation';
    import {currentPath, refreshApp} from '$lib/stores';
    import {presentationMode} from '$lib/pages/presentations/stores';
    import { beforeUpdate, afterUpdate } from 'svelte';
    beforeUpdate(() => $refreshApp = true)
    afterUpdate(() => $refreshApp = false)
    let W;
    $: fixed = W < 600;
    // $:console.log($page.data.user)
</script>
<svelte:head>
    <link
        rel="stylesheet"
        id="theme"
        href="/smui{$darkMode ? '-dark' : ''}.css"
    />
</svelte:head>
<div>
    <Analytics />
    <header style="position: relative;">
        <TopAppBar variant="fixed" color="secondary">
            <Row>
                <Section style="align-items:center;">
                    <div class="logo">
                        <a data-sveltekit-reload href="/">
                            <Icon>
                                <img width="40px" height="40px" style="background:white; border-radius:50%;" src="/favicon.png" alt="1" />
                            </Icon>
                        </a>
                    </div>
                    <IconButton class="material-icons" on:click={() => $showLeft = !$showLeft}>menu</IconButton>
                    <span>
                        {$currentPath}
                    </span>
                </Section>
                <Section align="end" toolbar>
                    <IconButton class="material-icons" aria-label="Search" on:click={() => goto('/search')}>search</IconButton>
                    <IconButton class="material-icons" aria-label="Search" on:click={() => $refreshApp = true, location.reload()}>refresh</IconButton>
                    <!-- <IconButton class="material-icons" aria-label="Settings"
                        >settings</IconButton
                    >
                    <IconButton class="material-icons" aria-label="Cancel"
                        >close</IconButton
                    > -->
                    <IconButton toggle bind:pressed={$darkMode}>
                        <Icon class="material-icons" on>dark_mode</Icon>
                        <Icon class="material-icons">light_mode</Icon>
                    </IconButton>
                </Section>
            </Row>
        </TopAppBar>
        <div class="navback"></div>
    </header>

    <div class="container" bind:clientWidth={W}>
        
        <Drawer variant='modal' bind:open={$showLeft}>
            <Content>
                <header class='nav'>
                    <Nav/>
                </header>
            </Content>
        </Drawer>
        <!-- <Scrim /> -->
        {#if fixed}
            <Scrim on:click={() => $showLeft = false}/>
        {/if}
        <AppContent>
            <main class={$presentationMode || fixed ? 'flex':'grid'}>
                <div class="center">
                    <slot />
                </div>
                {#if !$presentationMode}
                    <div class="side">
                        <Sidebar />
                    </div>
                {/if}
            </main>
        </AppContent>
    </div>
</div>
<style>
    /* .container {
        display: grid;
        grid-template-columns: 0.16fr auto;
        width: 100%;
        gap: 0.5em;
    } */
    * {
        box-sizing: border-box;
    }
    .container {
        width: 100%;
    }
    /* .logo {
        margin-left: 0.5em;
        margin-top: 0.5em;
    } */
    header {
        min-width: 100%;
        z-index: 200;
    }
    .navback {
        min-height: 4em;
    }
    .nav {
        max-width: 150px;
    }
    /* main {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        width: 100%;
        justify-items: center;
        
    } */
    .grid {
        display: grid;
        grid-template-columns: calc(100% - 256px) 256px;
    }
    .center {
        display: flex;
        flex-direction: column;
        width: auto;
        flex-grow: 1;
        padding: 0.5em;
    }
    .side {
        min-width: 250px;
        position: sticky;
        top: 4em;
        height: 100vh;
        overflow-y: auto;
        /* padding: 0.5em; */
    }
    @media only screen and (max-width: 600px) {
        main {
            display: flex;
            flex-direction: column;
            gap: 1em;
            width: 100%;
            flex: 1;
            min-width: 300px;
            /* overflow: hidden; */
        }
        .side {
            /* padding: 0 1em; */
            width: 100%;
            position: relative;
            height: fit-content;
        }
        .navback {
            min-height: 3.5em;
        }
    }
    
</style>

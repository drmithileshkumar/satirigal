<script lang="ts">
    //@ts-nocheck
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";
    import List, {
        Item,
        Graphic,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from "@smui/list";
    import {showLeft} from '$lib/stores';
    import { currentPath } from "$lib/stores.js";
    $currentPath = 'Settings';
    let options = [
        {
            name: "Bruce Willis",
            description: "Actor",
            disabled: false,
        },
        {
            name: "Austin Powers",
            description: "Fictional Character",
            disabled: true,
        },
        {
            name: "Thomas Edison",
            description: "Inventor",
            disabled: false,
        },
        {
            name: "Stephen Hawking",
            description: "Scientist",
            disabled: false,
        },
    ];
    let selection = "Stephen Hawking";
    // This value is updated when the component is initialized, based on the
    // selected Item's `selected` prop.
    let selectionIndex = undefined;
    
</script>
<svelte:head>
    <title>Settings</title>
    <link rel="canonical" href="https://satirigal.com/settings" />
    <meta name="description" content="Settings" />
</svelte:head>
<article>
    <header>
        <TopAppBar variant="static" color="secondary">
            <Row>
                <Section>
                    <IconButton class="material-icons" on:click={() => $showLeft = !$showLeft}>menu</IconButton>
                </Section>
                <Section align="end" toolbar>
                    <IconButton class="material-icons" aria-label="Settings"
                        >settings</IconButton
                    >
                    <IconButton class="material-icons" aria-label="Cancel"
                        >close</IconButton
                    >
                </Section>
            </Row>
        </TopAppBar>
    </header>
    <div class="photos">
        <div class="banner" />
        <div class="profile" />
    </div>
    <div class="messages">
        <List
            class="demo-list"
            twoLine
            avatarList
            singleSelection
            bind:selectedIndex={selectionIndex}
        >
            {#each options as item}
                <Item
                    on:SMUI:action={() => (selection = item.name)}
                    disabled={item.disabled}
                    selected={selection === item.name}
                >
                    <Graphic
                        style="background-image: url(https://place-hold.it/40x40?text={item.name
                            .split(' ')
                            .map((val) => val.substring(0, 1))
                            .join('')}&fontsize=16);"
                    />
                    <Text>
                        <PrimaryText>{item.name}</PrimaryText>
                        <SecondaryText>{item.description}</SecondaryText>
                    </Text>
                    <Meta class="material-icons">info</Meta>
                </Item>
            {/each}
        </List>
    </div>
</article>

<style>
    article {
        width: 100%;
    }
    header {
        margin-bottom: 1.5em;
    }
    .messages {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
</style>

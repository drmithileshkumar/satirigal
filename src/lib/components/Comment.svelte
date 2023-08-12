<!-- src/lib/components/comment.svelte -->
<script lang="ts">
    //@ts-nocheck
    import Card, {
        Content,
        PrimaryAction,
        Media,
        MediaContent,
        Actions,
        ActionButtons,
        ActionIcons,
    } from "@smui/card";
    import IconButton from "@smui/icon-button";
    import ListItem from "@smui/list";
    import Button, { Label, Icon } from "@smui/button";
    import List, {
        Item,
        Graphic,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from "@smui/list";
    import {goto} from '$app/navigation';
    import { onMount } from "svelte";
    import Chip, { Set } from "@smui/chips";
    import {page} from '$app/stores';
    let profile = '';
    export let comment = {
        parentID: '',
        name: "",
        publicID: "", //public
        profileImage: "",
        content: "",
        comments: [], 
        creationTimeStamp: Date.now(),
    };
    onMount(async () => {
        // console.log(`/api/${comment.publicID}/media?media=${comment.media}`);
        if(profile.length === 0) {
            let res1 = await fetch(`/api/${comment.publicID}/profilepic`);
            let profilepicData = await res1.blob();
            let reader = new FileReader();
            reader.readAsDataURL(profilepicData);
            reader.onload = e => {
                profile = e.target.result;
                // console.log(profile)
            }
        }
    });
</script>

<Card>
    <!-- </PrimaryAction> -->
    <Content class="mdc-typography--body2">
        <div class="commentcontainer">
            <div class="image">
                <img src={profile} alt={comment.name} />
            </div>
            <div class="body">
                <div class="header">
                    <span class="primary" on:click={() => goto(`/${comment.publicID}`)}>{comment.name}</span>
                    <span class="secondary">
                        <span>{comment.publicID}</span>
                        <span
                            >{new Date(
                                comment.creationTimeStamp
                            ).toLocaleString()}</span
                        >
                    </span>
                </div>
                <div class="commentcontent">{@html comment.content}</div>
            </div>
        </div>
    </Content>
    <Actions>
        <Button on:click={() => goto(comment.parentID.includes('Comment') ? `/` : `/post/${comment.parentID}`)}>Parent</Button>
        <!-- <Button on:click={() => console.log("Comment clicked")}>
            <Icon class="material-icons">chat_bubble_outline</Icon>
            <Label>Comment</Label>
        </Button> -->
        <!-- <Button on:click={() => console.log("Share clicked")}>
            <Icon class="material-icons">autorenew</Icon>
            <Label>{comment.shares}</Label>
        </Button> -->    
        {#if $page.data.user && ($page.data.user.publicID === comment.publicID)}
            <Button on:click={() => goto(`/${$page.data.user.publicID}/edit/comment?commentID=${comment.commentID}`)}>
                <!-- <Icon class="material-icons">chat_bubble_outline</Icon> -->
                <Label>Edit</Label>
        </Button>
        {/if}
    </Actions>
</Card>

<style>
    .commentcontainer {
        display: grid;
        grid-template-columns: 50px auto;
        gap: 0.5em;
    }
    .image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
    }
    .image img {
        width: 50px;
        height: 50px;
    }
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
    }
    .header .primary {
        font-weight: bold;
    }
    .header .secondary {
        color: gray;
        font-size: 0.9em;
    }
    .primary {
        cursor: pointer;
    }
    .commentcontent {
        /* height: 100px; */
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>

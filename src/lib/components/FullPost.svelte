<!-- src/lib/components/post.svelte -->
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
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Chip, { Set } from "@smui/chips";
    import Comments from './Comments.svelte';
    import ComposeComment from "./ComposeComment.svelte";
    export let profile = '';
    let media;
    let isPostLiked = false;
    let isTakingComment = false;
    export let post = {
        name: "",
        publicID: "", //public
        media: "",
        profileImage: "",
        title: "",
        subtitle: "",
        content: "",
        comments: [], //count
        shares: [], //count
        likes: [], //count
        creationTimeStamp: Date.now(),
    };
    let comments = [];
    onMount(async () => {
        // console.log(`/api/${post.publicID}/media?media=${post.media}`);
        if (post.media) {

            let res = await fetch(
                `/api/${post.publicID}/media?media=${post.media}`
            );
            if(!res.ok) {
                alert('Failed to load data...')
            }
            let reader = new FileReader();
            let mediaData;
            
            if(post.media.split('.')[1] === 'svg'){
                mediaData = await res.text();
                media = 'data:image/svg+xml,' + encodeURIComponent(mediaData);
            } else {
                mediaData = await res.blob();
                reader.readAsDataURL(mediaData);
                reader.onload = (e) => {
                    media = e.target.result; 
                };
            }
        }
        if(profile.length === 0) {
            let res1 = await fetch(`/api/${post.publicID}/profilepic`);
            let profilepicData = await res1.blob();
            let reader = new FileReader();
            reader.readAsDataURL(profilepicData);
            reader.onload = e => {
                profile = e.target.result;
                // console.log(profile)
            }
        }
        //get liked status
        let resLiked = await fetch(`/api/${$page.data.user.publicID}/likes/${post.postID}`);
        if(!resLiked.ok) {
            isPostLiked = false;
        } else {
            let liked = await resLiked.json();
            isPostLiked = liked;
            console.log(isPostLiked);
        }
        //get comments
        const resComment = await fetch(`/api/post/${post.postID}/comments`);
        if(!resComment.ok) {
            comments = [];
        } else {
            comments = await resComment.json();
        }
    });
    const like = async () => {
        // console.log('Action:', !isPostLiked);
        const resLike = await fetch(`/api/${$page.data.user.publicID}/likes/${post.postID}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({postID: post.postID, liked: !isPostLiked})
        })
        isPostLiked = !isPostLiked;
    }
    // $:console.log('media', media)
</script>
<article>
    <Card>
        {#if media}
        <Media style='display:flex; align-items:center; justify-content:center; max-height: 300px;background:white;'>
            <img style='max-height:300px;' src="{media}" alt="img">
        </Media>
        {/if}
        <!-- </PrimaryAction> -->
        <Content class="mdc-typography--body2">
            <h2 class="mdc-typography--headline6" style="margin: 0;">
                {post.title}
            </h2>
            <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
                {post.subtitle}
            </h3>
            <div class="tagsInput">
                <Set chips={post.tags} let:chip nonInteractive>
                    <Chip {chip}>
                        <Text>{chip}</Text>
                    </Chip>
                </Set>
            </div>
            <div class="postcontainer">
                <div class="image">
                    <img src={profile} alt={post.name} />
                </div>
                <div class="body">
                    <div class="header">
                        <span class="primary" on:click={() => goto(`/${post.publicID}`)}>{post.name}</span>
                        <span class="secondary">
                            <span>{post.publicID}</span>
                            <span
                                >{new Date(
                                    post.creationTimeStamp
                                ).toLocaleString()}</span
                            >
                        </span>
                    </div>
                    <div class="postcontent">{@html post.content}</div>
                </div>
            </div>
        </Content>
        <Actions>
            <Button on:click={() => isTakingComment = !isTakingComment}>
                <Icon class="material-icons">chat_bubble_outline</Icon>
                <Label>Comment</Label>
            </Button>
            <!-- <Button on:click={() => console.log("Share clicked")}>
                <Icon class="material-icons">autorenew</Icon>
                <Label>{post.shares}</Label>
            </Button> -->
            <IconButton on:click={like} toggle pressed={isPostLiked}>
                <Icon class="material-icons" on>favorite</Icon>
                <Icon class="material-symbols-outlined">favorite_border</Icon>
            </IconButton>
            
            {#if $page.data.user && ($page.data.user.publicID === post.publicID)}
                <Button on:click={() => goto(`/${$page.data.user.publicID}/edit?postID=${post.postID}`)}>
                    <!-- <Icon class="material-icons">chat_bubble_outline</Icon> -->
                    <Label>Edit</Label>
                </Button>
            {/if}
        </Actions>
    </Card>
    <!------------Comments--------->
    <Comments comments={comments} />
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .postcontainer {
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
</style>

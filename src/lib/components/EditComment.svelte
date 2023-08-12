<!-- src/lib/components/comment.svelte -->
<script lang='ts'>
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
    import Button, { Label } from "@smui/button";
    import IconButton, { Icon } from "@smui/icon-button";
    import ImageUploader from "./ImageUploader.svelte";
    import { profileImage } from "$lib/stores";
    import { page } from "$app/stores";
    import { goto, invalidate } from "$app/navigation";
    import Chip, { Set, Text } from "@smui/chips";
    export let parentID;
    let choices = [
        'Mathematics',
        "Physics",
        "Politics",
        "Technology",
        "Sports",
        "Health",
        "Science",
        "Economics",
        "Arts",
    ];
    let selected = [];
    export let comment = {
        parentID: parentID,
        name: $page.data.user.name,
        publicID: $page.data.user.publicID, //public
        profileImage: $page.data.user.profile,
        content: "",
        comments: [], 
        images: [],
        creationTimeStamp: Date.now(),
    };
    
    const updatecomment = async () => {
        const res = await fetch(`/api/${$page.data.user.publicID}/compose/comment`, {
            method: "PUT",
            body: JSON.stringify(comment),
            headers: {
                "content-type": "application/json",
            },
        });
        if (!res.ok) {
            alert("Failed to create comment");
            return;
        }
        // invalidate(`/${$page.data.user.publicID}`);
        goto(`/post/${comment.parentID}`);
    };
    // $: console.log(comment.media)
</script>

<!-- <br /> -->
<Card>
    <Content class="mdc-typography--body2">
        <div class="commentcontainer">
            <div class="image">
                <img src={$profileImage} alt={comment.name} />
            </div>
            <div class="body">
                <div class="header">
                    <span class="primary">{comment.name}</span>
                    <span class="secondary">
                        <span>{comment.publicID}</span>
                        <span
                            >{new Date(
                                comment.creationTimeStamp
                            ).toLocaleString()}</span
                        >
                    </span>
                </div>
                <div
                    class="commentcontent"
                    contenteditable="true"
                    placeholder="Type content here..."
                    bind:textContent={comment.content}
                />
            </div>
        </div>
    </Content>
    <Actions fullBleed>
        <Button on:click={updatecomment}>
            <Label>Update Comment</Label>
            <i class="material-icons" aria-hidden="true">arrow_forward</i>
        </Button>
    </Actions>
</Card>

<style>
    .commentcontainer {
        display: grid;
        grid-template-columns: 50px auto;
        gap: 0.5em;
    }
    .image {
        border-radius: 50%;
        overflow: hidden;
        width: 50px;
        height: 50px;
    }
    .image img {
        width: 100%;
        height: 100%;
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
    .commentcontent {
        border: none;
        outline: none;
    }
    [contenteditable]:empty:before {
        content: attr(placeholder);
        display: block;
        color: gray;
    }
</style>

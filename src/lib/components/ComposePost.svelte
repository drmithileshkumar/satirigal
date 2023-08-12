<!-- src/lib/components/post.svelte -->
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
    export let post = {
        name: $page.data.user.name,
        publicID: $page.data.user.publicID, //public
        media: "",
        profileImage: $page.data.user.profile,
        title: "",
        subtitle: "",
        content: "",
        summary: '',
        comments: [], //count
        shares: [], //count
        likes: [], //count
        tags: [],
        images: [],
        creationTimeStamp: Date.now(),
    };
    let isClicked = false;
    let media;
    const uploadPhoto = () => {
        isClicked = true;
    };
    const setMedia = (e) => {
        // console.log("mediapath...", e.detail.mediaPath);
        post.media = e.detail.mediaPath;
        post = post;
        media = e.detail.imgBase64
    };
    const uploadpost = async () => {
        if(post.title.length === 0) {
            alert('Title is required')
            return
        }
        post.tags = selected;
        post = post;
        const res = await fetch(`/api/${$page.data.user.publicID}/compose`, {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "content-type": "application/json",
            },
        });
        if (!res.ok) {
            alert("Failed to create post");
            return;
        }
        // invalidate(`/${$page.data.user.publicID}`);
        goto(`/${$page.data.user.publicID}`);
    };
    // $: console.log(post.media)
</script>

<!-- <br /> -->
<Card>
    <!-- <PrimaryAction on:click={() => console.log("clicked...")}> -->
    <ImageUploader
        bind:media
        url="/api/{post.publicID}/media"
        bind:isClicked
        on:onUpload={setMedia}
    />
    <Media style='display:flex; align-items:center; justify-content:center; min-height: 100px; max-height: 300px;background:white;'>
        <img style='max-height:300px;' src={media} alt='img'>
        <MediaContent>
            <div
                style="color: gray; position: absolute; bottom: 16px; left: 16px;"
            >
                <span on:click={uploadPhoto} class="addphoto material-icons"
                    >add_a_photo</span
                >
            </div>
        </MediaContent>
    </Media>
    <!-- </PrimaryAction> -->
    <Content class="mdc-typography--body2">
        <div class="tagsInput">
            <Set chips={choices} let:chip filter bind:selected>
                <Chip {chip} touch>
                    <Text>{chip}</Text>
                </Chip>
            </Set>
        </div>
        <h2
            class="title mdc-typography--headline6"
            style="margin: 0;"
            contenteditable="true"
            placeholder="Title here..."
            bind:textContent={post.title}
        />
        <h3
            class="subtitle mdc-typography--subtitle2"
            style="margin: 0.5em 0"
            contenteditable="true"
            placeholder="Subtitle here..."
            bind:textContent={post.subtitle}
        />
        <div class="postcontainer">
            <div class="image">
                <img src={$profileImage} alt={post.name} />
            </div>
            <div class="body">
                <div class="header">
                    <span class="primary">{post.name}</span>
                    <span class="secondary">
                        <span>{post.publicID}</span>
                        <span
                            >{new Date(
                                post.creationTimeStamp
                            ).toLocaleString()}</span
                        >
                    </span>
                </div>
                <div
                    class="postSummary"
                    contenteditable="true"
                    placeholder="Type summary here..."
                    bind:textContent={post.summary}
                />
                <br>
                <div
                    class="postcontent"
                    contenteditable="true"
                    placeholder="Type content here..."
                    bind:textContent={post.content}
                />
            </div>
        </div>
    </Content>
    <Actions fullBleed>
        <Button on:click={uploadpost}>
            <Label>Create Post</Label>
            <i class="material-icons" aria-hidden="true">arrow_forward</i>
        </Button>
    </Actions>
</Card>

<style>
    .postcontainer {
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
    .postcontent, .postSummary,
    .title,
    .subtitle {
        border: none;
        outline: none;
    }
    [contenteditable]:empty:before {
        content: attr(placeholder);
        display: block;
        color: gray;
    }
    .addphoto {
        cursor: pointer;
    }
</style>

<script lang='ts'>
    //@ts-nocheck
    import FullPost from '$lib/components/FullPost.svelte';
    import { currentPath } from "$lib/stores.js";
    $currentPath = 'Post';
    export let data;
    let profile = ''
</script>
<svelte:head>
    <title>{data.post.title}</title>
    <link rel="canonical" href="https://satirigal.com/post/${data.post.postID}" />
    <meta name="description" content="satirigal.com" />
</svelte:head>
<FullPost post={data.post} {profile} />
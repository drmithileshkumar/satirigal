<script lang='ts'>
    //@ts-nocheck
    import EditPost from "$lib/components/EditPost.svelte";
    export let data;
</script>
<svelte:head>
    <title>Edit post</title>
    <link rel="canonical" href="https://satirigal.com/edit" />
    <meta name="description" content="Trending Post." />
</svelte:head>
<article>
    <EditPost post={data.post} />
</article>

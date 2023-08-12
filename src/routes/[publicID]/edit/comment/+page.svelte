<script lang='ts'>
    //@ts-nocheck
    import EditComment from "$lib/components/EditComment.svelte";
    export let data;
</script>
<svelte:head>
    <title>Edit comment</title>
    <link rel="canonical" href="https://satirigal.com/edit/comment" />
    <meta name="description" content="Trending Comment." />
</svelte:head>
<article>
    <EditComment comment={data.comment} />
</article>

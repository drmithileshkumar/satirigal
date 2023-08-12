<script lang='ts'>
    //@ts-nocheck
    import Post from "./Post.svelte";


    export let posts = []
    export let profile = '';
    // $:console.log(posts)
</script>
<div class="posts">
    {#each posts as post}
        <Post {post} {profile} />
    {:else}
        <p>Your posts here.</p>
    {/each}
</div>
<style>
    .posts {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>
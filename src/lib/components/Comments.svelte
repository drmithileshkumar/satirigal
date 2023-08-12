<script lang='ts'>
    //@ts-nocheck
    import Comment from "./Comment.svelte";
    export let comments = []
    export let profile = '';
    // $:console.log(comments)
</script>
<div class="comments">
    {#each comments as comment}
        <Comment {comment} {profile} />
    {:else}
        <p>Your comments here.</p>
    {/each}
</div>
<style>
    .comments {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>
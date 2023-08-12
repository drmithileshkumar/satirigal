<script lang='ts'>
    //@ts-nocheck
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Post from './Post.svelte';
    let likes = [];
    let likesProfiles = {}, profilePicReader;
    onMount(async () => {
        const likesRes = await fetch(`/api/${$page.params.publicID}/likes`);
        if(!likesRes.ok) {
            likes = []
        }
        likes = await likesRes.json();
        // for(let i = 0; i < likes.length; i++) {
        //     await getProfile(likes[i].publicID)
        // }
        // likesProfiles = likesProfiles;
    })
    const getProfile = async (id) => {
        const profileRes = await fetch(`/api/${id}/profilepic`);
        if(!profileRes.ok) likesProfiles[id] = '';
        let profilepicData = await profileRes.blob();
        profilePicReader = new FileReader();
        profilePicReader.readAsDataURL(profilepicData);
        profilePicReader.onload = (e) => {
            likesProfiles[id] = e.target.result;
        };
    }
</script>
<div class="likes">
    {#each likes as like}
        <Post post={like} />
    {:else}
        <p>Your liked posts here.</p>
    {/each}
</div>
<style>
    .likes {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>
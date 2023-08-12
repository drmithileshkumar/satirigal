<script lang='ts'>
    //@ts-nocheck
    import List, {
        Item,
        Graphic,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from '@smui/list';
    import Button, { Label } from '@smui/button';
    import Card from '@smui/card';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    let followings = [];
    let list, selectionIndex, profilePicReader, followingProfiles = {};
    onMount(async () => {
        const followingsRes = await fetch(`/api/${$page.params.publicID}/followings`);
        if(!followingsRes.ok) {
            followings = []
        }
        followings = await followingsRes.json();
        for(let i = 0; i < followings.length; i++) {
            await getProfile(followings[i].publicID)
        }
        followingProfiles = followingProfiles;
    })
    const getProfile = async (id) => {
        const profileRes = await fetch(`/api/${id}/profilepic`);
        if(!profileRes.ok) followingProfiles[id] = '';
        let profilepicData = await profileRes.blob();
        profilePicReader = new FileReader();
        profilePicReader.readAsDataURL(profilepicData);
        profilePicReader.onload = (e) => {
            followingProfiles[id] = e.target.result;
        };
    }
</script>
<Card>
    <List
        class="demo-list"
        bind:this={list}
        twoLine
        avatarList
        singleSelection
        selectedIndex={selectionIndex}>
    {#each followings as following, i}
      <Item
        on:SMUI:action={() => goto(`/${following.publicID}`)}
        selected={selectionIndex === i}
      >
        <Graphic>
            <img width="100%" height="100%" src={followingProfiles[following.publicID]} alt='profile'>
        </Graphic>
          
        <Text>
          <PrimaryText>{following.name}</PrimaryText>
          <SecondaryText>{following?.bio}</SecondaryText>
        </Text>
        <Meta>
            <span class="following">{following.isFollow ? '' : 'Not'} Following</span>
        </Meta>
      </Item>
    {/each}
</List>
</Card>

  <style>
    img {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 50%;
    }
    .following {
        white-space: nowrap;
        color: red;
        /* font-size: 0.5em; */
    }
  </style>
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
    let followers = [];
    let list, selectionIndex, profilePicReader, followerProfiles = {};
    onMount(async () => {
        const followersRes = await fetch(`/api/${$page.params.publicID}/followers`);
        if(!followersRes.ok) {
            followers = []
        }
        followers = await followersRes.json();
        for(let i = 0; i < followers.length; i++) {
            await getProfile(followers[i].publicID)
        }
        followerProfiles = followerProfiles;
    })
    const getProfile = async (id) => {
        const profileRes = await fetch(`/api/${id}/profilepic`);
        if(!profileRes.ok) followerProfiles[id] = '';
        let profilepicData = await profileRes.blob();
        profilePicReader = new FileReader();
        profilePicReader.readAsDataURL(profilepicData);
        profilePicReader.onload = (e) => {
            followerProfiles[id] = e.target.result;
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
    {#each followers as follower, i}
      <Item
        on:SMUI:action={() => goto(`/${follower.publicID}`)}
        selected={selectionIndex === i}
      >
        <Graphic>
            <img width="100%" height="100%" src={followerProfiles[follower.publicID]} alt='profile'>
        </Graphic>
          
        <Text>
          <PrimaryText>{follower.name}</PrimaryText>
          <SecondaryText>{follower?.bio}</SecondaryText>
        </Text>
        <Meta>
            <span class="following">{follower.isFollow ? '' : 'Not'} Following</span>
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
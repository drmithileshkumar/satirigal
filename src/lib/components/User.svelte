<script lang="ts">
    //@ts-nocheck
    import Card, { Content, Actions } from "@smui/card";
    import Button from "@smui/button";
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    export let banner;
    export let profile;
    export let currentUser;
    export let currentUserDetail;
    export let active;
    $: if(profile === 'data:') profile = '/avatar.svg';
    $: if(banner === 'data:') banner = '/landing/banner.svg';
    $: tabs = [
        `${currentUserDetail.common.following} Following`,
        `${currentUserDetail.common.followers} Followers`,
        'Posts',
        'Comments',
        'Likes'
    ]
    const handleClick = (tab) => {
        switch(tab) {
            case 'Posts': {
                break;
            }
            case 'Comments': {
                break;
            }
            case 'Likes': {
                break;
            }
            case tab.includes('Following'): {
                alert('Loading Following...')
                break;
            }
            case tab.includes('Followers'): {
                alert('Loading Followers...')
                break;
            }
        }
    }
    const follow = async () => {
        let res = await fetch(`/api/${currentUser.publicID}/following`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        });
        if(!res.ok) {
            alert('Failed to Follow')
            return
        }
        
        await invalidate(`/api/${currentUser.publicID}`)
        
        // console.log('following...', data.currentUserDetail.isFollowing)
        // alert('Added to following!!')
    }
    const unfollow = async () => {
        let res = await fetch(`/api/${currentUser.publicID}/following`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        });
        if(!res.ok) {
            alert('Failed unfollow')
            return
        }
        
        await invalidate(`/api/${currentUser.publicID}`)
        // console.log('unfollowing...', data.currentUserDetail.isFollowing)
        // alert('Removed from following!!')
    }
</script>

<Card>
    
    <div class="photos">
        <div class="banner">
            <img src={banner} alt="banner" />
        </div>
        <div class="profile">
            <img src='user.svg' alt="" />
        </div>
    </div>
    <div class="action">
        {#if $page.data.user && $page.data.user.publicID === currentUser.publicID}
            <Button on:click={() => goto("/settings/profile")}
                >Edit Profile</Button
            >
        {:else if currentUserDetail.isFollowing}
            <Button on:click={unfollow}>Following</Button>
        {:else}
            <Button on:click={follow}>Follow</Button>
        {/if}
    </div>
    <Content class="mdc-typography--body2">
        <div class="details">
            <div class="userInfo">
                <div class="name">
                    <span class='mdc-typography--headline5'>{currentUser.name}</span>
                    <span class="material-icons">verified</span>
                </div>
                <div class="publicID">{currentUser.publicID}</div>
            </div>
            <div class="aboutme">
                <p>{currentUserDetail.common.bio}</p>
            </div>
            <div class="summary">
                <span class="prop">
                    <span class="icon material-icons">stars</span>
                    <span class="propName"
                        >{currentUserDetail.details.rank.label}</span
                    >
                </span>
                <span class="bullet" />
                <span class="prop">
                    <span class="icon material-icons">link</span>
                    <span class="propName"
                        >{currentUserDetail.common.website}</span
                    >
                </span>
            </div>
            <!-- <div class="circle">
                <span class="followers">
                    <strong>{currentUserDetail.common.following}</strong>
                    <span>Following</span>
                </span>
                <span class="following">
                    <strong>{currentUserDetail.common.followers}</strong>
                    <span>Followers</span>
                </span>
            </div> -->
        </div>
    </Content>

    <TabBar {tabs} let:tab bind:active>
        <Tab {tab}>
            <Label>{tab}</Label>
        </Tab>
    </TabBar>
    
</Card>
<style>
    .photos {
        position: relative;
    }
    .banner {
        width: 100%;
        height: 170px;
        background-color: rgba(0, 247, 255, 0.919);
    }
    .profile {
        position: absolute;
        bottom: -50px;
        left: 10px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: white;
        border-width: 2px;
        overflow: hidden;
    }
    .banner img, .profile img {
        width: 100%;
        height: 100%;
    }
    .action {
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .details {
        margin-left: 1em;
    }
    .name {
        display: flex;
        gap: 0.3em;
        font-weight: bold;
        font-size: 1.1em;
        margin-top: 1em;
        align-items: center;
    }
    .publicID {
        font-size: 0.9em;
        /* color: rgb(187, 186, 186); */
    }
    .aboutme p {
        margin-bottom: 0;
    }
    .aboutme, .summary {
        font-size: 0.8em;
    }
    .summary {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        /* color: rgb(200, 200, 200); */
    }
    .prop {
        display: flex;
        align-items: center;
        gap: 0.3em;
    }
    .bullet {
        display: flex;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: currentColor;
        /* background: gray; */
    }
    /* .circle {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        margin-top: 1em;
        font-size: 0.8em;
        margin-bottom: 1em;
        color: rgb(200, 200, 200);
    } */
</style>
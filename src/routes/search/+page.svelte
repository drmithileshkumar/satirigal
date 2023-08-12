<script lang='ts'>
    //@ts-nocheck
    import Card from '@smui/card';
    import Button, { Group, GroupItem, Label, Icon } from '@smui/button';
    import Menu from '@smui/menu';
    import List, { Item,
            Graphic,
            Meta,
            Text,
            PrimaryText,
            SecondaryText } from '@smui/list';
    import { Input } from '@smui/textfield';
    import Paper from '@smui/paper';
    import Fab from '@smui/fab';
    import { goto } from '$app/navigation';
    
    let menu, showResult = false, list, selectionIndex;
    let searchKey = 'name', value, searchProfiles = [], searchResult = [], profilePicReader;
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            doSearch();
        }
    }
    const doSearch = async () => {
        const resSearch = await fetch(`/api/search?searchKey=${searchKey}&value=${value}`);
        if(!resSearch.ok) {
            searchResult = []
        } else {
            searchResult = await resSearch.json();
            for(let i = 0; i < searchResult.length; i++) {
                await getProfile(searchResult[i].publicID)
            }
            searchProfiles = searchProfiles;
        }
        showResult = true;
    }
    const getProfile = async (id) => {
        const profileRes = await fetch(`/api/${id}/profilepic`);
        if(!profileRes.ok) searchProfiles[id] = '';
        let profilepicData = await profileRes.blob();
        profilePicReader = new FileReader();
        profilePicReader.readAsDataURL(profilepicData);
        profilePicReader.onload = (e) => {
            searchProfiles[id] = e.target.result;
        };
    }
</script>
<article>
    <div class="solo-demo-container solo-container">
        <Group variant="raised">
            <Button variant="raised">
                <Label>{searchKey.toUpperCase()}</Label>
            </Button>
            <div use:GroupItem>
                <Button
                    on:click={() => menu.setOpen(true)}
                    variant="raised"
                    style="padding: 0; min-width: 36px;"
                    >
                    <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
                </Button>
                <Menu bind:this={menu} anchorCorner="TOP_LEFT">
                    <List>
                        <Item on:SMUI:action={() => searchKey = 'name'}>
                            <Text>Name</Text>
                        </Item>
                        <Item on:SMUI:action={() => searchKey = 'publicID'}>
                            <Text>Public ID</Text>
                        </Item>
                        <Item on:SMUI:action={() => searchKey = 'city'}>
                            <Text>City</Text>
                        </Item>
                        <!-- <Separator />
                        <Item on:SMUI:action={() => clicked++}>
                            <Text>Thing 3</Text>
                        </Item> -->
                    </List>
                </Menu>
            </div>
        </Group>
        <Paper class="solo-paper" elevation={6}>
            <Icon class="material-icons">search</Icon>
            <Input
                bind:value
                on:keydown={handleKeyDown}
                placeholder={'Enter ' + searchKey}
                class="solo-input"
            />
        </Paper>
        <Fab
            on:click={doSearch}
            disabled={value === ''}
            color="primary"
            mini
            class="solo-fab">
            <Icon class="material-icons">arrow_forward</Icon>
        </Fab>
    </div>
    {#if showResult}
        <Card>
            <List
                class="demo-list"
                bind:this={list}
                twoLine
                avatarList
                singleSelection
                selectedIndex={selectionIndex}>
                {#each searchResult as searchedUser, i}
                    <Item
                        on:SMUI:action={() => goto(`/${searchedUser.publicID}`)}
                        selected={selectionIndex === i}
                    >
                        <Graphic>
                            <img width="100%" height="100%" src={searchProfiles[searchedUser.publicID]} alt='profile'>
                        </Graphic>
                        
                        <Text>
                        <PrimaryText>{searchedUser.name}</PrimaryText>
                        <SecondaryText>{searchedUser?.bio}</SecondaryText>
                        </Text>
                        <!-- <Meta>
                            <span class="following">{searchedUser.isFollow ? '' : 'Not'} Following</span>
                        </Meta> -->
                    </Item>
                {/each}
            </List>
        </Card>
    {/if}
</article>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .solo-demo-container {
        padding: 36px 18px;
        /* background-color: var(--mdc-theme-background, #f8f8f8); */
        border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    }
 
  .solo-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    * :global(.solo-paper) {
        display: flex;
        align-items: center;
        flex-grow: 1;
        max-width: 600px;
        margin: 0 12px;
        padding: 0 12px;
        height: 48px;
    }
    * :global(.solo-paper > *) {
        display: inline-block;
        margin: 0 12px;
    }
    * :global(.solo-input) {
        flex-grow: 1;
        color: currentColor;
        /* color: var(--mdc-theme-on-surface, #000); */
    }
    * :global(.solo-input::placeholder) {
        /* color: var(--mdc-theme-on-surface, #000); */
        opacity: 0.6;
    }
    * :global(.solo-fab) {
        flex-shrink: 0;
    }
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
    }
</style>
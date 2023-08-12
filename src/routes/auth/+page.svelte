<script lang="ts">
    // @ts-nocheck
    import Button from "@smui/button";
    import { Label } from "@smui/common";
    import Chip, { Set, Text } from '@smui/chips';
    import Card, {Content, Actions} from '@smui/card';
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import { enhance } from "$app/forms";
    import { goto, invalidateAll } from "$app/navigation";
    import { page } from "$app/stores";
    import { loggedInUser, profileImage } from "$lib/stores";
    import ScanQR from "$lib/qr/ScanQR.svelte";
    import GenerateQR from "$lib/qr/GenerateQR.svelte";
    import { onMount } from "svelte";
    import { currentPath } from "$lib/stores.js";
    $currentPath = 'Authentication'

    let choices = ["Log in", "Sign up"];
    let selected = "Log in";
    let error;
    let phone = null,
        name = null;
    let generateQR = false,
        downloadQR = false;
    let ids, privateID, otpID, publicID, profile;
    let downloader, filename;
    let qrlink, waId;
    let loginStatus = "Login",
        scanned = false;
    let waName = null,
        waNumber = null;
    const readFromScan = (event) => {
        publicID = event.detail.filename;
        let data = event.detail.data.split(" ");
        privateID = data[0];
        otpID = data[1];
        scanned = true;
    };

    function logout() {
        document.cookie = "jwt=; Max-Age=0; Path=/;";
        $page.data.user = null;
        goto("/");
    }
    const login = async () => {
        loginStatus = "Waiting...";
        // console.log('publicID', publicID, '')
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                phone,
                publicID,
                privateID,
                otpID,
            }),
            headers: {
                "content-type": "application/json",
            },
        });

        if (!res.ok) {
            error = await res.text();
            // console.error(error)
            loginStatus = "Failed";
            return;
        }
        // let user = await res.json();
        await setProfileImage();
        invalidateAll();
        // goto(`/${$page.data.user.publicID}`)

        // if(user)  {

        //     await setProfileImage();

        //     loginStatus = 'Success';

        //     goto(`/subscription`)
        // }
    };
    const setProfileImage = async () => {
        const res = await fetch(`/api/profilepic`);

        if (!res.ok) {
            alert("Failed to load image");
            return;
        }

        let imageData = await res.blob();

        // console.log(imageData)

        if (imageData.size === 0) {
            profileImage.set("/avatar.svg");
            return;
        }
        profile = URL.createObjectURL(imageData);
        let reader = new FileReader();
        reader.readAsDataURL(imageData);
        reader.onload = (e) => {
            profile = e.target.result;
            profileImage.set(profile);
        };
    };
    const sanitizeName = () => {
        name = name.trim();
        let parts = name.split(" ");
        name = parts
            .map((part) => part[0].toUpperCase() + part.slice(1))
            .join(" ");
    };
    const signup = async () => {
        sanitizeName();
        // console.log('posting...')
        const res = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify({
                name,
                phone,
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        // console.log('posted...')
        if (!res.ok) {
            error = await res.text();
            if (error === "User already exists!") {
                alert(
                    "Account already exists. Contact us on WhatsApp 8235463666 to verify."
                );
            }
            // console.error(error)
            goto("/");
        }
        ids = await res.json();
        privateID = ids.privateID;
        publicID = ids.publicID;
        otpID = ids.otpID;
        generateQR = true;
        profileImage.set("/avatar.svg");
        invalidateAll();
        alert("Please download the QR code. It is needed for authentication later on.")
    };
    // $: console.log($page.data)
</script>
<svelte:head>
    <title>Authentication</title>
    <link rel="canonical" href="https://satirigal.com/auth" />
    <meta name="description" content="Mathematics for all" />
</svelte:head>
<article>
    {#if $page.data.user || generateQR}
        <Card style="display:flex;align-items:center;justify-content:center;">
            <Content>
                <div class="authQR">
                    <GenerateQR
                        data={privateID + " " + otpID}
                        filename={publicID}
                        autoDownload={false}
                    />
                </div>
            </Content>
            <Actions>
                <form use:enhance method="POST" action="?/logout">
                    <!-- <button class="btn btn-outline-danger">Or click here to logout.</button> on:click={(e) => (e.preventDefault(), logout())}-->
                    <Button class="logout">Log out</Button>
                </form>
            </Actions>
        </Card>
    {:else}
        <Card>
            <Content>
                <div class="choices">
                    <Set chips={choices} let:chip choice bind:selected>
                        <Chip {chip}>
                          <Text>{chip}</Text>
                        </Chip>
                      </Set>
                </div>
                {#if selected === "Log in"}
                    <div class="details">
                        <Textfield
                            variant="filled"
                            bind:value={phone}
                            label="Phone"
                            placeholder="0123456789"
                        />

                        {#if phone}
                            <ScanQR on:scanned={readFromScan} />
                        {/if}
                    </div>
                {:else}
                    <div class="details">
                        <Textfield
                            variant="filled"
                            bind:value={name}
                            label="Name"
                            placeholder="Firstname Surname"
                        />
                        {#if name}
                            <Textfield
                                variant="filled"
                                bind:value={phone}
                                label="Phone"
                            />
                        {/if}
                    </div>
                {/if}
            </Content>
            <Actions>
                {#if selected === "Log in" && scanned}
                    <Button on:click={login}>
                        <Label>Login</Label>
                    </Button>
                {:else if selected === "Sign up" && phone}
                    <Button on:click={signup}>
                        <Label>Sign up</Label>
                    </Button>
                {/if}
            </Actions>
        </Card>
<!--         
        <br>
        {#if selected === "Log in"}
            <div class="details">
                <Textfield
                    variant="filled"
                    bind:value={phone}
                    label="Phone"
                    placeholder="0123456789"
                />

                {#if phone}
                    <ScanQR on:scanned={readFromScan} />
                {/if}

                {#if scanned}
                    <Button on:click={login}>
                        <Label>Login</Label>
                    </Button>
                {/if}
            </div>
        {:else}
            <div class="details">
                <Textfield
                    variant="filled"
                    bind:value={name}
                    label="Name"
                    placeholder="Firstname Surname"
                />
                {#if name}
                    <Textfield
                        variant="filled"
                        bind:value={phone}
                        label="Phone"
                    />
                {/if}
                {#if phone}
                    <Button on:click={signup}>
                        <Label>Sign up</Label>
                    </Button>
                {/if}
            </div>
        {/if} -->
    {/if}
</article>

<style>
    article {
        width: 100%;
        /* display:flex;
        align-items: center;
        justify-content: center;
        flex: 1; */
    }
    
    .authQR {
        display: flex;
        flex-direction: column;
    }
    .details {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
</style>

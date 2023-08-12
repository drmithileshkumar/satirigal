<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { loggedInUser, profileImage } from "$lib/stores";
    import ScanQR from "$lib/qr/ScanQR.svelte";
    import GenerateQR from "$lib/qr/GenerateQR.svelte";
    import Button from "$lib/ui/Button.svelte";
    import Label from "$lib/ui/Label.svelte";
    import Textfield from "$lib/ui/Textfield.svelte";
    import Numberfield from "$lib/ui/Numberfield.svelte";
    export let isLogin = false;
    let error;
    let phone, name;
    let generateQR = false;
    let ids, privateID, otpID, publicID, profile;
    let loginStatus = "Login",
        scanned = false;
    const readFromScan = (event) => {
        publicID = event.detail.filename;
        let data = event.detail.data.split(" ");
        privateID = data[0];
        otpID = data[1];
        scanned = true;
    };
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
        let user = await res.json();
        console.log("user...", user);
        if (user) {
            // $page.data.user = user;
            $page.data.user = user;
            console.log($page.data);

            await setProfileImage();
            $loggedInUser = user;
        }

        loginStatus = "Success";

        goto(`/${$page.url.searchParams.get("r") || ""}`);
    };
    const setProfileImage = async () => {
        const res = await fetch(`/api/profile`);

        if (!res.ok) {
            alert("Failed to load image");
            return;
        }

        let imageData = await res.blob();

        // console.log(imageData)
        profile = URL.createObjectURL(imageData);
        // let reader = new FileReader();
        // reader.readAsDataURL(imageData);
        // reader.onload = e => {
        // 	profile = e.target.result;
        //     profileImage.set(profile);
        // }
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
    };
</script>

{#if isLogin}
    <h3>Login</h3>
    <div class="phone">
        <Numberfield
            bind:value={phone}
            placeholder="0000000000"
            label="Phone"
        />
    </div>
    {#if phone}
        <ScanQR on:scanned={readFromScan} />
    {/if}
    {#if scanned}
        <Button on:click={login}>
            <Label>Login</Label>
        </Button>
    {/if}
{:else}
    <h3>Sign up</h3>
    <div class="name">
        <!-- <span class="material-icons">person</span>
        <p contenteditable="true" bind:textContent={name}></p> -->
        <Textfield
            bind:value={name}
            placeholder="Firstname Surname"
            label="Name"
        />
    </div>
    {#if name}
        <div class="phone">
            <!-- <span class="material-icons">phone</span>
            <p contenteditable="true" bind:textContent={phone}></p> -->
            <Numberfield
                bind:value={phone}
                placeholder="0000000000"
                label="Phone"
            />
        </div>
    {/if}
    {#if phone}
        <Button on:click={signup}>
            <Label>Sign up</Label>
        </Button>
    {/if}
    {#if generateQR}
        <GenerateQR
            data={privateID + " " + otpID}
            filename={publicID}
            on:saved={login}
        />
    {/if}
{/if}

<style>
    .phone,
    .name {
        /* display: flex;
        flex-direction: row;
        gap: 0.2em;
        padding: 0.5em 0em;
        justify-content: flex-start;
        align-items: center; */
        width: 100%;
    }
    /* .phone p {
        min-width: 175px;
        border: 1px solid rgb(187, 187, 187);
        padding: 0.3em 0.5em;
    } */
</style>

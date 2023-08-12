<script lang="ts">
    // @ts-nocheck
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";
    import Autocomplete from "@smui-extra/autocomplete";
    import { Text } from "@smui/list";
    import Button, { Label } from "@smui/button";
    import Dialog, { Content, Actions } from "@smui/dialog";
    import Radio from "@smui/radio";
    import FormField from "@smui/form-field";
    import { page } from "$app/stores";
    import { profileImage, bannerImage, showLeft } from "$lib/stores";
    // import heic2any from "heic2any";
    import {browser} from '$app/environment';
    import { onMount } from "svelte";
    import { currentPath } from "$lib/stores.js";
    $currentPath = 'Profile';
    // let heic2any;
    export let data;
    // type Rank = {
    //     id: number;
    //     label: string;
    // };
    let type = "";
    let details = {
        established: "",
    };
    let detailsPersonal = {
        gender: "",
        dob: "",
        rank: {
            id: 0,
            label: "",
        },
        experience: 0,
    };
    let common = {
        bio: "",
        email: "",
        zip: "",
        city: "",
        country: "",
        website: "",
        followers: 0,
        following: 0,
        replies: 0,
        shares: 0,
    };
    let name = "",
        phone = "";
    let newLabel = "";
    let value = undefined;
    let text = "";
    onMount(async () => {
        // heic2any = await import('heic2any')
        type = data.userDetail.type;
        details = data.userDetail.details;
        common = data.userDetail.common;
        name = data.user.name;
        phone = data.user.phone;
        if (type === "Personal") {
            value = data.userDetail.details.rank;
            text = data.userDetail.details.rank.label;
            detailsPersonal = data.userDetail.details;
        }
        if (!$bannerImage) bannerImage.set("/avatar.svg");
    });
    // $: if(browser) heic2any = await import('heic2any')
    let accountTypes = ["Personal", "Other"];
    let genders = ["Male", "Female", "Other"];

    let dialogOpen = false;
    let ranks = [
        {
            id: 0,
            label: "Student",
        },
        {
            id: 1,
            label: "Teacher"
        },
        {
            id: 2,
            label: "Professional"
        },
    ];

    function addObject() {
        const newObject = {
            id: options[options.length - 1].id + 1,
            label: newLabel,
        };
        ranks = [...ranks, newObject];
        value = newObject;
        detailsPersonal.rank = newObject;
        dialogOpen = false;
    }
    let imageNode, bannerNode, banners;
    let profileInput, bannerInput;
    let files;
    let avatar, banner;
    const changeProfile = async () => {
        if (!$page.data.user) {
            return;
        }

        profileInput.click();
    };
    const changeBanner = async () => {
        if (!$page.data.user) {
            return;
        }

        bannerInput.click();
    };
    // async function convertHeicToJpeg(heicFile) {
    //     try {
    //         const jpegBlob = await heic2any({
    //             blob: heicFile,
    //             toType: "image/jpeg",
    //             quality: 0.8,
    //         });

    //         return jpegBlob;
    //     } catch (error) {
    //         console.error("Error converting HEIC to JPEG:", error);
    //         return null;
    //     }
    // }
    // const convertHEIC2JPEG = async (image) => {
    //     const jpegBlob = await convertHeicToJpeg(image);

    //     if (jpegBlob) {
    //         const jpegUrl = URL.createObjectURL(jpegBlob);
    //         return jpegUrl;
    //     }
    // };
    async function getBase64(image) {
        // if(browser && (image.type === 'image/heic' || image.type === 'image/heif')) {
        //     image = await convertHEIC2JPEG(image);
        // }
        const img = new Image();
        img.src = URL.createObjectURL(image);
        img.onload = () => {
            // Create a canvas element and get its context
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Set the desired maximum dimensions for the resized image
            const maxWidth = 200;
            const maxHeight = 200;

            // Calculate the new dimensions while maintaining the aspect ratio
            const aspectRatio = img.width / img.height;
            let newWidth, newHeight;

            if (img.width > img.height) {
                newWidth = Math.min(img.width, maxWidth);
                newHeight = Math.round(newWidth / aspectRatio);
            } else {
                newHeight = Math.min(img.height, maxHeight);
                newWidth = Math.round(newHeight * aspectRatio);
            }

            // Resize the image using the canvas
            canvas.width = newWidth;
            canvas.height = newHeight;
            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            // Convert the resized image to a data URL
            const resizedImageDataURL = canvas.toDataURL("image/jpeg", 0.9);

            // Call the uploadFunction with the resized image data URL and other parameters
            let url = `/api/${$page.data.user.publicID}/profilepic`;
            banner = resizedImageDataURL;
            if (resizedImageDataURL) {
                profileImage.set(resizedImageDataURL);
                // console.log('Profile image saved locally', $profileImage)
            }
            // console.log("banner...", resizedImageDataURL);
            uploadFunction(resizedImageDataURL, image.name, url);
        };
    }

    async function getBaseBanner64(image) {
        // if(browser && (image.type === 'image/heic' || image.type === 'image/heif')) {
        //     image = await convertHEIC2JPEG(image);
        // }
        // Create a new Image object and read the image file
        const img = new Image();
        img.src = URL.createObjectURL(image);
        img.onload = () => {
            // Create a canvas element and get its context
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Set the desired maximum dimensions for the resized image
            const maxWidth = 800;
            const maxHeight = 300;

            // Calculate the new dimensions while maintaining the aspect ratio
            const aspectRatio = img.width / img.height;
            let newWidth, newHeight;

            if (img.width > img.height) {
                newWidth = Math.min(img.width, maxWidth);
                newHeight = Math.round(newWidth / aspectRatio);
            } else {
                newHeight = Math.min(img.height, maxHeight);
                newWidth = Math.round(newHeight * aspectRatio);
            }

            // Resize the image using the canvas
            canvas.width = newWidth;
            canvas.height = newHeight;
            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            // Convert the resized image to a data URL
            const resizedImageDataURL = canvas.toDataURL("image/jpeg", 0.9);

            // Call the uploadFunction with the resized image data URL and other parameters
            let url = `/api/${$page.data.user.publicID}/bannerpic`;
            banner = resizedImageDataURL;
            if (resizedImageDataURL) {
                bannerImage.set(resizedImageDataURL);
            }
            // console.log("banner...", resizedImageDataURL);
            uploadFunction(resizedImageDataURL, image.name, url);
        };
    }

    async function uploadFunction(imgBase64, name, url) {
        const idata = {};
        const imgData = imgBase64.split(",");
        idata["name"] = name;
        idata["image"] = imgData[1];
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify({ data: idata }),
        });
        if (!res.ok) {
            alert("Upload failed.");
            return;
        }
        alert("Image uploaded");
    }
    const save = async () => {
        // console.log(type, detailsPersonal, common)
        const res = await fetch("/api/userDetail", {
            method: "POST",
            body: JSON.stringify({
                publicID: $page.data.user.publicID,
                type,
                details: type === "Personal" ? detailsPersonal : details,
                common,
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        if (!res.ok) {
            alert("Failed to update");
            return;
        }
        alert("Updated...may need to log in again to see changes.");
    };
    // $:console.log($bannerImage)
    // console.log($page.data.userDetail.details, $page.data.userDetail.common)
    // $:console.log(details, common, data.userDetail.details, data.userDetail.common)
    let title = "User Profile | Mathril - Personalize Your Math Learning Experience";
    let description = "Access your Mathril user profile to customize your math learning journey, track your progress, and review your performance across various topics and difficulty levels.";
    let keywords = "Mathril, user profile, math learning, progress tracking, performance review, personalized experience";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://satirigal.com/settings/profile" />
    <meta name="description" content="{description}">
    <meta name="keywords" content="{keywords}">
</svelte:head>
<article>
    <div class="display">
        <div class="photos">
            <div class="banner" on:click={changeBanner}>
                <input
                    class="hidden"
                    id="file-to-upload"
                    type="file"
                    accept="image/*"
                    bind:files={banners}
                    bind:this={bannerInput}
                    on:change={() => getBaseBanner64(banners[0])}
                />
                <img
                    bind:this={bannerNode}
                    src={$bannerImage}
                    alt="Image"
                    width="100%"
                    height="100%"
                />
            </div>
            <div class="profile" on:click={changeProfile}>
                <input
                    class="hidden"
                    id="file-to-upload"
                    type="file"
                    accept="image/*"
                    bind:files
                    bind:this={profileInput}
                    on:change={() => getBase64(files[0])}
                />
                <img
                    bind:this={imageNode}
                    src={$profileImage}
                    alt="Image"
                    width="100"
                    height="100"
                />
            </div>
        </div>
    </div>
    <div class="details">
        <div class="accountType">
            <span class="label">Account Type</span>
            {#each accountTypes as accountType}
                <FormField>
                    <Radio bind:group={type} value={accountType} />
                    <span slot="label">
                        {accountType}
                    </span>
                </FormField>
            {/each}
        </div>
        {#if type === "Personal"}
            <div class="gender">
                <span class="label">Gender</span>
                {#each genders as gender}
                    <FormField>
                        <Radio
                            bind:group={detailsPersonal.gender}
                            value={gender}
                        />
                        <span slot="label">
                            {gender}
                        </span>
                    </FormField>
                {/each}
            </div>
        {:else if details.established}
            <Textfield
                type="date"
                variant="filled"
                bind:value={details.established}
                label="Established"
            />
        {/if}
        <Textfield variant="filled" disabled bind:value={name} label="Name" />
        <Textfield disabled variant="filled" bind:value={phone} label="Phone" />
        <Textfield
            type="email"
            variant="filled"
            bind:value={common.email}
            label="Email"
        />
        <Textfield variant="filled" bind:value={common.bio} label="Bio" />
        {#if type === "Personal"}
            <Autocomplete
                options={ranks}
                getOptionLabel={(option) => (option ? `${option.label}` : "")}
                bind:value={detailsPersonal.rank}
                bind:text
                noMatchesActionDisabled={false}
                on:SMUIAutocomplete:noMatchesAction={() => {
                    newLabel = text;
                    dialogOpen = true;
                }}
                label="Rank"
                style="width: 100%;"
                textfield$style="width: 100%;"
                textfield$variant="filled"
            >
                <div slot="no-matches">
                    <Text>Add rank</Text>
                </div>
            </Autocomplete>
            <Dialog
                bind:open={dialogOpen}
                aria-labelledby="autocomplete-dialog-title"
                aria-describedby="autocomplete-dialog-content"
            >
                <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
                <Title id="autocomplete-dialog-title">New Rank</Title>
                <Content id="autocomplete-dialog-content">
                    <Textfield bind:value={newLabel} label="Rank" />
                </Content>
                <Actions>
                    <Button>
                        <Label>Cancel</Label>
                    </Button>
                    <Button on:click={addObject}>
                        <Label>Add</Label>
                    </Button>
                </Actions>
            </Dialog>
            <Textfield
                variant="filled"
                bind:value={detailsPersonal.experience}
                label="Experience"
                suffix="years"
                input$pattern="\d+"
            />
            <!---------------------------------------------->
            <Textfield
                type="date"
                variant="filled"
                bind:value={detailsPersonal.dob}
                label="Date of Birth"
            />
        {/if}

        <!---------------------------------------------->
        <Textfield variant="filled" bind:value={common.zip} label="Zip Code" />
        <Textfield variant="filled" bind:value={common.city} label="City" />
        <Textfield
            variant="filled"
            bind:value={common.country}
            label="Country"
        />
        <Textfield
            variant="filled"
            bind:value={common.website}
            label="Website"
        />
        <Section align="end" toolbar>
            <Button on:click={save}>save</Button>
            <IconButton class="material-icons" aria-label="Cancel">close</IconButton
            >
        </Section>
    </div>
</article>

<style>
    article {
        width: 100%;
    }
    /* header {
        margin-bottom: 1.5em;
    } */
    .display {
        margin-bottom: 60px;
    }
    .photos {
        position: relative;
    }
    .banner {
        width: 100%;
        height: 170px;
        background-color: rgba(0, 247, 255, 0.919);
        cursor: pointer;
    }
    .banner:hover {
        background-color: rgba(0, 247, 255, 0.519);
    }
    .profile {
        position: absolute;
        bottom: -50px;
        left: 10px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border-width: 2px;
        background: #888;
        cursor: pointer;
        overflow: hidden;
    }
    .details {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        padding: 0 1em;
    }
    .profile:hover {
        background-color: rgb(100, 100, 100);
    }
    .profile img {
        width: 100%;
        height: 100%;
        /* object-fit: cover; */
    }
    .hidden {
        display: none;
    }
</style>

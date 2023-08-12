<script lang="ts">
    //@ts-nocheck
    // import heic2any from "heic2any";
    import { browser } from "$app/environment";
    import { createEventDispatcher } from "svelte";
    export let media;
    export let url;
    export let isClicked = false;
    let dispatch = createEventDispatcher();
    let images, mediaInput;

    const getImage = () => {
        mediaInput.click();
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
        if (image.type === "image/svg+xml") {
            // Read SVG file as text
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => {
                // Call the uploadFunction with the SVG content and other parameters
                uploadFunction(reader.result, image.name, url);
            };
        } else {
            // Handle non-SVG images (existing logic)
            // if (
            //     browser &&
            //     (image.type === "image/heic" || image.type === "image/heif")
            // ) {
            //     image = await convertHEIC2JPEG(image);
            // }
            const img = new Image();
            img.src = URL.createObjectURL(image);
            img.onload = () => {
                // ... (existing logic)

                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                const maxWidth = 800;
                const maxHeight = 300;

                const aspectRatio = img.width / img.height;
                let newWidth, newHeight;

                if (img.width > img.height) {
                    newWidth = Math.min(img.width, maxWidth);
                    newHeight = Math.round(newWidth / aspectRatio);
                } else {
                    newHeight = Math.min(img.height, maxHeight);
                    newWidth = Math.round(newHeight * aspectRatio);
                }

                canvas.width = newWidth;
                canvas.height = newHeight;
                ctx.drawImage(img, 0, 0, newWidth, newHeight);

                const resizedImageDataURL = canvas.toDataURL("image/jpeg", 0.9);
                media = resizedImageDataURL;
                uploadFunction(resizedImageDataURL, image.name, url);
            };
        }
    }

    async function uploadFunction(imgBase64, name, url) {
        const data = {};

        // Check if the image is SVG or not, and handle accordingly
        const isSvg = imgBase64.startsWith('data:image/svg+xml');
        if (isSvg) {
            data["name"] = name;
            data["image"] = imgBase64.split(",")[1];
        } else {
            const imgData = imgBase64.split(",");
            data["name"] = name;
            data["image"] = imgData[1];
        }

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            alert("Upload failed.");
            return;
        }
        let mediaPath = await res.text();
        dispatch("onUpload", { mediaPath, imgBase64 });
        alert("Image uploaded");
    }

    $: if (isClicked) getImage();
</script>

<input
    class="hidden"
    id="file-to-upload"
    type="file"
    accept="image/*"
    bind:files={images}
    bind:this={mediaInput}
    on:change={() => getBase64(images[0])}
/>

<style>
    .hidden {
        display: none;
    }
</style>

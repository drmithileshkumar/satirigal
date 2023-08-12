<script>
// @ts-nocheck
    import {createEventDispatcher} from 'svelte';
    let dispatch = createEventDispatcher();
    let fileInput;
    let files;
    let avatar;
    export let folder = 'static';
    export let encoding = "base64";

    function getImageData(image) {
        // console.log(image)
        const reader = new FileReader();
        if(encoding === "base64") {
            reader.readAsDataURL(image);
        }
        if(encoding === "UTF-8") {
            reader.readAsText(image);
        }
        reader.onload = e => {
            avatar = e.target.result;
            uploadFunction(e.target.result, image.name);
        };
    };

    async function uploadFunction(imageData, name) {
        const data = {};
        let imgData;
        if(encoding === 'base64') {
            imgData = imageData.split(',');
            data["image"] = imgData[1];
        }
        if(encoding === 'UTF-8') {
            data["image"] = imageData;
        }
        data["name"] = name;
        data["encoding"] = encoding;
        data["folder"] = folder;
        const res = await fetch(`/api/upload`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(!res.ok) {
            alert("Upload failed.")
        }
        alert("Image uploaded");
        dispatch('uploaded', {name})
    }; 
</script>

<div class="container">
    {#if avatar}
        {#if encoding === 'base64'}
            <img id="avatar" src={avatar} alt="avatar"/>
        {/if}
        {#if encoding === 'UTF-8'}
            <div style="width: 300px;">
                {@html avatar}
            </div>
        {/if}
    {:else}
        <img id="avatar" src="/webdutcolored.png" alt="avatar"/>
    {/if}
    <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg,.svg" bind:files bind:this={fileInput} on:change={() => getImageData(files[0])}/>
    <button class="upload-btn" on:click={ () => fileInput.click() }>
        <span class="material-icons">upload</span>
    </button>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px dashed;
        width: 300px;
    }

    #avatar {
        height: 128px;
        width: 128px;
        margin-bottom: 10px;
    }

    .hidden {
        display: none;
    }

    .upload-btn {
        font-family: sans-serif;
        font-weight: bold;
        border: none;
    }

    .upload-btn:hover {
        background-color: white;
        color: black;
        outline: black solid 2px;
    }
</style>

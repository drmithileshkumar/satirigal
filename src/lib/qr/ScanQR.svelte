<script>
// @ts-nocheck
    import Button from '@smui/button';
    import { createEventDispatcher, onMount } from 'svelte';
    import {scannedQR, loggedInUser} from '$lib/stores';
    import {Html5Qrcode} from 'html5-qrcode';
    let filename;
    let qrlink;
    let qrContainer;
    let fileinput;
    let html5QrCode;
    let hasQRcode = false;
    
    let dispatch = createEventDispatcher();
    
    const scanQR = (event) => {
            html5QrCode = new Html5Qrcode('reader');
            if (event.target.files.length == 0) {
                // No file selected, ignore 
                return;
            }
            const image = event.target.files[0];
            $scannedQR = image;
            let imageName = image.name;
            filename = imageName.split('.')[0].trim();
            html5QrCode.scanFile(image, true)
                .then(decodedText => { dispatch('scanned', {filename, data: decodedText}) })
                .catch(err => { alert('Failed to scan Code') });
    };
</script>
<style>
    #reader {
        background: #888;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
</style>

<div bind:this={qrContainer} id='reader' width="200px" height="200px"></div>
<Button class="upload" on:click={() => fileinput.click()}>
    <span class='material-icons'>qr_code_2</span>
    <span class="label">Upload Secret QR code</span>
</Button>
<input style="display: none;" type="file" accept="image/*"
    id="input-file"
    name="input-file"
    on:change={scanQR}
    bind:this={fileinput}
>


<script>
    // @ts-nocheck
    
        
        import {browser} from '$app/environment'
        import { createEventDispatcher, onMount } from 'svelte';
        import {scannedQR, loggedInUser} from '$lib/stores';
        import {Html5Qrcode} from 'html5-qrcode';
        import qrcode from 'qrcode-generator';
        
        export let data;
        export let filename;
        export let autoDownload = true;
        let dispatch = createEventDispatcher();
        let qrCodeHolder;
        let qrContainer;
        let fileinput;
        let html5QrCode;
        let hasQRcode = false;
        let downloader;
        let qrlink;
        // $: if(hasQRcode) {
        //     setTimeout(() => {
        //         qrlink = document.querySelector('#generatedQRCode img').getAttribute('src');
        //     }, 0);
            
        // }
        $: if(browser && data) generateQR();
        const generateQR = () => {
            let qr = qrcode(10, 'H');
            qr.addData(data);
            qr.make();
    
            qrlink = qr.createDataURL();
            // qrlink = document.querySelector('#generatedQRCode img').getAttribute('src');
            hasQRcode = true;
            if(autoDownload)
                setTimeout(() => downloader.click(), 1000)
        }
    </script>
    <style>
        #generatedQRCode img {
            width: 200px;
            height: 200px;
        }
    </style>
    
    <span id='generatedQRCode'><img src={qrlink} alt=""></span>
    {#if hasQRcode}
        <a bind:this={downloader} href={qrlink} download={filename} on:click={() => dispatch("saved", {text:"saved"})} >
            <span class="label">Download QR Code</span>
        </a>
        <p><strong>SECRET: </strong>Save the QR code. DO NOT SHARE or RENAME the file.</p>
    {/if}
    
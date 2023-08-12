<script>
    import {ripple} from '$lib/ui/ripple'
    export let shareData;
    const share = async () => {
        try {
            await navigator.share(shareData);
            // alert(shareData.text)
        } catch (err) {
            // alert('Failed to share.')
        }
    }
</script>
<button on:click={share} use:ripple><span class="material-icons">share</span></button>
<style>
    button {
        background-color: transparent !important;
        color: white;
        outline: none;
        border: none;
    }
</style>
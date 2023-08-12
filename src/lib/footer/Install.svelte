<script lang='ts'>
    import Button from "@smui/button";
    import { goto } from "$app/navigation";
</script>
<div class="flex" style="margin: 1em;">
    <span>Install App </span>
    <span style="display:flex;">
        <Button style="display:flex;flex-direction:column; gap:0;" on:click={() => goto('/android')}>
            <span class="material-symbols-outlined">android</span>
            <span style="line-height: 0.5em;">Android</span>
        </Button> 
        <Button style="display:flex;flex-direction:column; gap:0px;" on:click={() => goto('/iOS')}>
            <span><img width="16px" height="16px" src="/icons/Apple_logo.svg"></span>
            <span style="line-height: 0;">ios</span>
        </Button>
    </span>
    
</div>
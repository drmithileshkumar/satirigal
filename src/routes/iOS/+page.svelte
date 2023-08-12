<script lang="ts">
    //@ts-nocheck
    let keywords = "Satires, fun, joke";
    let title = "Install iOS | Satirigal";
    let description = "Your regular dose of satires";
</script>
<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://satirigal.com/iOS" />
    <meta name="description" content={description} />
    <meta name="keywords" content="{keywords}">
</svelte:head>
<article>
    <h1 class="mdc-typography--headline4">Install Satirigal to iOS</h1>
    <figure style="display:flex;flex-wrap: wrap;gap:0.5em;">
        <div class="image">
            <h4 class="caption">Step 1: Click on the share button.</h4>
            <img width="300px" src="/iOS/share.jpg" alt="Step 1: Click on the share button.">
        </div>
        <div class="image">
            <h4 class="caption">Step 2: Click on Add to Home Screen.</h4>
            <img width="300px" src="/iOS/add.jpg" alt="Step 2: Click on Add to Home Screen.">
        </div>
        <div class="image">
            <h4 class="caption">Step 3: Click on Add in the pop up.</h4>
            <img width="300px" src="/iOS/add2.jpg" alt="Step 3: Click on Add in the pop up.">
        </div>
        <div class="image">
            <h4 class="caption">Step 4: Installed Satirigal app is installed.</h4>
            <img width="300px" src="/iOS/app.jpg" alt="Step 4: Installed Satirigal app is installed.">
        </div>
    </figure>
</article>
<style>
    .image {
        display: flex;
        flex-direction: column;
        max-width: 300px;
    }
    .caption {
        font-size: 1.2em;
        margin:0.5em;
        line-height: 1.2;
        font-weight: 300;
    }
</style>
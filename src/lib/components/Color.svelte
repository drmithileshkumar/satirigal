<script>
    // @ts-nocheck

    import Slider from "$lib/ui/Slider.svelte";
    import FormField from "$lib/ui/FormField.svelte";
    import Button from "$lib/ui/Button.svelte";
    import Label from "$lib/ui/Label.svelte";
    import { createEventDispatcher } from "svelte";
    export let background = "rgba(0, 0, 0, 1)";
    export let noConfirm = false;
    let parts = background
        .split("(")[1]
        .split(")")[0]
        .split(",")
        .map((item) => Number(item));
    let dispatch = createEventDispatcher();
    let red = parts[0];
    let green = parts[1];
    let blue = parts[2];
    let alpha = parts[3];
    $: {
        background = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        dispatch("colorChosen", { fill: background });
    }
    const done = () => {
        dispatch("colorChosen", { fill: background });
    };
    const cancel = () => {};
</script>

<div class="colorpicker">
    <div class="result" style="background: {background}" />
    <div class="color">
        <FormField align="end" style="display: flex;justify-content:end;">
            <Slider
                withInput
                bind:value={red}
                min={0}
                max={255}
                step={1}
                discrete
                input$aria-label="Red"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: max-content; display: block;"
            >
                Red
            </span>
        </FormField>
    </div>
    <div class="color">
        <FormField align="end" style="display: flex;justify-content:end;">
            <Slider
                withInput
                style="flex-grow: 1;"
                bind:value={green}
                min={0}
                max={255}
                step={1}
                discrete
                input$aria-label="Green"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: max-content; display: block;"
            >
                Green
            </span>
        </FormField>
    </div>
    <div class="color">
        <FormField align="end" style="display: flex;justify-content:end;">
            <Slider
                withInput
                style="flex-grow: 1;"
                bind:value={blue}
                min={0}
                max={255}
                step={1}
                discrete
                input$aria-label="Blue"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: max-content; display: block;"
            >
                Blue
            </span>
        </FormField>
    </div>
    <div class="alpha">
        <FormField align="end" style="display: flex;justify-content:end;">
            <Slider
                withInput
                style="flex-grow: 1;"
                bind:value={alpha}
                min={0}
                max={1}
                step={0.001}
                input$aria-label="Alpha"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: max-content; display: block;"
            >
                Alpha
            </span>
        </FormField>
    </div>
    {#if !noConfirm}
        <div class="confirm">
            <Button on:click={done}><Label>Use Color</Label></Button>
            <Button on:click={cancel}><Label>Cancel</Label></Button>
        </div>
    {/if}
</div>

<style>
    .colorpicker {
        display: flex;
        flex-direction: column;
        gap: 1em;
        justify-content: center;
        align-items: center;
    }
    .result,
    .color,
    .alpha {
        width: 100%;
        display: flex;
        justify-content: end;
    }
    .result {
        height: 2em;
    }
    .confirm {
        display: flex;
        flex-direction: row;
        gap: 1em;
        justify-content: flex-end;
        margin-bottom: 1em;
        margin-top: 0.6em;
        width: 100%;
    }
</style>

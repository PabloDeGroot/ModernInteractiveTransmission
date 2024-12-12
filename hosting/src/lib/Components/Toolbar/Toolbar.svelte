<script lang="ts">
    import Click from "./Items/Click.svelte";
    import Draw from "./Items/Draw.svelte";
    import Image from "./Items/Image.svelte";
    interface ToolbarProps {
        selectedTool: string;
        toolOptions: any;
    }
    let { selectedTool = $bindable("click"), toolOptions = $bindable() }: ToolbarProps = $props();

    let clickActive = $state(true);
    let drawActive = $state(false);
    let imageActive = $state(false);
    let imageURL = $state("");
    let drawPencil = $state(true);
    $effect(() => {
        if (clickActive) {
            drawActive = false;
            imageActive = false;
            drawPencil = true;
            imageURL = "";
            selectedTool = "click";
        }
    });
    $effect(() => {
        if (drawActive) {
            clickActive = false;
            imageActive = false;
            imageURL = "";
            selectedTool = "draw";
        }
    });
    $effect(() => {
        if (imageActive) {
            clickActive = false;
            drawActive = false;
            imageURL = "";
            selectedTool = "image";
        }
    });

    $effect(() => {
        if (drawActive) {
            selectedTool = drawPencil ? "draw" : "rubber";
        }
    });
    $effect(() => {
        if (imageURL !== "") {
            toolOptions = { url: imageURL };
        }
    });
    
</script>

<div
    class="flex flex-col mr-2 p-1 bg-surface-50 bg-opacity-30 border rounded backdrop-blur-3xl"
>
    <Click bind:active={clickActive} />
    <Draw bind:active={drawActive} bind:isPencil={drawPencil} />
    <Image bind:active={imageActive} bind:url={imageURL} />
</div>

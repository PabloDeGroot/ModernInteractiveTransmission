<script lang="ts">
    import Click from "./Items/Click.svelte";
    import Draw from "./Items/Draw.svelte";
    interface ToolbarProps {
        selectedTool: string;
    }
    let { selectedTool = $bindable("click") }: ToolbarProps = $props();

    let clickActive = $state(true);
    let drawActive = $state(false);
    let drawPencil = $state(true);
    $effect(() => {
        if (clickActive) {
            drawActive = false;
            drawPencil = true;
            selectedTool = "click";
        }
    });
    $effect(() => {
        if (drawActive) {
            clickActive = false;
            selectedTool = "draw";
        }
    });
    $effect(() => {
        if (drawActive) {
            selectedTool = drawPencil ? "draw" : "rubber";
        }
    });
</script>

<div
    class="flex flex-col mr-2 p-1 bg-surface-50 bg-opacity-30 border rounded backdrop-blur-3xl"
>
    <Click bind:active={clickActive} />
    <Draw bind:active={drawActive} bind:isPencil={drawPencil} />
</div>

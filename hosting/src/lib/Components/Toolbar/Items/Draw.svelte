<script lang="ts">
    import JamRubber from "~icons/jam/rubber";
    import BxsPencil from "~icons/bxs/pencil";

    interface ClickProps {
        active: boolean;
        isPencil: boolean;
    }
    let { active = $bindable(false), isPencil = $bindable(true) }: ClickProps =
        $props();
    let activeClass = $state("border-2 border-slate-900 !bg-opacity-0");
    $effect(() => {
        if (active) {
            activeClass =
                "btn rounded mt-2 p-1 bg-primary-500 border border-slate-900";
        } else {
            activeClass =
                "btn rounded mt-2 p-1 bg-slate-900 border border-slate-900 bg-opacity-40 hover:bg-slate-700 hover:cursor-pointer";
        }
    });
    $effect(() => {
        if (!active) {
            isPencil = true;
        }
    });
    let click = () => {
        console.log("click",active);
        if (active) {
            isPencil = !isPencil;
        }
        if (!active) {
            active = true;
        }
    };
</script>

<button type="button" class={activeClass} onclick={click}>
    {#if isPencil}
        <BxsPencil />
    {:else}
        <JamRubber />
    {/if}
</button>

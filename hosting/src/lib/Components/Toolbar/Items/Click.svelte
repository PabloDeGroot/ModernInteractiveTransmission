<script lang="ts">
    import Cursor from "~icons/vaadin/cursor";
    interface ClickProps {
        active: boolean;
    }
    let { active = $bindable() }: ClickProps = $props();
    let activeClass = $state("border-2 border-slate-900 !bg-opacity-0");
    $effect(() => {
        if (active) {
            activeClass =
                "btn rounded p-1 bg-primary-500 border border-slate-900 ";
        } else {
            activeClass =
                "btn rounded p-1 bg-slate-900 border border-slate-900 bg-opacity-40 hover:bg-slate-700 hover:cursor-pointer";
        }
    });
</script>

<button
    type="button"
    class={activeClass}
    onclick={() => {
        if (!active) {
            active = true;
        }
    }}
>
    <Cursor />
</button>

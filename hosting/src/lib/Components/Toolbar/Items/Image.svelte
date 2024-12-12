<script lang="ts">
    import RiImageAddFill from "~icons/ri/image-add-fill";

    interface ClickProps {
        active: boolean;
        url: string;
    }
    let { active = $bindable(), url = $bindable() }: ClickProps = $props();
    let activeClass = $state("border-2 border-slate-900 !bg-opacity-0");

    $effect(() => {
        if (active) {
            activeClass =
                "btn rounded mt-2 p-1 bg-primary-500 border border-slate-900 ";
        } else {
            activeClass =
                "btn rounded mt-2 p-1 bg-slate-900 border border-slate-900 bg-opacity-40 hover:bg-slate-700 hover:cursor-pointer";
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
    <RiImageAddFill />
</button>

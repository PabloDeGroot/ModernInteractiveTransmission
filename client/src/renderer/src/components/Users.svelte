<script lang="ts">
  import Object from './Objects/Object.svelte'
  import User from './User.svelte'

  interface TestProps {
    keys: string[]
    components: { [key: string]: User | null }
    draw: (
      lastPos: { x: number; y: number },
      x: number,
      y: number,
      color: string,
      button: string
    ) => void
    getObject: (x: number, y: number) => Object | null
    createObject: (x: number, y: number, type: 'image' | 'text', src?: string) => void
  }

  let { keys, components = $bindable(), draw, getObject, createObject }: TestProps = $props()
</script>
<div style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; z-index: -1">

{#each keys as key}
  <User bind:this={components[key]} {draw} {getObject} {createObject} />
{/each}
</div>

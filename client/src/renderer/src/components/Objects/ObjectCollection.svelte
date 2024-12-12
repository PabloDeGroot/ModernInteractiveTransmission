<script lang="ts">
  import Object from './Object.svelte'
  let objects = $state<Object[]>([])
  let objecsProps = $state<{ x: number; y: number; type: 'image' | 'text'; src?: string }[]>([])

  export function CreateObject(
    type: 'image' | 'text',
    x: number,
    y: number,
    src?: string | undefined
  ) {
    objecsProps.push({ x, y, type, src })
  }
  export function GetAtPosition(x: number, y: number): Object | undefined {
    if (objects.length == 0) {
      console.log('No objects')
    }
    let obj = objects.find((obj) => obj.IsOver(x, y))
    return obj
  }
  $effect(() => {
    if (objects.length > 0) {
      console.log('Objects', objects)
    }
  })
</script>

<div
style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; z-index: -1"
>
  {#each objecsProps as obj, i}
    <Object bind:this={objects[i]} {...obj} />
  {/each}
</div>

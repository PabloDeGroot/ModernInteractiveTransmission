<script lang="ts">
  import { onMount } from 'svelte'

  interface ObjectProps {
    x: number
    y: number
    type: 'image' | 'text'
    src?: string
  }

  let { x, y, type, src }: ObjectProps = $props()
  let height = 0
  let width = 0
  onMount(() => {
    height = div.clientHeight
    width = div.clientWidth
  })
  export function SetPosition(posx: number, posy: number) {
    x = posx
    y = posy
  }
  export function IsOver(posx: number, posy: number) {
    if (posx > x && posx < x + div.clientWidth && posy > y && posy < y + div.clientHeight) {
      return true
    }
    return false
  }
  export function SetHover(color: string | undefined) {
    if(colorStyle != "" && color != null) {
      return;
    }
    if (color != null) {
      colorStyle = 'border: 2px solid ' + color
    } else {
      colorStyle = ''
    }
  }
  let colorStyle = $state('')
  export { x, y }
  let div = $state<HTMLDivElement | null>(null)
</script>

<div bind:this={div} style="line-height: 0;position:absolute; left: {x}px; top: {y}px;{colorStyle}">
  {#if type === 'image'}
    <img alt="object" {src} />
  {:else if type === 'text'}
    <p>Text</p>
  {/if}
</div>

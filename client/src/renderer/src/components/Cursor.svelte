<script lang="ts">
  import Pointer from '~icons/vaadin/cursor'
  import JamRubber from '~icons/jam/rubber'
  import BxsPencil from '~icons/bxs/pencil'
  import RiImageAddFill from '~icons/ri/image-add-fill'

  interface CursorProps {
    x: number
    y: number
    color?: string
    user?: string
    tool?: string
  }
  let { x, y, tool = 'click', user = '', color = '#00ff00' }: CursorProps = $props()

  let icon = tool == 'draw' ? 'draw' : 'cursor'

  //transform: translate(-4px, 0px); color: {color}
  let styles = $state('')
  $effect(() => {
    styles = `color: ${color};transform:  translate(0px, -100%)`
    if (tool == 'click') {
      styles = `color: ${color};transform:  translate(-4px, 0px)`
    }
  })
</script>

<div
  class={icon}
  style="left: {x}px; top: {y}px; display:flex;  width:max-content; height:max-content;"
>
  {#if tool == 'draw'}
    <BxsPencil class="absolute origin-bottom-left" style={styles} />
  {:else if tool == 'rubber'}
    <JamRubber class="" style={styles} />
  {:else if tool == 'image'}
    <RiImageAddFill class="absolute origin-bottom-left" style={styles} />
  {:else}
    <Pointer class="absolute bottom-1 origin-top-left" style={styles} />
  {/if}

  <!--<svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="48"
    height="48"
    transform="translate(-18, -12)"
    viewBox="0 0 48 48"
  >
    <path
      fill={color}
      d="M27.8,39.7c-0.1,0-0.2,0-0.4-0.1c-0.2-0.1-0.4-0.3-0.6-0.5l-3.7-8.6l-4.5,4.2C18.5,34.9,18.3,35,18,35c-0.1,0-0.3,0-0.4-0.1C17.3,34.8,17,34.4,17,34l0-22c0-0.4,0.2-0.8,0.6-0.9C17.7,11,17.9,11,18,11c0.2,0,0.5,0.1,0.7,0.3l16,15c0.3,0.3,0.4,0.7,0.3,1.1c-0.1,0.4-0.5,0.6-0.9,0.7l-6.3,0.6l3.9,8.5c0.1,0.2,0.1,0.5,0,0.8c-0.1,0.2-0.3,0.5-0.5,0.6l-2.9,1.3C28.1,39.7,27.9,39.7,27.8,39.7z"
    ></path><path
      fill="#212121"
      d="M18,12l16,15l-7.7,0.7l4.5,9.8l-2.9,1.3l-4.3-9.9L18,34L18,12 M18,10c-0.3,0-0.5,0.1-0.8,0.2c-0.7,0.3-1.2,1-1.2,1.8l0,22c0,0.8,0.5,1.5,1.2,1.8C17.5,36,17.8,36,18,36c0.5,0,1-0.2,1.4-0.5l3.4-3.2l3.1,7.3c0.2,0.5,0.6,0.9,1.1,1.1c0.2,0.1,0.5,0.1,0.7,0.1c0.3,0,0.5-0.1,0.8-0.2l2.9-1.3c0.5-0.2,0.9-0.6,1.1-1.1c0.2-0.5,0.2-1.1,0-1.5l-3.3-7.2l4.9-0.4c0.8-0.1,1.5-0.6,1.7-1.3c0.3-0.7,0.1-1.6-0.5-2.1l-16-15C19,10.2,18.5,10,18,10L18,10z"
    ></path>
  </svg>
  -->
  {#if user}
    <p
      style="background-color: {color}; color: white; padding-inline: 0.5rem; border-radius: 0.5rem; border: 1px solid black; margin-left:-20px transform: translate(-50%, -50%);"
    >
      {user}
    </p>
  {/if}
</div>

<style>
  .cursor {
    position: absolute;
  }
</style>

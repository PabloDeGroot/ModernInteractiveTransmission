<script lang="ts">
  import Object from './Objects/Object.svelte'
  import User from './User.svelte'

  interface UsersProps {
    /*connection: MyPeerConnection
    localStream: MediaStream*/
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

  let { draw, getObject, createObject }: UsersProps = $props()
  let components = $state<Record<string, User | null>>()
  let keys = $state<string[]>([])

  $effect(() => {
    let api = (window as any).api
    api.onConnection((id: string) => {
      components[id] = null
      keys.push(id)
      api.onData(id, (data: any) => {
        if (components[id] == null) return
        components[id].recieveData(data)
      })
    })
    api.onClose((id: string) => {
      components[id] = null
      keys = keys.filter((key) => key !== id)
    })
  })
  // Get Monitor Stream
  // Call every user in the room
  // Create User component and pass the connection
</script>

<div style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; z-index: -1">
  {#each keys as key}
    {#if components[key] == null}
      <User bind:this={components[key]} {draw} {createObject} {getObject} />
    {/if}
  {/each}
</div>

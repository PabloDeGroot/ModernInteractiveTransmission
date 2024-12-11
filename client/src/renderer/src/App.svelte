<script lang="ts">
  //import GetRoom, { type Room, type UserRoom } from '../firebase/Room'
  import { FirestoreCallChannel } from '../WebRTC/FirestoreCallChannel'
  import MyPeer, { MyPeerConnection } from '../WebRTC/MyPeer'
  import Canvas from './components/Canvas.svelte'
  import Presence from './components/Presence.svelte'
  import User from './components/User.svelte'

  let roomName = $state<string | null>(null)
  let userId = $state<string | null>(null)
  let callChannel = $derived(roomName != null ? new FirestoreCallChannel(roomName) : null)
  let peer = $derived(
    callChannel != null && userId != null ? new MyPeer(callChannel, userId) : null
  )
  let conns = $state<MyPeerConnection[]>([])
  let media = $state<MediaStream | null>(null)
  window.addEventListener('beforeunload', () => {
    conns.forEach((conn) => {
      conn.close()
    })
  })
  navigator.mediaDevices
    .getDisplayMedia({ video: true, audio: false })
    .then((stream) => {
      media = stream
    })
    .catch((err) => {
      console.error('Error: ' + err)
    })

  $effect(() => {
    if (!peer) return
    console.log('Peer', peer)
    peer.onConnection = async (conn) => {
      conns.push(conn)
      console.log('Connection', conn)
      conn.onclose = () => {
        conns = conns.filter((c) => c !== conn)
      }
    }
    peer.call()
  })

  let api = (window as any).api
  api.getRoom().then((data: any) => {
    roomName = data
    console.log('Room', roomName)
  })
  api.getUserId().then((data: any) => {
    userId = data
  })
  let canvas = $state<Canvas | null>(null)
  let draw = (
    lastPos: { x: number; y: number },
    x: number,
    y: number,
    color: string,
    button: string
  ) => {
    if (canvas == null) return
    canvas.Draw(lastPos, x, y, color, 10, button)
  }
  // Get Monitor Stream
  // Call every user in the room
  // Create User component and pass the connection
</script>

{#if userId != null && roomName != null}
  <Presence uid={userId} roomID={roomName} />
{/if}
{#if conns.length > 0 && media != null}
  {#each conns as conn}
    <User connection={conn} localStream={media} {draw} />
  {/each}
{/if}
{#if media != null}
  <Canvas bind:this={canvas} />
{/if}

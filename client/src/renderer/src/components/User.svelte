<script lang="ts">
  //import type { UserRoom } from '../../firebase/Room'
  import { Data, Create } from '../../types/Data'
  import Cursor from './Cursor.svelte'
  import { MyPeerConnection } from '../../WebRTC/MyPeer'

  interface UserProps {
    connection: MyPeerConnection
    localStream: MediaStream
  }
  let { connection, localStream }: UserProps = $props()
  let posX = $state(0)
  let posY = $state(0)
  let color = $state<string|undefined>(null)
  let username = $state("")
  let electronIpc = (window as any).electron.ipcRenderer as Electron.IpcRenderer

  $effect(() => {
    localStream.getTracks().forEach((track) => {
      connection.pc.addTrack(track, localStream)
    })
  })
  let SetPosition = (x: number, y: number) => {
    posX = x
    posY = y
  }
  let CreateObject = () => {}

  $effect(() => {
    if (connection == null) return
    connection.data.onmessage = (event) => {
      let data: Data = JSON.parse(event.data)
      username = data.username
      color = data.color
      console.log(data)
      let p = Create(data)
      console.log(p);
      if (p == null) return
      p.MoveMouse = SetPosition
      p.CreateObject = CreateObject
      p.IPC = electronIpc
      p.Run()
    }
  })
</script>
{#if color != null}
  <Cursor x={posX} y={posY} color={color} user={username} />
{/if}

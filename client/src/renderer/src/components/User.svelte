<script lang="ts">
  //import type { UserRoom } from '../../firebase/Room'
  import { Data, Create } from '../../types/Data'
  import Cursor from './Cursor.svelte'
  import { MyPeerConnection } from '../../WebRTC/MyPeer'

  interface UserProps {
    connection: MyPeerConnection
  }
  let { connection }: UserProps = $props()
  let posX = $state(0)
  let posY = $state(0)

  let electronIpc = (window as any).electron.ipcRenderer as Electron.IpcRenderer

  let SetPosition = (x: number, y: number) => {
    posX = x
    posY = y
  }
  let CreateObject = () => {}

  $effect(() => {
    if (connection == null) return
    connection.data.onmessage = (event) => {
      let data: Data = JSON.parse(event.data)
      console.log(data)
      let p = Create(data)
      if (p == null) return
      p.MoveMouse = SetPosition
      p.CreateObject = CreateObject
      p.IPC = electronIpc
      p.Run()
    }
   
  })
</script>

<Cursor x={posX} y={posY} />

<script lang="ts">
  //import type { UserRoom } from '../../firebase/Room'
  import { Data, Create } from '../../types/Data'
  import Cursor from './Cursor.svelte'
  import { MyPeerConnection } from '../../WebRTC/MyPeer'

  interface UserProps {
    connection: MyPeerConnection
    localStream: MediaStream
    draw: (
      lastPos: { x: number; y: number },
      x: number,
      y: number,
      color: string,
      button: string
    ) => void
  }
  let lastPosDraw = $state<{ x: number; y: number } | null>(null)
  let selectedTool = $state<'draw' | 'click'>('click')
  let pressedMouse = $state(false)




  let { connection, localStream, draw }: UserProps = $props()
  let posX = $state(0)
  let posY = $state(0)
  let color = $state<string | undefined>(null)
  let username = $state('')
  let electronIpc = (window as any).electron.ipcRenderer as Electron.IpcRenderer
  $effect(() => {
    localStream.getTracks().forEach((track) => {
      connection.pc.addTrack(track, localStream)
    })
  })
  let SetPosition = (x: number, y: number, selectedTool: string) => {
    posX = x
    posY = y
    selectedTool = selectedTool
    if(selectedTool == 'draw') {
      if(pressedMouse) {
        Draw(x, y, 'draw')
      }
    }
  }
  let MouseUp = (button:string) => {
    pressedMouse = false;
    //lastPosDraw = null;
    if(selectedTool == "click"){
      electronIpc.send('click', {x: posX, y: posY, button: button})
    }if(selectedTool == "draw"){
      lastPosDraw = null;
    }
  }
  let MouseDown = (button:string) => {
    pressedMouse = true;
    button = "";
  }
  let Draw = (x: number, y: number, button: string) => {
    if (lastPosDraw == null) {
      lastPosDraw = { x, y }
      return
    }
    posX = x
    posY = y
    draw(lastPosDraw, x, y, color, button)
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
      console.log(p)
      if (p == null) return

      p.MoveMouse = SetPosition
      p.CreateObject = CreateObject
      p.MouseDown = MouseDown
      p.MouseUp = MouseUp
      //p.Draw = Draw
      p.IPC = electronIpc
      p.Run()
    }
  })
</script>

{#if color != null}
  <Cursor x={posX} y={posY} {color} user={username} tool={selectedTool} />
{/if}

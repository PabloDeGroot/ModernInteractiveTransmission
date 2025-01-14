<script lang="ts">
  //import type { UserRoom } from '../../firebase/Room'
  import { Data, Create } from '../../types/Data'
  import Cursor from './Cursor.svelte'
  import Object from './Objects/Object.svelte'
  interface UserProps {
    /*connection: MyPeerConnection
    localStream: MediaStream*/
    draw: (
      lastPos: { x: number; y: number },
      x: number,
      y: number,
      color: string,
      button: string
    ) => void
    createObject: (x: number, y: number, type: 'image' | 'text', src?: string) => void
    getObject: (x: number, y: number) => Object | null
  }
  let lastPosDraw = $state<{ x: number; y: number } | null>(null)
  let selectedTool = $state<'draw' | 'rubber' | 'click'>('click')
  let pressedMouse = $state(false)

  let { /*connection, localStream, */draw, getObject, createObject }: UserProps = $props()
  let posX = $state(0)
  let posY = $state(0)
  let color = $state<string | undefined>(null)
  let username = $state('')
  let electronIpc = (window as any).electron.ipcRenderer as Electron.IpcRenderer
  let overObject = $state<Object | null>(null)
  let pressedObject = $state<{ o: Object; x: number; y: number } | null>(null)

  export function recieveData(data: Data) {
    //connection.data.send(JSON.stringify(data))
    username = data.username
    color = data.color
    //console.log(selectedTool)

    let p = Create(data)
    if (p == null) return
    p.MoveMouse = SetPosition
    p.CreateObject = CreateObject
    p.MouseDown = MouseDown
    p.MouseUp = MouseUp
    //p.Draw = Draw
    p.IPC = electronIpc
    p.Run()
  }
/*
  $effect(() => {
    localStream.getTracks().forEach((track) => {
      connection.pc.addTrack(track, localStream)
    })
    connection.pc.getSenders().forEach((sender) => {
      console.log('Sender', sender)
      if (sender.track != null) {
        console.log('Sender Track', sender.track)
      }
    })
  })
  */
  let SetPosition = (x: number, y: number, tool: 'draw' | 'rubber' | 'click') => {
    posX = x
    posY = y
    selectedTool = tool
    if (tool == 'draw' || tool == 'rubber') {
      if (pressedMouse) {
        Draw(x, y, tool)
      }
    }

    let oldObject = overObject
    overObject = getObject(x, y)
    if (overObject != null) {
      console.log('OVER:', overObject)
    }
    if (overObject != null && tool == 'click') {
      overObject.SetHover(color)
    }
    if (pressedObject != null && tool == 'click') {
      pressedObject.o.SetPosition(x - pressedObject.x, y - pressedObject.y)
    }
    if (pressedObject != null && overObject == null) {
      // en teoria con esto si dos usarios agarran el mismo objeto se soluciona
      pressedObject = null
    }
    if (oldObject != null && oldObject != overObject) {
      oldObject.SetHover(undefined)
    }
    if (overObject == null) {
      electronIpc.send('move', { x: x, y: y })
    }
  }
  let MouseUp = (button: string) => {
    pressedMouse = false
    lastPosDraw = null

    if (pressedObject != null) {
      pressedObject = null
      //pressedObject.o.SetHover(undefined)
      return
    }
    if (selectedTool == 'click') {
      electronIpc.send('click', { x: posX, y: posY, button: button })
    }
  }
  let MouseDown = (/*button: string*/) => {
    pressedMouse = true
    if (overObject != null) {
      let offsetX = posX - overObject.x
      let offsetY = posY - overObject.y
      pressedObject = { o: overObject, x: offsetX, y: offsetY }
    }
    //button = "";
  }
  let Draw = (x: number, y: number, button: string) => {
    if (lastPosDraw == null) {
      lastPosDraw = { x, y }
      return
    }
    posX = x
    posY = y
    console.log(button)

    draw(lastPosDraw, x, y, color, button)
    lastPosDraw = { x, y }
  }
  let CreateObject = (x: number, y: number, type: 'image' | 'text', src?: string) => {
    createObject(x, y, type, src)
  }
/*
  $effect(() => {
    if (connection == null) return
    connection.data.onmessage = (event) => {
      let data: Data = JSON.parse(event.data)
      username = data.username
      color = data.color
      //console.log(selectedTool)

      let p = Create(data)
      if (p == null) return

      //console.log(p)

      p.MoveMouse = SetPosition
      p.CreateObject = CreateObject
      p.MouseDown = MouseDown
      p.MouseUp = MouseUp
      //p.Draw = Draw
      p.IPC = electronIpc
      p.Run()
    }
  })
  */
</script>

{#if color != null}
  <Cursor x={posX} y={posY} {color} user={username} tool={selectedTool} />
{/if}

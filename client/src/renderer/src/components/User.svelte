<script lang="ts">
  import type { DataConnection } from 'peerjs'
  import type { UserRoom } from '../../firebase/Room'
  import {Data, Create, MoveInput} from "../../types/Data"
  import Cursor from './Cursor.svelte'

  interface UserProps {
    user: UserRoom
    stream: MediaStream
    connection: DataConnection
  }
  let { user, stream, connection}: UserProps = $props()
  let posX = $state(0)
  let posY = $state(0)

  let electronIpc = (window as any).electron.ipcRenderer as Electron.IpcRenderer

  let SetPosition = (x: number, y: number) => {
    posX = x
    posY = y
  }
  let CreateObject = () => {
  }

  $effect(() =>{
    if(connection == null) return;
    connection.on('data', (data:Data) => {
      console.log(data)
      let p = Create(data)
      p.MoveMouse = SetPosition;
      p.CreateObject = CreateObject;
      p.IPC = electronIpc;
      p.Run();
    })
  });

</script>
<Cursor x={posX} y={posY} />

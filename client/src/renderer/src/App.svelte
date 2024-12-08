<script lang="ts">
  import GetRoom, { type Room, type UserRoom } from '../firebase/Room'
  import { FirestoreCallChannel } from '../WebRTC/FirestoreCallChannel'
  import MyPeer from '../WebRTC/MyPeer'

  // const ipcHandle = (): void => window.Electron.ipcRenderer.send('ping')

  let roomName = $state<string | null>(null)
  let userId = $state<string | null>(null)
  let callChannel = $derived(new FirestoreCallChannel(roomName))
  let peer = $derived(new MyPeer(callChannel, userId))
  $effect(() => {
    if(!peer) return;
    peer.onConnection = (conn) => {
      console.log('Connection', conn)
    }
    peer.call()
  })


  let api = (window as any).api
  api.getRoom().then((data: any) => {
    roomName = data.roomName
  })
  api.getUserId().then((data: any) => {
    userId = data.userId
  })
  // Get Monitor Stream
  // Call every user in the room
  // Create User component and pass the connection
</script>

<p>dsadsadasdsadsadadd</p>

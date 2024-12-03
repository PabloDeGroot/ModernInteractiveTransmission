<script lang="ts">
  import GetRoom, { type Room, type UserRoom } from "../firebase/Room"
  import {Peer} from "peerjs"

  let peer = new Peer()
  // const ipcHandle = (): void => window.Electron.ipcRenderer.send('ping')
  let users = $state<UserRoom[]>([])
  let roomName = $state<string|null>(null)
  let roomDoc = $derived(GetRoom(roomName));
  let room = $state<Room|null>(null)
  $effect(()=>{
    if(!roomDoc) return;
    roomDoc.subscribe((doc) => {
      if(!doc) return;
      room = doc
    })
  });

  let api = (window as any).api
  api.getRoom().then((data: any) => {
    roomName = data.roomName
  });
  // Get Monitor Stream
  // Call every user in the room
  // Create User component and pass the connection
  $effect(()=>{
    if(users == null || users.length == 0) return;
    users.forEach((user) => {
      if(user.peerId == peer.id) return;
      peer.connect(user.peerId)
    })
  });

    
</script>


<p>dsadsadasdsadsadadd</p>
{#each users as user}
  <p>{user.peerId}</p>
{/each}
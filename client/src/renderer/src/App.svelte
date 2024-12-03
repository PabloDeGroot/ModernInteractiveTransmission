
<!-- svelte-ignore missing-declaration -->
<script lang="ts">
  import GetRoom, { type UserRoom } from "../firebase/Room"

 // const ipcHandle = (): void => window.Electron.ipcRenderer.send('ping')
let users = $state<UserRoom[]>([])
 let api = (window as any).api
api.getRoom().then((data: any) => {
  GetRoom(data).subscribe((data) => {
    users = data.users;
  })
})
  
</script>


<p>dsadsadasdsadsadadd</p>
{#each users as user}
  <p>{user.peerId}</p>
{/each}
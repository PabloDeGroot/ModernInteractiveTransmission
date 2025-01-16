<script lang="ts">
  import User from './User.svelte'

  import Object from './Objects/Object.svelte'
  import Users from './Users.svelte'
  interface UsersProps {
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

  let components = $state<{ [key: string]: User | null }>({})
  let keys = $state<string[]>([])
  let test = $state<string>('')

  let api = (window as any).api
  console.log('users')

  api.onConnection((id: string) => {
    console.log('render Connection', id)
    components[id] = null
    test = 'dsa'
    keys = [...keys, id]

    console.log('Keys', $state.snapshot(keys))

    api.addData(id, (data: any) => {
      console.log('Data', data)
      if (components[id] == null) {
        console.log('Component is null')
      }
      components[id].recieveData(data)
    })
  })
  api.onClose((id: string) => {
    components[id] = null
    //keys = keys.filter((key) => key !== id)
  })
  // Get Monitor Stream
  // Call every user in the room
  // Create User component and pass the connections
</script>

<Users {keys} bind:components {draw} {getObject} {createObject} />

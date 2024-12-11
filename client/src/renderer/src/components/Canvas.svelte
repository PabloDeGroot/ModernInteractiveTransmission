<script lang="ts">
  let canvas = $state<HTMLCanvasElement | null>(null)
  //let lastPos = $state<{ x: number; y: number }>({ x: 0, y: 0 })
  export function Clear(){
    let ctx = canvas.getContext('2d')
    if (ctx == null) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

  }
  export function Draw(
    lastPos: { x: number; y: number },
    x: number,
    y: number,
    color: string,
    size: number,
    button: string
  ) {
    console.log("Draw button",button)
    //size = 10
    //color = 'red'
    //erase = false;
    //console.log('Drawing', x, y, color, size)
    let ctx = canvas.getContext('2d')
    if (ctx == null) return
    ctx.beginPath()
    if (button == 'rubber') {
      ctx.globalCompositeOperation = 'destination-out'
      ctx.strokeStyle = 'rgba(0,0,0,1)'
    } else {
      ctx.strokeStyle = color
      ctx.globalCompositeOperation = 'source-over'
    }
    //source-over
    //ctx.globalCompositeOperation = 'source-over'
    ctx.lineWidth = size
    ctx.lineCap = 'round'
    ctx.moveTo(lastPos.x, lastPos.y)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.closePath()

    //lastPos = { x, y }
  }
  $effect(() => {
    if (canvas == null) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
</script>

<canvas bind:this={canvas} id="canvas" style="height: 100%;width: 100%;"></canvas>

<script lang="ts">
  let canvas = $state<HTMLCanvasElement | null>(null)
  //let lastPos = $state<{ x: number; y: number }>({ x: 0, y: 0 })
  export function Draw(
    lastPos: { x: number; y: number },
    x: number,
    y: number,
    color: string,
    size: number,
    button: string
  ) {
    //size = 10
    //color = 'red'
    //erase = false;
    console.log('Drawing', x, y, color, size)
    let ctx = canvas.getContext('2d')
    if (ctx == null) return
    ctx.beginPath()
    if (button == 'erase') {
      ctx.strokeStyle = 'transparent'
    } else {
      ctx.strokeStyle = color
    }
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

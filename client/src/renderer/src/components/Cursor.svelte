<script lang="ts">
    interface CursorProps {
        x: number;
        y: number;
    }
    let { x, y }: CursorProps = $props();
    
</script>

<style>
    .cursor {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 50%;
    }
</style>
<div class="cursor" style="left: {x}px; top: {y}px;"></div>
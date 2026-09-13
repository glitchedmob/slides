<script lang="ts">
    let { src, active, position }: { src: string; active: boolean; position: { x: number; y: number } } = $props();
    const x = $derived(active ? position.x : position.x >= 50 ? 103 : -3);
</script>

<div
    class={[
        'absolute top-0 left-0 transition-[transform,opacity] duration-400 ease-in-out',
        active ? 'opacity-100 delay-100' : 'opacity-0',
    ]}
    style:transform={`translate(${x}vw, ${position.y}vh)`}
>
    <img class="m-0 block" {src} alt="" />
</div>

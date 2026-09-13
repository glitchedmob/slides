<script lang="ts">
    import { slideTypes } from '$lib/slideTypes';

    let { title, subtitle, class: className }: { title: string; subtitle?: string; class?: string } = $props();
</script>

<section data-slide-type={slideTypes.title} class={className}>
    <h1>{title}</h1>
    {#if subtitle}
        <p class="text-[0.8em]">{subtitle}</p>
    {/if}
</section>

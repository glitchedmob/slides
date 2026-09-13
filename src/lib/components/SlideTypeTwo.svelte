<script lang="ts">
    import type { Snippet } from 'svelte';
    import { slideTypes } from '$lib/slideTypes';

    let { children }: { children: Snippet } = $props();
</script>

<section data-slide-type={slideTypes.type2}>
    {@render children()}
</section>

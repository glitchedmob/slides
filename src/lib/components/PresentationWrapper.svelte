<script lang="ts">
    import type { Snippet } from 'svelte';
    import RevealPresentation from './RevealPresentation.svelte';
    import TitleBackground from './backgrounds/TitleBackground.svelte';
    import TypeOneBackground from './backgrounds/TypeOneBackground.svelte';
    import TypeTwoBackground from './backgrounds/TypeTwoBackground.svelte';
    import { parseSlideType, slideTypes, type SlideTypes } from '$lib/slideTypes';
    import logo from '$lib/assets/logo.svg';

    let { children }: { children: Snippet } = $props();
    let slideType = $state<SlideTypes>(slideTypes.none);
</script>

<RevealPresentation
    onslidechange={(slide) => {
        slideType = parseSlideType(slide.dataset.slideType);
    }}
>
    {#snippet decorations()}
        <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <TitleBackground active={slideType === slideTypes.title} />
            <TypeOneBackground active={slideType === slideTypes.type1} />
            <TypeTwoBackground active={slideType === slideTypes.type2} />
        </div>
        <img class="absolute bottom-[5vh] left-[5vw] m-0 h-[10vh]" src={logo} alt="Levi Zitting Logo" />
    {/snippet}
    {@render children()}
</RevealPresentation>

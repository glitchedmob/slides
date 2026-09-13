<script lang="ts">
    import presentation from './presentation';
    import PresentationWrapper from '$lib/components/PresentationWrapper.svelte';
    import TitleSlide from '$lib/components/TitleSlide.svelte';
    import SlideTypeOne from '$lib/components/SlideTypeOne.svelte';
    import WhatIsMeadow from './slides/WhatIsMeadow.svelte';
    import WhatCanYouDoWithIt from './slides/WhatCanYouDoWithIt.svelte';
</script>

<svelte:head>
    <title>{presentation.title}</title>
</svelte:head>

<PresentationWrapper>
    <TitleSlide class="title" title="The Meadow Board" />
    <WhatIsMeadow />
    <WhatCanYouDoWithIt />
    <SlideTypeOne>
        <h2>Demo! 🎉</h2>
        <a href="https://github.com/glitchedmob/meadow-board-demo" target="_blank"> glitchedmob/meadow-board-demo </a>
    </SlideTypeOne>
    <TitleSlide title="Questions?" />
</PresentationWrapper>

<script lang="ts">
    import PresentationWrapper from '$lib/components/PresentationWrapper.svelte';
    import TitleSlide from '$lib/components/TitleSlide.svelte';
    import SlideTypeOne from '$lib/components/SlideTypeOne.svelte';
    import WhatIsMeadow from '$lib/presentations/MeadowBoard/slides/WhatIsMeadow.svelte';
    import WhatCanYouDoWithIt from '$lib/presentations/MeadowBoard/slides/WhatCanYouDoWithIt.svelte';
</script>

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

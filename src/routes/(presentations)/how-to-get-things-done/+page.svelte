<script lang="ts">
    import presentation from './presentation';
    import PresentationWrapper from '$lib/components/PresentationWrapper.svelte';
    import TitleSlide from '$lib/components/TitleSlide.svelte';
    import ResourcesSlides from './slides/ResourcesSlides.svelte';
    import IntroSlides from './slides/IntroSlides.svelte';
    import DeClutteringYourMindSlides from './slides/DeClutteringYourMindSlides.svelte';
    import RoutinesSlides from './slides/RoutinesSlides.svelte';
    import RegularReflectionSlides from './slides/RegularReflectionSlides.svelte';
    import TimeManagementSlides from './slides/TimeManagementSlides.svelte';
    import CommunicatingWell from './slides/CommunicatingWell.svelte';

    const title = 'How To Get Things Done';
</script>

<svelte:head>
    <title>{presentation.title}</title>
</svelte:head>

<PresentationWrapper>
    <TitleSlide class="title" {title} />
    <IntroSlides />
    <DeClutteringYourMindSlides />
    <RegularReflectionSlides />
    <RoutinesSlides />
    <TimeManagementSlides />
    <CommunicatingWell />
    <TitleSlide class="title" title="Demo 🚀" />
    <ResourcesSlides />
    <TitleSlide title="Questions?" />
</PresentationWrapper>

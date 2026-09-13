<script lang="ts">
    import PresentationWrapper from '$lib/components/PresentationWrapper.svelte';
    import TitleSlide from '$lib/components/TitleSlide.svelte';
    import ResourcesSlides from '$lib/presentations/HowToGetThingsDone/slides/ResourcesSlides.svelte';
    import IntroSlides from '$lib/presentations/HowToGetThingsDone/slides/IntroSlides.svelte';
    import DeClutteringYourMindSlides from '$lib/presentations/HowToGetThingsDone/slides/DeClutteringYourMindSlides.svelte';
    import RoutinesSlides from '$lib/presentations/HowToGetThingsDone/slides/RoutinesSlides.svelte';
    import RegularReflectionSlides from '$lib/presentations/HowToGetThingsDone/slides/RegularReflectionSlides.svelte';
    import TimeManagementSlides from '$lib/presentations/HowToGetThingsDone/slides/TimeManagementSlides.svelte';
    import CommunicatingWell from '$lib/presentations/HowToGetThingsDone/slides/CommunicatingWell.svelte';

    const title = 'How To Get Things Done';
</script>

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

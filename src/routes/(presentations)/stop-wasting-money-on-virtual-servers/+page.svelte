<script lang="ts">
    import presentation from './presentation';
    import PresentationWrapper from '$lib/components/PresentationWrapper.svelte';
    import TitleSlide from '$lib/components/TitleSlide.svelte';
    import SlideTypeOne from '$lib/components/SlideTypeOne.svelte';
    import DiagramSlide from './slides/DiagramSlide.svelte';
    import NetworkingSlides from './slides/NetworkingSlides.svelte';
    import NaiveApproachSlides from './slides/NaiveApproachSlides.svelte';
    import MoreNetworkingSlides from './slides/MoreNetworkingSlides.svelte';
    import WireGuardSlides from './slides/WireGuardSlides.svelte';
    import DockerSlides from './slides/DockerSlides.svelte';
    import CaddySlides from './slides/CaddySlides.svelte';
    import ResticSlides from './slides/ResticSlides.svelte';
    import WrapUpSlides from './slides/WrapUpSlides.svelte';
</script>

<svelte:head>
    <title>{presentation.title}</title>
</svelte:head>

<PresentationWrapper>
    <TitleSlide class="title" title="Stop Wasting Money on Virtual Servers" />
    <SlideTypeOne>
        <h2>Demo 🎉</h2>
        <a href="https://social.sgf.dev" target="_blank">social.sgf.dev</a>
    </SlideTypeOne>
    <NetworkingSlides />
    <NaiveApproachSlides />
    <MoreNetworkingSlides />
    <SlideTypeOne>
        <h2>So What's the Better Way?</h2>
        <p class="fragment">Well... you cheat a bit</p>
        <p class="fragment">You pay for a virtual server</p>
    </SlideTypeOne>
    <DiagramSlide />
    <SlideTypeOne>
        <h2>What Kind of Server?</h2>
        <ul class="fragment">
            <li>
                Physically close with low latency
                <ul>
                    <li>Most hosting companies have a "looking glass" tool for testing</li>
                </ul>
            </li>
            <li>Low spec and cheap</li>
            <li>Includes IPV4</li>
        </ul>
    </SlideTypeOne>
    <WireGuardSlides />
    <DockerSlides />
    <CaddySlides />
    <ResticSlides />
    <SlideTypeOne>
        <h2>Demo 2 🎉</h2>
        <a href="https://github.com/sgfdevs/mastodon" target="_blank">github.com/sgfdevs/mastodon</a>
    </SlideTypeOne>
    <WrapUpSlides />
    <TitleSlide title="Questions?" />
</PresentationWrapper>

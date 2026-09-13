<script lang="ts">
    import PresentationWrapper from '$lib/components/PresentationWrapper.svelte';
    import TitleSlide from '$lib/components/TitleSlide.svelte';
    import SlideTypeOne from '$lib/components/SlideTypeOne.svelte';
    import DiagramSlide from '$lib/presentations/StopWastingMoneyOnVirtualServers/slides/DiagramSlide.svelte';
    import NetworkingSlides from '$lib/presentations/StopWastingMoneyOnVirtualServers/slides/NetworkingSlides.svelte';
    import NaiveApproachSlides from '$lib/presentations/StopWastingMoneyOnVirtualServers/slides/NaiveApproachSlides.svelte';
    import MoreNetworkingSlides from '$lib/presentations/StopWastingMoneyOnVirtualServers/slides/MoreNetworkingSlides.svelte';
    import WireGuardSlides from '$lib/presentations/StopWastingMoneyOnVirtualServers/slides/WireGuardSlides.svelte';
    import DockerSlides from '$lib/presentations/StopWastingMoneyOnVirtualServers/slides/DockerSlides.svelte';
    import CaddySlides from '$lib/presentations/StopWastingMoneyOnVirtualServers/slides/CaddySlides.svelte';
    import ResticSlides from '$lib/presentations/StopWastingMoneyOnVirtualServers/slides/ResticSlides.svelte';
    import WrapUpSlides from '$lib/presentations/StopWastingMoneyOnVirtualServers/slides/WrapUpSlides.svelte';
</script>

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

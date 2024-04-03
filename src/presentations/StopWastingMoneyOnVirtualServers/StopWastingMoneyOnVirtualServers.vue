<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useReveal } from '@/composables/useReveal';
import { useTitle } from '@/composables/useTitle';
import PresentationWrapper from '@/components/PresentationWrapper.vue';
import TitleSlide from '@/components/TitleSlide.vue';
import SlideTypeOne from '@/components/SlideTypeOne.vue';
import DiagramSlide from '@/presentations/StopWastingMoneyOnVirtualServers/slides/DiagramSlide.vue';
import NetworkingSlides from '@/presentations/StopWastingMoneyOnVirtualServers/slides/NetworkingSlides.vue';
import NaiveApproachSlides from '@/presentations/StopWastingMoneyOnVirtualServers/slides/NaiveApproachSlides.vue';
import MoreNetworkingSlides from '@/presentations/StopWastingMoneyOnVirtualServers/slides/MoreNetworkingSlides.vue';
import WireGuardSlides from '@/presentations/StopWastingMoneyOnVirtualServers/slides/WireGuardSlides.vue';
import DockerSlides from '@/presentations/StopWastingMoneyOnVirtualServers/slides/DockerSlides.vue';
import CaddySlides from '@/presentations/StopWastingMoneyOnVirtualServers/slides/CaddySlides.vue';
import ResticSlides from '@/presentations/StopWastingMoneyOnVirtualServers/slides/ResticSlides.vue';
import WrapUpSlides from '@/presentations/StopWastingMoneyOnVirtualServers/slides/WrapUpSlides.vue';

const { initialize, destroy } = useReveal();

const title = 'Stop Wasting Money on Virtual Servers';

useTitle(title);

onMounted(async () => {
    await initialize();
});

onUnmounted(() => {
    destroy();
});
</script>

<template>
    <PresentationWrapper>
        <TitleSlide class="title" title="Stop Wasting Money on Virtual Servers" />
        <SlideTypeOne>
            <h2>Demo 🎉</h2>
            <a href="https://social.sgf.dev" target="_blank">
                social.sgf.dev
            </a>
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
            <a href="https://github.com/sgfdevs/mastodon" target="_blank">
                github.com/sgfdevs/mastodon
            </a>
        </SlideTypeOne>
        <WrapUpSlides />
        <TitleSlide title="Questions?" />
    </PresentationWrapper>
</template>


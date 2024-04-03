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
        </SlideTypeOne>
        <DiagramSlide />
        <WireGuardSlides />
        <DockerSlides />
        <CaddySlides />
        <ResticSlides />
        <WrapUpSlides />
        <TitleSlide title="Questions?" />
    </PresentationWrapper>
</template>


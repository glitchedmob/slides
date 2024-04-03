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
        <DiagramSlide />
        <TitleSlide title="Questions?" />
    </PresentationWrapper>
</template>

<style lang="scss" scoped>

</style>

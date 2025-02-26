<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useReveal } from '@/composables/useReveal';
import { useTitle } from '@/composables/useTitle';
import PresentationWrapper from '@/components/PresentationWrapper.vue';
import TitleSlide from '@/components/TitleSlide.vue';
import ResourcesSlides from '@/presentations/HowToGetThingsDone/slides/ResourcesSlides.vue';
import IntroSlides from '@/presentations/HowToGetThingsDone/slides/IntroSlides.vue';
import DeClutteringYourMindSlides from '@/presentations/HowToGetThingsDone/slides/DeClutteringYourMindSlides.vue';
import RoutinesSlides from '@/presentations/HowToGetThingsDone/slides/RoutinesSlides.vue';
import RegularReflectionSlides from '@/presentations/HowToGetThingsDone/slides/RegularReflectionSlides.vue';
import TimeManagementSlides from '@/presentations/HowToGetThingsDone/slides/TimeManagementSlides.vue';
import CommunicatingWell from '@/presentations/HowToGetThingsDone/slides/CommunicatingWell.vue';

const { initialize, destroy } = useReveal();

const title = 'How To Get Things Done';

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
        <TitleSlide class="title" :title="title" />
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
</template>

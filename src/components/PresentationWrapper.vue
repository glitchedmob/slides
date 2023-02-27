<script setup lang="ts">
import { ref } from 'vue';
import { useReveal } from '@/composables/useReveal';
import type { SlideTypes } from '@/slideTypes';
import { parseSlideType, slideTypes } from '@/slideTypes';
import TitleBackground from '@/components/backgrounds/TitleBackground.vue';
import TypeOneBackground from '@/components/backgrounds/TypeOneBackground.vue';
import TypeTwoBackground from '@/components/backgrounds/TypeTwoBackground.vue';

const { onReady } = useReveal();

const slideType = ref<SlideTypes>(slideTypes.none);

const updateSlideTypeFromSlide = (slide: HTMLElement) => {
    slideType.value = parseSlideType(slide.dataset.slideType);
};

onReady((reveal) => {
    updateSlideTypeFromSlide(reveal.getCurrentSlide());

    reveal.on('slidechanged', (event) => {
        const slide = (event as any).currentSlide as HTMLElement;
        updateSlideTypeFromSlide(slide);
    });
});
</script>

<template>
    <div class="reveal">
        <div class="background-container">
            <TitleBackground class="background" :active="slideType === slideTypes.title" />
            <TypeOneBackground class="background" :active="slideType === slideTypes.type1" />
            <TypeTwoBackground class="background" :active="slideType === slideTypes.type2" />
        </div>
        <div class="logo">
            <img src="@/assets/logo.svg" alt="Levi Zitting Logo" />
        </div>
        <div class="slides">
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
.background-container,
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.logo {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(5vw, -5vh);
    height: 10vh;
}
</style>

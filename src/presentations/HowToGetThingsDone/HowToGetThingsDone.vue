<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useReveal } from '@/composables/useReveal';
import { useTitle } from '@/composables/useTitle';
import PresentationWrapper from '@/components/PresentationWrapper.vue';
import TitleSlide from '@/components/TitleSlide.vue';
// import SlideTypeOne from '@/components/SlideTypeOne.vue';

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
        <TitleSlide title="Questions?" />
    </PresentationWrapper>
</template>

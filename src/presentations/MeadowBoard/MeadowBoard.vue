<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useReveal } from '@/composables/useReveal';
import { useTitle } from '@/composables/useTitle';
import PresentationWrapper from '@/components/PresentationWrapper.vue';
import TitleSlide from '@/components/TitleSlide.vue';
import SlideTypeOne from '@/components/SlideTypeOne.vue';
import WhatIsMeadow from '@/presentations/MeadowBoard/slides/WhatIsMeadow.vue';
import WhatCanYouDoWithIt from '@/presentations/MeadowBoard/slides/WhatCanYouDoWithIt.vue';

const { initialize, destroy } = useReveal();

const title = 'Bring Your IoT Ideas to Life With the Meadow Board and Its Game-Changing .NET Apis';

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
        <TitleSlide class="title" title="The Meadow Board" />
        <WhatIsMeadow />
        <WhatCanYouDoWithIt />
        <SlideTypeOne>
            <h2>Demo! 🎉</h2>
            <a href="https://github.com/glitchedmob/meadow-board-demo" target="_blank">
                glitchedmob/meadow-board-demo
            </a>
        </SlideTypeOne>
        <TitleSlide title="Questions?" />
    </PresentationWrapper>
</template>

<style lang="scss" scoped>
//.title {
//    ::v-deep(h1) {
//        font-size: 1.75em;
//    }
//}
</style>

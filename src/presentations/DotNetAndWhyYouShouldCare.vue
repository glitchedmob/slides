<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useReveal } from '@/composables/useReveal';
import { useTitle } from '@/composables/useTitle';
import PresentationWrapper from '@/components/PresentationWrapper.vue';
import TitleSlide from '@/components/TitleSlide.vue';
import WhatIsDotNetSlide from '@/presentations/slides/WhatIsDotNetSlide.vue';
import WhatCanYouDoWithIt from '@/presentations/slides/WhatCanYouDoWithIt.vue';

const { initialize, destroy } = useReveal();

useTitle('.NET and Why You Should Care');

onMounted(async () => {
    await initialize();
});

onUnmounted(() => {
    destroy();
});
</script>

<template>
    <PresentationWrapper>
        <TitleSlide title=".NET and Why You Should Care" />
        <WhatIsDotNetSlide />
        <WhatCanYouDoWithIt />
        <section>
            <h3>Hello Slide 3</h3>
        </section>
    </PresentationWrapper>
</template>

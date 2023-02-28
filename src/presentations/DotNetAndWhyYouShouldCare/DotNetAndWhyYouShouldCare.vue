<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useReveal } from '@/composables/useReveal';
import { useTitle } from '@/composables/useTitle';
import PresentationWrapper from '@/components/PresentationWrapper.vue';
import TitleSlide from '@/components/TitleSlide.vue';
import WhatIsDotNetSlide from '@/presentations/DotNetAndWhyYouShouldCare/slides/WhatIsDotNetSlide.vue';
import WhatCanYouDoWithItSlide from '@/presentations/DotNetAndWhyYouShouldCare/slides/WhatCanYouDoWithItSlide.vue';
import HowDoesDotNetDoAllOfThis from '@/presentations/DotNetAndWhyYouShouldCare/slides/HowDoesDotNetDoAllOfThis.vue';

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
        <WhatCanYouDoWithItSlide />
        <TitleSlide title="How Does .NET Do All of This?" />
        <HowDoesDotNetDoAllOfThis />
    </PresentationWrapper>
</template>

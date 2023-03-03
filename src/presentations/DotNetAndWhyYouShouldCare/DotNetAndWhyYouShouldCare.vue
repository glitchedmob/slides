<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useReveal } from '@/composables/useReveal';
import { useTitle } from '@/composables/useTitle';
import PresentationWrapper from '@/components/PresentationWrapper.vue';
import TitleSlide from '@/components/TitleSlide.vue';
import SlideTypeOne from '@/components/SlideTypeOne.vue';
import WhatIsDotNetSlides from '@/presentations/DotNetAndWhyYouShouldCare/slides/WhatIsDotNetSlides.vue';
import WhatCanYouDoWithItSlides from '@/presentations/DotNetAndWhyYouShouldCare/slides/WhatCanYouDoWithItSlides.vue';
import HowDoesDotNetDoAllOfThisSlides from '@/presentations/DotNetAndWhyYouShouldCare/slides/HowDoesDotNetDoAllOfThisSlides.vue';
import AnatomyOfADotNetAppSlides from '@/presentations/DotNetAndWhyYouShouldCare/slides/AnatomyOfADotNetAppSlides.vue';
import SoWhyShouldYouCareSlides from '@/presentations/DotNetAndWhyYouShouldCare/slides/SoWhyShouldYouCareSlides.vue';
import CSharpSyntaxSlides from '@/presentations/DotNetAndWhyYouShouldCare/slides/CSharpSyntaxSlides.vue';

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
        <WhatIsDotNetSlides />
        <WhatCanYouDoWithItSlides />
        <TitleSlide title="How Does .NET Do All of This?" />
        <HowDoesDotNetDoAllOfThisSlides />
        <AnatomyOfADotNetAppSlides />
        <CSharpSyntaxSlides />
        <SlideTypeOne>
            <h2>Demo! 🎉</h2>
            <a href="https://github.com/glitchedmob/dotnet-and-why-you-should-care-demo" target="_blank">
                glitchedmob/dotnet-and-why-you-should-care-demo
            </a>
        </SlideTypeOne>
        <TitleSlide title="So Why Should You Care?" />
        <SoWhyShouldYouCareSlides />
        <TitleSlide title="Questions?" />
    </PresentationWrapper>
</template>

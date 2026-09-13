<script lang="ts">
    import PresentationWrapper from '$lib/components/PresentationWrapper.svelte';
    import TitleSlide from '$lib/components/TitleSlide.svelte';
    import SlideTypeOne from '$lib/components/SlideTypeOne.svelte';
    import WhatIsDotNetSlides from '$lib/presentations/DotNetAndWhyYouShouldCare/slides/WhatIsDotNetSlides.svelte';
    import WhatCanYouDoWithItSlides from '$lib/presentations/DotNetAndWhyYouShouldCare/slides/WhatCanYouDoWithItSlides.svelte';
    import HowDoesDotNetDoAllOfThisSlides from '$lib/presentations/DotNetAndWhyYouShouldCare/slides/HowDoesDotNetDoAllOfThisSlides.svelte';
    import AnatomyOfADotNetAppSlides from '$lib/presentations/DotNetAndWhyYouShouldCare/slides/AnatomyOfADotNetAppSlides.svelte';
    import SoWhyShouldYouCareSlides from '$lib/presentations/DotNetAndWhyYouShouldCare/slides/SoWhyShouldYouCareSlides.svelte';
    import CSharpSyntaxSlides from '$lib/presentations/DotNetAndWhyYouShouldCare/slides/CSharpSyntaxSlides.svelte';
</script>

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

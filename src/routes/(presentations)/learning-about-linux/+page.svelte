<script lang="ts">
    import Markdown from 'reveal.js/plugin/markdown';
    import DesktopGallery from './desktop-gallery';
    import 'photoswipe/style.css';
    import RevealPresentation from '$lib/components/RevealPresentation.svelte';
    import presentation from './presentation';
    import '../why-linux/mint-theme.scss';
    import './presentation.css';
    import welcome from './slides/01-welcome.md?raw';
    import context from './slides/02-linux-around-us.md?raw';
    import desktop from './slides/03-desktop-linux.md?raw';
    import benefits from './slides/04-benefits-and-hardware.md?raw';
    import software from './slides/05-everyday-software.md?raw';
    import gaming from './slides/06-gaming.md?raw';
    import streaming from './slides/07-streaming-drm.md?raw';
    import tryingLinux from './slides/08-trying-linux.md?raw';
    import exploration from './slides/09-exploration.md?raw';

    const slides = [welcome, context, desktop, benefits, software, streaming, gaming, tryingLinux, exploration];
    const options = {
        plugins: [Markdown, DesktopGallery],
        width: 1100,
        height: 760,
        margin: 0.08,
        transition: 'none' as const,
        slideNumber: 'c/t' as const,
    };
</script>

<svelte:head>
    <title>{presentation.title}</title>
    <meta name="description" content="Learning About Linux with Levi Zitting." />
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="learning-about-linux why-linux">
    <RevealPresentation theme="custom" {options}>
        {#each slides as slide, index (index)}
            <section data-markdown="">
                <div data-template="" hidden>{slide}</div>
            </section>
        {/each}
    </RevealPresentation>
</div>

<script lang="ts">
    import Markdown from 'reveal.js/plugin/markdown';
    import presentation from './presentation';
    import RevealPresentation from '$lib/components/RevealPresentation.svelte';
    import './mint-theme.scss';
    import title from './slides/slide-1.md?raw';
    import windows from './slides/slide-2.md?raw';
    import history from './slides/slide-2b.md?raw';
    import linux from './slides/slide-3.md?raw';
    import distributions from './slides/slide-3b.md?raw';
    import differences from './slides/slide-4.md?raw';
    import benefits from './slides/slide-5.md?raw';
    import expectations from './slides/slide-6.md?raw';
    import installation from './slides/slide-7.md?raw';
    import resources from './slides/slide-8.md?raw';

    const slides = [
        title,
        windows,
        history,
        linux,
        distributions,
        differences,
        benefits,
        expectations,
        installation,
        resources,
    ];
    const options = { plugins: [Markdown] };
</script>

<svelte:head>
    <title>{presentation.title}</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="why-linux">
    <RevealPresentation theme="custom" {options}>
        {#each slides as slide, index (index)}
            <section data-markdown="">
                <div data-template="" hidden>{slide}</div>
            </section>
        {/each}
    </RevealPresentation>
</div>

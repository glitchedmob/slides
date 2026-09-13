<script lang="ts">
    import { marked } from 'marked';
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

    // Render bundled Markdown before Reveal initializes so Svelte retains DOM ownership.
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
    ].map((source) => marked.parse(source, { async: false }));
</script>

<div class="why-linux">
    <RevealPresentation theme="linux">
        {#each slides as html, index (index)}
            <section class:center={index === 0} class:steps={index === 8}>
                <!-- eslint-disable-next-line svelte/no-at-html-tags -- Only bundled, repository-owned Markdown is rendered here. -->
                {@html html}
            </section>
        {/each}
    </RevealPresentation>
</div>

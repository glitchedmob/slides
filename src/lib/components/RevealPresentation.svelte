<script lang="ts">
    import { onMount, type Snippet } from 'svelte';
    import { resolve } from '$app/paths';
    import type { RevealApi, RevealConfig } from 'reveal.js';

    interface Props {
        children: Snippet;
        decorations?: Snippet;
        options?: RevealConfig;
        theme?: 'default' | 'dev-job' | 'linux';
        class?: string;
        onslidechange?: (slide: HTMLElement) => void;
    }

    let { children, decorations, options = {}, theme = 'default', class: className, onslidechange }: Props = $props();
    let element: HTMLDivElement;
    let failure = $state(false);

    onMount(() => {
        let disposed = false;
        let instance: RevealApi | undefined;

        const updateSlide = () => {
            const slide = instance?.getCurrentSlide();
            if (!disposed && slide) onslidechange?.(slide);
        };

        async function initialize() {
            const [{ default: Reveal }, { default: highlight }, { default: notes }] = await Promise.all([
                import('reveal.js'),
                import('reveal.js/plugin/highlight'),
                import('reveal.js/plugin/notes'),
            ]);
            if (disposed) return;

            const deck = new Reveal(element);
            instance = deck;
            await deck.initialize({
                hash: true,
                respondToHashChanges: true,
                history: true,
                controls: true,
                progress: true,
                center: true,
                embedded: true,
                controlsTutorial: false,
                ...options,
                plugins: [highlight, notes, ...(options.plugins ?? [])],
            });
            if (disposed) {
                deck.destroy();
                return;
            }
            deck.on('slidechanged', updateSlide);
            updateSlide();
        }

        void initialize().catch((error: unknown) => {
            if (disposed) return;
            instance?.destroy();
            instance = undefined;
            failure = true;
            console.error('Unable to initialize presentation', error);
        });

        return () => {
            disposed = true;
            instance?.off('slidechanged', updateSlide);
            instance?.destroy();
        };
    });
</script>

<div
    bind:this={element}
    class={[
        'reveal h-dvh w-screen [--r-code-font:var(--font-mono)]',
        '[--r-heading1-size:2.5em] [--r-heading2-size:1.6em] [--r-heading3-size:1.3em] [--r-heading4-size:1em]',
        '[&_.slides_img]:box-content [&_.slides_img]:inline [&_.slides_img]:align-baseline [&_pre]:font-normal',
        theme === 'default' &&
            'bg-navy font-light [--r-background-color:var(--color-navy)] [--r-heading-font:var(--font-heading)] [--r-heading-text-transform:none] [--r-link-color-hover:#8dcffc] [--r-link-color:var(--color-sky)] [--r-main-font:var(--font-sans)] [--r-selection-background-color:#1e345d]',
        theme === 'dev-job' &&
            'bg-[#263238] font-normal [--r-background-color:#263238] [--r-link-color-hover:#8dcffc] [--r-main-font:var(--font-sans)] [--r-selection-background-color:#bee4fd]',
        className,
    ]}
>
    {@render decorations?.()}
    <div class="slides">
        {@render children()}
    </div>
</div>

{#if failure}
    <div role="alert" class="fixed inset-0 z-50 grid place-content-center gap-4 bg-navy p-8 text-center">
        <p>This presentation could not start. Please reload the page.</p>
        <a class="text-sky underline" href={resolve('/')}>Back to presentations</a>
    </div>
{/if}

<noscript>
    <p class="fixed inset-x-0 top-0 z-50 bg-navy p-4 text-center">Enable JavaScript to navigate these slides.</p>
</noscript>

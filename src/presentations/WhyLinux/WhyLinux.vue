<script setup lang="ts">
import Markdown from 'reveal.js/plugin/markdown';
import RevealPresentation from '@/components/RevealPresentation.vue';
import { useTitle } from '@/composables/useTitle';
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

useTitle('Why Linux');
</script>

<template>
    <div class="why-linux">
        <RevealPresentation :options="options">
            <section v-for="(slide, index) in slides" :key="index" data-markdown>
                <div data-template hidden>{{ slide }}</div>
            </section>
        </RevealPresentation>
    </div>
</template>

<style lang="scss" src="./mint-theme.scss"></style>

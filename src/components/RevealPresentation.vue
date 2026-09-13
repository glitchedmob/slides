<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue';
import type { RevealConfig } from 'reveal.js';
import { useReveal } from '@/composables/useReveal';

const props = defineProps<{ options?: RevealConfig }>();
const element = useTemplateRef<HTMLDivElement>('element');
const { initialize, destroy } = useReveal();

onMounted(async () => {
    if (element.value) {
        await initialize(element.value, props.options);
    }
});
onBeforeUnmount(destroy);
</script>

<template>
    <div ref="element" class="reveal">
        <slot name="decorations" />
        <div class="slides">
            <slot />
        </div>
    </div>
</template>

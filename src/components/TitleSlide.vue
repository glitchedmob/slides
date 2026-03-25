<script setup lang="ts">
import { slideTypes } from '@/slideTypes';

defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
        default: undefined,
    },
});
</script>

<template>
    <section :data-slide-type="slideTypes.title">
        <h1>{{ title }}</h1>
        <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
    </section>
</template>

<style scoped lang="scss">
.subtitle {
    font-size: 0.8em;
}
</style>

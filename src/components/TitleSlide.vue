<script setup lang="ts">
import { slideTypes } from '@/slideTypes';

defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <section :data-slide-type="slideTypes.title">
        <h1>{{ title }}</h1>
        <p>By Levi Zitting</p>
    </section>
</template>

<script setup lang="ts">
import TitleSlide from '@/components/TitleSlide.vue';

const title = 'I turned My House Into a Datacenter';
const subtitle = '(And You Can Too)';
</script>

<template>
    <TitleSlide class="title" :title="title" :subtitle="subtitle" />
</template>

<style lang="scss" scoped>
.title {
    ::v-deep(h1) {
        font-size: 1.95em;
    }
}
</style>

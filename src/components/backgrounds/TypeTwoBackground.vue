<script setup lang="ts">
import PatternIcon from '@/components/backgrounds/PatternIcon.vue';

import pattern11 from '@/assets/patterns/pattern-11.svg';
import pattern26 from '@/assets/patterns/pattern-26.svg';
import pattern13 from '@/assets/patterns/pattern-13.svg';
import pattern18 from '@/assets/patterns/pattern-18.svg';
import pattern23 from '@/assets/patterns/pattern-23.svg';
import pattern1 from '@/assets/patterns/pattern-1.svg';
import pattern19 from '@/assets/patterns/pattern-19.svg';

defineProps({
    active: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="type2-background">
        <PatternIcon :position="{ x: 3, y: 20 }" :active="active" :src="pattern11" />
        <PatternIcon :position="{ x: 5, y: 9 }" :active="active" :src="pattern26" />

        <PatternIcon :position="{ x: 80, y: 4 }" :active="active" :src="pattern13" />
        <PatternIcon :position="{ x: 95, y: 4.25 }" :active="active" :src="pattern18" />
        <PatternIcon :position="{ x: 90, y: 13.5 }" :active="active" :src="pattern23" />
        <PatternIcon :position="{ x: 94.5, y: 12 }" :active="active" :src="pattern1" />
        <PatternIcon :position="{ x: 95, y: 26 }" :active="active" :src="pattern19" />
    </div>
</template>

<style scoped lang="scss"></style>

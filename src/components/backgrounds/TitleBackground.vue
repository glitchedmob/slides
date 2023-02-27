<script setup lang="ts">
import PatternIcon from '@/components/backgrounds/PatternIcon.vue';

import pattern26 from '@/assets/patterns/pattern-26.svg';
import pattern18 from '@/assets/patterns/pattern-18.svg';
import pattern1 from '@/assets/patterns/pattern-1.svg';
import pattern19 from '@/assets/patterns/pattern-19.svg';
import pattern24 from '@/assets/patterns/pattern-24.svg';
import pattern13 from '@/assets/patterns/pattern-13.svg';
import pattern11 from '@/assets/patterns/pattern-11.svg';
import pattern23 from '@/assets/patterns/pattern-23.svg';
import pattern20 from '@/assets/patterns/pattern-20.svg';
import pattern6 from '@/assets/patterns/pattern-6.svg';
import pattern21 from '@/assets/patterns/pattern-21.svg';

defineProps({
    active: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div key="title" class="title-background">
        <PatternIcon :position="{ x: 5, y: 6 }" :active="active" :src="pattern21" />
        <PatternIcon :position="{ x: 5, y: 65 }" :active="active" :src="pattern23" />
        <PatternIcon :position="{ x: 8, y: 40 }" :active="active" :src="pattern13" />
        <PatternIcon :position="{ x: 12, y: 18 }" :active="active" :src="pattern23" />
        <PatternIcon :position="{ x: 14, y: 80 }" :active="active" :src="pattern1" />
        <PatternIcon :position="{ x: 25, y: 90 }" :active="active" :src="pattern18" />
        <PatternIcon :position="{ x: 25, y: 4 }" :active="active" :src="pattern11" />

        <PatternIcon :position="{ x: 82, y: 6 }" :active="active" :src="pattern20" />
        <PatternIcon :position="{ x: 85, y: 90 }" :active="active" :src="pattern19" />
        <PatternIcon :position="{ x: 90, y: 70 }" :active="active" :src="pattern20" />
        <PatternIcon :position="{ x: 93, y: 35 }" :active="active" :src="pattern26" />
        <PatternIcon :position="{ x: 94, y: 7 }" :active="active" :src="pattern24" />
        <PatternIcon :position="{ x: 97, y: 60 }" :active="active" :src="pattern11" />
        <PatternIcon :position="{ x: 92, y: 85 }" :active="active" :src="pattern6" />
    </div>
</template>

<style scoped lang="scss"></style>

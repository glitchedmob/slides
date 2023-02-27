<script setup lang="ts">
import PatternIcon from '@/components/backgrounds/PatternIcon.vue';

import pattern24 from '@/assets/patterns/pattern-24.svg';
import pattern25 from '@/assets/patterns/pattern-25.svg';
import pattern13 from '@/assets/patterns/pattern-13.svg';
import pattern11 from '@/assets/patterns/pattern-11.svg';
import pattern20 from '@/assets/patterns/pattern-20.svg';
import pattern6 from '@/assets/patterns/pattern-6.svg';

defineProps<{
    active: boolean;
}>();
</script>

<template>
    <div class="type1-background">
        <PatternIcon :position="{ x: 5.15, y: 4 }" :active="active" :src="pattern13" />
        <PatternIcon :position="{ x: 8, y: 3 }" :active="active" :src="pattern24" />
        <PatternIcon :position="{ x: 4, y: 10 }" :active="active" :src="pattern25" />

        <PatternIcon :position="{ x: 90, y: 4 }" :active="active" :src="pattern11" />
        <PatternIcon :position="{ x: 91, y: 10 }" :active="active" :src="pattern20" />
        <PatternIcon :position="{ x: 94, y: 3 }" :active="active" :src="pattern6" />
    </div>
</template>

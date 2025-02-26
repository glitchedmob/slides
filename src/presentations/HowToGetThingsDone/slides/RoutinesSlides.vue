<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h1>Routines/Habits</h1>
    </SlideTypeOne>
    <SlideTypeOne>
        <h2>Habit Stacking</h2>
        <ul>
            <li class="fragment">
                Take advantage of current habits
                <ul>
                    <li>After I make coffee I process my inbox</li>
                </ul>
            </li>
            <li class="fragment">
                Incremental daily progress = exponential growth
                <ul>
                    <li>After inbox processing I read 3 pages</li>
                </ul>
            </li>
        </ul>
    </SlideTypeOne>
    <SlideTypeOne>
        <h2>Environment</h2>
        <ul>
            <li>
                Your environment shapes your behavior
                <ul>
                    <li>Separate work and play if possible</li>
                </ul>
            </li>
            <li>Simplify your desktop, phone, etc to limit chaos</li>
        </ul>
    </SlideTypeOne>
</template>

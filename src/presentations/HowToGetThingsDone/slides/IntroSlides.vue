<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>
<template>
    <SlideTypeOne>
        <h2>This Presentation Is For You If You:</h2>
        <ul>
            <li class="fragment">Want to be less stressed</li>
            <li class="fragment">Want to be a high performer</li>
            <li class="fragment">Or both</li>
        </ul>
    </SlideTypeOne>
    <SlideTypeOne>
        <h2>What We're Going To Talk About</h2>
        <ul>
            <li>De-cluttering Your Mind</li>
            <li>Regular reflection</li>
            <li>Routines/Habits</li>
            <li>Time management</li>
            <li>Communicating well</li>
        </ul>
    </SlideTypeOne>
    <SlideTypeOne>
        <h2>About Me</h2>
        <div class="r-grid">
            <ul>
                <li>Started at a small computer repair shop at 17</li>
                <li>Landing my first dev role at 19</li>
                <li>Been an Engineering Manager and now a Staff Engineer</li>
                <li>Run SGF Devs and Open SGF</li>
            </ul>
        </div>
    </SlideTypeOne>
</template>

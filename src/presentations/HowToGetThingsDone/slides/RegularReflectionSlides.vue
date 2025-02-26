<script setup lang="ts">
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>

<template>
    <SlideTypeTwo>
        <h1>Regular Reflection</h1>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h2>Day book</h2>
        <ul>
            <li>
                YTB (Yesterday, Today, Blockers)
                <ul class="fragment">
                    <li>What did I do yesterday?</li>
                    <li>What will I do today?</li>
                    <li>What's getting in my way?</li>
                </ul>
            </li>
            <li class="fragment">A great blank space for notes each day</li>
        </ul>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h2>Weekly/Monthly</h2>
        <ul>
            <li>Checking in on larger projects</li>
            <li>Analyze your own performance</li>
            <li>Setting goals for the next increment</li>
        </ul>
    </SlideTypeTwo>
</template>

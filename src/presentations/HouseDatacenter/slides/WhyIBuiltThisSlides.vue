<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>Why I Built This</h2>
        <ul>
            <li class="fragment">Springfield Devs runs on a tight budget</li>
            <li class="fragment">Hosted SaaS free tiers changed and became limiting</li>
            <li class="fragment">Open-source self-hosted tools reduced recurring cost</li>
            <li class="fragment">I wanted a setup volunteers can maintain together</li>
        </ul>
    </SlideTypeOne>
    <SlideTypeOne>
        <h2>Single-Server Limitations</h2>
        <ul>
            <li class="fragment">Old desktop + Docker Compose worked short-term</li>
            <li class="fragment">Too much implicit setup knowledge in one person</li>
            <li class="fragment">Hard to delegate, audit, and recover consistently</li>
            <li class="fragment">Goal: move the knowledge into code and git history</li>
        </ul>
    </SlideTypeOne>
</template>

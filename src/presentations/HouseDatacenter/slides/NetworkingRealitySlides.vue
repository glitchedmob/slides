<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>Networking Challenges</h2>
        <ul>
            <li class="fragment">Residential internet is not a managed data center edge</li>
            <li class="fragment">Public exposure still requires reliability and security controls</li>
            <li class="fragment">Need a stable public entrypoint plus private tunnel to home network</li>
            <li class="fragment">Design for segmentation and least-privilege connectivity</li>
        </ul>
    </SlideTypeOne>
</template>

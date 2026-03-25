<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>Kubernetes as Destination</h2>
        <ul>
            <li class="fragment">Kubernetes is the target platform, not the main topic</li>
            <li class="fragment">Once cluster exists, service deployment becomes portable</li>
            <li class="fragment">Cloud move later is easier from this layer upward</li>
            <li class="fragment">Hard part: reliably creating the cluster from physical infra</li>
        </ul>
    </SlideTypeOne>
</template>

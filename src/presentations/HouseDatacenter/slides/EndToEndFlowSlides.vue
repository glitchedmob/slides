<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>End-to-End Flow</h2>
        <ol>
            <li class="fragment">Merge infrastructure change</li>
            <li class="fragment">Terraform provisions or updates infrastructure</li>
            <li class="fragment">Ansible configures systems and bootstraps cluster software</li>
            <li class="fragment">Flux/Kubernetes applies app manifests</li>
            <li class="fragment">Service becomes reachable through edge ingress</li>
        </ol>
    </SlideTypeOne>
</template>

<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>IaC Ladder</h2>
        <ul>
            <li class="fragment">Physical hardware + network layer</li>
            <li class="fragment">Virtualization layer (Proxmox VMs)</li>
            <li class="fragment">OS configuration layer (Ansible)</li>
            <li class="fragment">Cluster layer (k3s/Kubernetes)</li>
            <li class="fragment">Application layer (Kubernetes manifests)</li>
        </ul>
    </SlideTypeOne>
</template>

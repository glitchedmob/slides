<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>Proxmox</h2>
        <ul>
            <li class="fragment">Runs on physical hosts and provides VM management</li>
            <li class="fragment">Acts as homelab virtualization foundation</li>
            <li class="fragment">Terraform provider manages VM lifecycle in code</li>
            <li class="fragment">RBAC and resource pools enforce safer access boundaries</li>
        </ul>
    </SlideTypeOne>
</template>

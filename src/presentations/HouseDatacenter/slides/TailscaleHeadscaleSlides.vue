<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>Public Edge Pattern</h2>
        <ul>
            <li class="fragment">Small VPS provides public ingress with stable public IP</li>
            <li class="fragment">Traffic forwards across private tunnel to home workloads</li>
            <li class="fragment">Home services remain private-by-default behind the edge</li>
        </ul>
    </SlideTypeOne>
    <SlideTypeOne>
        <h2>Tailscale + Headscale</h2>
        <ul>
            <li class="fragment">Tailscale provides mesh connectivity built on WireGuard</li>
            <li class="fragment">Control plane coordinates peer connectivity</li>
            <li class="fragment">Headscale gives a self-hosted coordination server option</li>
            <li class="fragment">Used for ACL-driven segmentation</li>
        </ul>
    </SlideTypeOne>
</template>

<script setup lang="ts">

import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>

<template>
    <SlideTypeTwo>
        <h2>Backups</h2>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>Backblaze</h3>
        <div class="fragment">
            <p>Provides very cheap S3 compatible storage. Excellent for storing backups</p>
            <img style="max-height: 30vh" src="../../../assets/images/backblaze-pricing.png" alt="Screenshot of Backblaze pricing page">
        </div>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>Restic</h3>
        <p class="fragment">A tool for actually creating backups. It supports:</p>
        <ul class="fragment">
            <li>Incremental backups with data deduplication</li>
            <li>Restore to any snapshot</li>
            <li>Encrypting your backups at rest</li>
            <li>Several backends to upload backups to</li>
        </ul>
    </SlideTypeTwo>
</template>

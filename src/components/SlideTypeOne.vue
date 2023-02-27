<script setup lang="ts">
import { slideTypes } from '@/slideTypes';
</script>
<template>
    <section :data-slide-type="slideTypes.type1">
        <slot />
    </section>
</template>

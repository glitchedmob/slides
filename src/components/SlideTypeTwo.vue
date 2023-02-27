<script setup lang="ts">
import { slideTypes } from '@/slideTypes';
</script>
<template>
    <section :data-slide-type="slideTypes.type2">
        <slot />
    </section>
</template>

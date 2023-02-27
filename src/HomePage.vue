<script setup lang="ts">
import { useTitle } from '@/composables/useTitle';

useTitle('Levi Zitting Slides');
</script>

<template>
    <RouterLink :to="{ name: 'DotNetAndWhyYouShouldCare' }">.NET And Why You Should Care</RouterLink>
</template>

<script setup lang="ts">
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>

<template>
    <SlideTypeTwo>
        <h2>Docker & Docker Compose</h2>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>Docker</h3>
        <p class="fragment">Essentially provides lightweight virtual machines* called containers</p>
        <p class="fragment small">*they're definitely not virtual machines but it's easier to describe that way</p>
        <p class="fragment tiny">**if this description upsets you sorry not sorry 😎</p>
        <p class="fragment">These containers can be easily created and destroyed using the docker cli</p>
        <p class="fragment">Containers also typically have all their dependencies included</p>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>Docker Compose</h3>
        <div class="fragment">Allows you to spin up many containers at once using a config file</div>
        <div class="fragment">For example creating a web app and it's database at the same time</div>
    </SlideTypeTwo>
</template>

<style scoped lang="scss">
.small {
    font-size: 0.5em;
    line-height: 1;
}

.tiny {
    font-size: 0.4em;
    line-height: 1;
}
</style>

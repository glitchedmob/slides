<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>Wrap Up</h2>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Things You Probably Shouldn't Self Host</h3>
        <ul>
            <li class="fragment">Email servers</li>
            <li class="fragment">Anything touching payments</li>
            <li class="fragment">Game servers</li>
        </ul>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Disclaimers</h3>
        <ul>
            <li class="fragment">This was not legal advice</li>
            <li class="fragment">
                Putting things on the internet is always risky
                <ul>
                    <li class="fragment">Plan accordingly</li>
                    <li class="fragment">E.g. tighten your home networks security</li>
                </ul>
            </li>
        </ul>
    </SlideTypeOne>
</template>


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
            <li class="fragment">Most real world things</li>
        </ul>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Disclaimers</h3>
        <ul>
            <li class="fragment">
                This was not legal advice
                <ul>
                    <li>Don't blame me if your ISP shuts you down</li>
                </ul>
            </li>
            <li class="fragment">
                Putting things on the internet is always risky
                <ul>
                    <li>Plan accordingly</li>
                    <li>E.g. tighten your home networks security</li>
                </ul>
            </li>
        </ul>
    </SlideTypeOne>
</template>


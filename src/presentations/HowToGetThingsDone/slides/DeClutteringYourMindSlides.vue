<script setup lang="ts">
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
import TitleSlide from '@/components/TitleSlide.vue';
</script>

<template>
    <TitleSlide title="De-cluttering Your Mind" />
    <SlideTypeTwo>
        <h2>Send Everything to Your "Inbox"</h2>
        <ul>
            <li class="fragment">Could be paper or electronic</li>
            <li class="fragment">
                Record anything and everything ASAP
                <ul class="fragment">
                    <li>Action items</li>
                    <li>Ideas</li>
                    <li>Appointments</li>
                </ul>
            </li>
        </ul>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h2>Processing Your Inbox</h2>
        <p>For each item in your inbox you'll want to:</p>
        <ul class="fragment">
            <li>If it will take less than two minutes, just do it</li>
            <li>Add clarity</li>
            <li>
                Make it actionable
                <ul>
                    <li>Ask "What's the next step to move this forward?"</li>
                </ul>
            </li>
            <li>Categorize it and add reminders</li>
        </ul>
    </SlideTypeTwo>
</template>

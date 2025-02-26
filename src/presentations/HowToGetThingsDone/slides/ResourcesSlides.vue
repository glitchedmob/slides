<script setup lang="ts">
import TitleSlide from '@/components/TitleSlide.vue';
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>
<template>
    <TitleSlide title="Resources" />
    <SlideTypeTwo>
        <h2>Books</h2>
        <div class="r-grid">
            <a href="https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563">
                <img src="@/assets/images/getting-things-done-book-cover.jpg" alt="Getting Things Done Book Cover" />
            </a>
            <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299">
                <img src="@/assets/images/atomic-habits-book-cover.jpg" alt="Atomic Habits Book Cover" />
            </a>
            <a href="https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692">
                <img src="@/assets/images/deep-work-book-cover.jpg" alt="Deep Work Book Cover" />
            </a>
        </div>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h2>Apps</h2>
        <div class="r-grid">
            <a href="https://www.todoist.com/" target="_blank">
                <img src="@/assets/images/todoist-logo.png" alt="Todoist Logo" />
                <p>Todoist</p>
            </a>
            <a href="https://sparkmailapp.com/" target="_blank">
                <img src="@/assets/images/spark-logo.png" alt="Spark Logo" />
                <p>Spark</p>
            </a>
            <a href="https://obsidian.md/" target="_blank">
                <img src="@/assets/images/obsidian-logo.png" alt="Obsidian Logo" />
                <p>Obsidian</p>
            </a>
        </div>
    </SlideTypeTwo>
</template>

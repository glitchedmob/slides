<script lang="ts">
    import TitleSlide from '$lib/components/TitleSlide.svelte';
    import SlideTypeTwo from '$lib/components/SlideTypeTwo.svelte';
    import asset0 from '$lib/assets/images/getting-things-done-book-cover.jpg';
    import asset1 from '$lib/assets/images/atomic-habits-book-cover.jpg';
    import asset2 from '$lib/assets/images/deep-work-book-cover.jpg';
    import asset3 from '$lib/assets/images/todoist-logo.png';
    import asset4 from '$lib/assets/images/spark-logo.png';
    import asset5 from '$lib/assets/images/obsidian-logo.png';
</script>

<TitleSlide title="Resources" />
<SlideTypeTwo>
    <h2>Books</h2>
    <div class="flex items-center">
        <a href="https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563">
            <img src={asset0} alt="Getting Things Done Book Cover" />
        </a>
        <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299">
            <img src={asset1} alt="Atomic Habits Book Cover" />
        </a>
        <a href="https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692">
            <img src={asset2} alt="Deep Work Book Cover" />
        </a>
    </div>
</SlideTypeTwo>
<SlideTypeTwo>
    <h2>Apps</h2>
    <div class="flex items-center">
        <a href="https://www.todoist.com/" target="_blank">
            <img src={asset3} alt="Todoist Logo" />
            <p>Todoist</p>
        </a>
        <a href="https://sparkmailapp.com/" target="_blank">
            <img src={asset4} alt="Spark Logo" />
            <p>Spark</p>
        </a>
        <a href="https://obsidian.md/" target="_blank">
            <img src={asset5} alt="Obsidian Logo" />
            <p>Obsidian</p>
        </a>
    </div>
</SlideTypeTwo>

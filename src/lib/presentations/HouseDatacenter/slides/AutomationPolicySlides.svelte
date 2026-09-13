<script lang="ts">
    import SlideTypeOne from '$lib/components/SlideTypeOne.svelte';
</script>

<SlideTypeOne>
    <h2>Automation Policy</h2>
    <div class="flex items-center">
        <div class="flex-1">
            <h3>Automate</h3>
            <ul>
                <li class="fragment">Most app and VM lifecycle changes</li>
                <li class="fragment">Routine infrastructure updates</li>
                <li class="fragment">Validation and plan checks in CI</li>
            </ul>
        </div>
        <div class="flex-1">
            <h3>Manual by Design</h3>
            <ul>
                <li class="fragment">High-risk home network changes</li>
                <li class="fragment">Anything that could lock out remote access</li>
                <li class="fragment">Changes requiring physical recovery path</li>
            </ul>
        </div>
    </div>
</SlideTypeOne>

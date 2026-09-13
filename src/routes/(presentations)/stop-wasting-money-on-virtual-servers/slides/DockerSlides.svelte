<script lang="ts">
    import SlideTypeTwo from '$lib/components/SlideTypeTwo.svelte';
</script>

<SlideTypeTwo>
    <h2>Docker & Docker Compose</h2>
</SlideTypeTwo>
<SlideTypeTwo>
    <h3>Docker</h3>
    <p class="fragment">Essentially provides lightweight virtual machines* called containers</p>
    <p class="fragment text-[0.5em] leading-none">
        *they're definitely not virtual machines but it's easier to describe that way
    </p>
    <p class="fragment text-[0.4em] leading-none">**if this description upsets you sorry not sorry 😎</p>
    <p class="fragment">These containers can be easily created and destroyed using the docker cli</p>
    <p class="fragment">Containers also typically have all their dependencies included</p>
</SlideTypeTwo>
<SlideTypeTwo>
    <h3>Docker Compose</h3>
    <div class="fragment">Allows you to spin up many containers at once using a config file</div>
    <div class="fragment">For example creating a web app and it's database at the same time</div>
</SlideTypeTwo>

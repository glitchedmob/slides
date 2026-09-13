<script lang="ts">
    import { resolve } from '$app/paths';
    import { presentations } from '$lib/presentations';
</script>

<svelte:head>
    <title>Levi Zitting Slides</title>
</svelte:head>

<main class="min-h-dvh bg-navy pb-[50px]">
    <div class="relative mx-auto w-[calc(100%-80px)] max-w-[1260px]">
        <h1 class="py-[50px] text-center font-heading text-[50px] font-semibold">Slides</h1>
        <nav aria-label="Presentations">
            <ul class="grid gap-12">
                {#each presentations as presentation (presentation.name)}
                    <li>
                        <a
                            class="text-[25px] text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
                            href={resolve('/[presentation]', { presentation: presentation.path.slice(1) })}
                        >
                            {presentation.title}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</main>

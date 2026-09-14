<script lang="ts">
    import { resolve } from '$app/paths';
    import dotnet from './(presentations)/dotnet-and-why-you-should-care/presentation';
    import meadow from './(presentations)/meadow-board/presentation';
    import virtualServers from './(presentations)/stop-wasting-money-on-virtual-servers/presentation';
    import gettingThingsDone from './(presentations)/how-to-get-things-done/presentation';
    import datacenter from './(presentations)/house-datacenter/presentation';
    import linux from './(presentations)/why-linux/presentation';
    import firstDevJob from './(presentations)/how-to-land-your-first-dev-job/presentation';
    import learningAboutLinux from './(presentations)/learning-about-linux/presentation';

    const presentations = [
        dotnet,
        meadow,
        virtualServers,
        gettingThingsDone,
        datacenter,
        linux,
        firstDevJob,
        learningAboutLinux,
    ];
</script>

<svelte:head>
    <title>Levi Zitting Slides</title>
</svelte:head>

<main class="min-h-dvh bg-navy pb-[50px]">
    <div class="relative mx-auto w-[calc(100%-80px)] max-w-[1260px]">
        <h1 class="py-[50px] text-center font-heading text-[50px] font-semibold">Slides</h1>
        <nav aria-label="Presentations">
            <ul class="grid gap-12">
                {#each presentations as presentation (presentation.path)}
                    <li>
                        <a
                            class="text-[25px] text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
                            href={resolve(`${presentation.path}#/`)}
                        >
                            {presentation.title}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</main>

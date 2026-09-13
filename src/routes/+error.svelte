<script lang="ts">
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
</script>

<svelte:head>
    <title>{page.status} - Slides</title>
</svelte:head>

<main class="grid min-h-dvh place-content-center gap-6 p-8 text-center">
    <h1 class="font-heading text-4xl font-semibold">{page.status}</h1>
    <p>{page.error?.message ?? 'Something went wrong'}</p>
    <a class="text-sky underline underline-offset-4" href={resolve('/')}>Back to presentations</a>
</main>

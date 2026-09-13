<script lang="ts">
    import type { LayoutProps } from './$types';
    import logo from '$lib/assets/logo.svg';
    import '../app.css';

    let { children }: LayoutProps = $props();
</script>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

{@render children()}

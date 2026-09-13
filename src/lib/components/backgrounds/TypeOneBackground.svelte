<script lang="ts">
    import PatternIcon from '$lib/components/backgrounds/PatternIcon.svelte';

    import pattern24 from '$lib/assets/patterns/pattern-24.svg';
    import pattern25 from '$lib/assets/patterns/pattern-25.svg';
    import pattern13 from '$lib/assets/patterns/pattern-13.svg';
    import pattern11 from '$lib/assets/patterns/pattern-11.svg';
    import pattern20 from '$lib/assets/patterns/pattern-20.svg';
    import pattern6 from '$lib/assets/patterns/pattern-6.svg';

    let { active = false }: { active?: boolean } = $props();
</script>

<div class="absolute inset-0">
    <PatternIcon position={{ x: 5.15, y: 4 }} {active} src={pattern13} />
    <PatternIcon position={{ x: 8, y: 3 }} {active} src={pattern24} />
    <PatternIcon position={{ x: 4, y: 10 }} {active} src={pattern25} />

    <PatternIcon position={{ x: 90, y: 4 }} {active} src={pattern11} />
    <PatternIcon position={{ x: 91, y: 10 }} {active} src={pattern20} />
    <PatternIcon position={{ x: 94, y: 3 }} {active} src={pattern6} />
</div>

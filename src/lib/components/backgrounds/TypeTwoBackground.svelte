<script lang="ts">
    import PatternIcon from '$lib/components/backgrounds/PatternIcon.svelte';

    import pattern11 from '$lib/assets/patterns/pattern-11.svg';
    import pattern26 from '$lib/assets/patterns/pattern-26.svg';
    import pattern13 from '$lib/assets/patterns/pattern-13.svg';
    import pattern18 from '$lib/assets/patterns/pattern-18.svg';
    import pattern23 from '$lib/assets/patterns/pattern-23.svg';
    import pattern1 from '$lib/assets/patterns/pattern-1.svg';
    import pattern19 from '$lib/assets/patterns/pattern-19.svg';

    let { active = false }: { active?: boolean } = $props();
</script>

<div class="absolute inset-0">
    <PatternIcon position={{ x: 3, y: 20 }} {active} src={pattern11} />
    <PatternIcon position={{ x: 5, y: 9 }} {active} src={pattern26} />

    <PatternIcon position={{ x: 80, y: 4 }} {active} src={pattern13} />
    <PatternIcon position={{ x: 95, y: 4.25 }} {active} src={pattern18} />
    <PatternIcon position={{ x: 90, y: 13.5 }} {active} src={pattern23} />
    <PatternIcon position={{ x: 94.5, y: 12 }} {active} src={pattern1} />
    <PatternIcon position={{ x: 95, y: 26 }} {active} src={pattern19} />
</div>

<script lang="ts">
    const glyphs = {
        linkedin: '\uf08c',
        twitter: '\uf099',
        github: '\uf09b',
        instagram: '\uf16d',
        dev: '\uf6cc',
        envelope: '\uf0e0',
    };
    let { name }: { name: keyof typeof glyphs } = $props();
</script>

<span class="font-icons leading-none font-normal not-italic antialiased" aria-hidden="true">{glyphs[name]}</span>

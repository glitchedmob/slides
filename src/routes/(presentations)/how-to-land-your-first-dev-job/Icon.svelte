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

<span class="icon leading-none font-normal not-italic antialiased" aria-hidden="true">{glyphs[name]}</span>

<style>
    @font-face {
        font-family: 'first-dev-job-icons';
        src: url('./assets/icons/icon.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: block;
    }

    .icon {
        font-family: 'first-dev-job-icons';
    }
</style>

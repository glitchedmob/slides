<script lang="ts">
    let { headerText }: { headerText: string } = $props();
    import asset0 from '../assets/images/me.jpg';
    import Icon from '$lib/components/Icon.svelte';
</script>

<section>
    <h2>{headerText}</h2>

    <div class="fragment">
        <img class="r-frame w-1/4 rounded-full" src={asset0} alt="Levi Zitting" />

        <div
            class="mt-5 flex justify-between [&_a]:text-white [&_a:focus]:text-[#90a4ae] [&_a:hover]:text-[#90a4ae] [&_p]:text-[30px] [&_span]:text-[70px]"
        >
            <a href="https://github.com/glitchedmob" target="_blank" title="Github" rel="noopener">
                <Icon name="github" />
                <p>@glitchedmob</p>
            </a>
            <a href="https://twitter.com/levi_zitting" target="_blank" title="Twitter" rel="noopener">
                <Icon name="twitter" />
                <p>@levi_zitting</p>
            </a>
            <a href="https://www.linkedin.com/in/levi-zitting/" target="_blank" title="Linkedin" rel="noopener">
                <Icon name="linkedin" />
                <p>Levi Zitting</p>
            </a>
            <a href="mailto:me@levizitting.com" title="Email">
                <Icon name="envelope" />
                <p>me@levizitting.com</p>
            </a>
        </div>
    </div>
</section>

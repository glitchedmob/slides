<template>
    <section>
        <h2>{{ headerText }}</h2>

        <div class="fragment">
            <img class="r-frame profile" src="../assets/images/me.jpg" alt="Levi Zitting Profile Image" />

            <div class="social">
                <a href="https://github.com/glitchedmob" target="_blank" title="Github" rel="noopener">
                    <i class="icon-github" aria-hidden="true"></i>
                    <p>@glitchedmob</p>
                </a>
                <a href="https://twitter.com/levi_zitting" target="_blank" title="Twitter" rel="noopener">
                    <i class="icon-twitter" aria-hidden="true"></i>
                    <p>@levi_zitting</p>
                </a>
                <a href="https://www.linkedin.com/in/levi-zitting/" target="_blank" title="Linkedin" rel="noopener">
                    <i class="icon-linkedin" aria-hidden="true"></i>
                    <p>Levi Zitting</p>
                </a>
                <a href="mailto:me@levizitting.com" title="Email">
                    <i class="icon-envelope" aria-hidden="true"></i>
                    <p>me@levizitting.com</p>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{ headerText: string }>();
</script>

<style lang="scss" scoped>
.profile {
    width: 25%;
    border-radius: 50%;
}

.social {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 0 0;

    a {
        color: #fff;

        &:hover,
        &:focus {
            color: #90a4ae;
        }
    }

    i {
        font-size: 70px;
    }

    p {
        font-size: 30px;
    }
}
</style>

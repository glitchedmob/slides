<script setup lang="ts">
import { useTitle } from '@/composables/useTitle';

useTitle('Levi Zitting Slides');
</script>

<template>
    <div class="home">
        <div class="container">
            <div class="container">
                <h1>Slides</h1>
                <RouterLink class="link" :to="{ name: 'DotNetAndWhyYouShouldCare' }">
                    .NET And Why You Should Care
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home {
    background-color: var(--dark-blue);
    width: 100%;
    height: 100%;

    h1 {
        color: var(--white);
        font-family: var(--heading-font);
        font-weight: var(--heading-font-weight);
        font-size: 50px;
        text-align: center;
        padding: 50px 0;
    }
}

.link {
    color: var(--white);
    font-family: var(--main-font);
    font-size: 25px;
}
</style>

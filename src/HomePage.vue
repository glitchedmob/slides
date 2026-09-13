<script setup lang="ts">
import { useTitle } from '@/composables/useTitle';
import { presentations } from '@/presentations';

useTitle('Levi Zitting Slides');
</script>

<template>
    <main class="home">
        <div class="container">
            <h1>Slides</h1>
            <nav aria-label="Presentations">
                <ul class="presentation-list">
                    <li v-for="presentation in presentations" :key="presentation.name">
                        <RouterLink class="link" :to="{ name: presentation.name }">
                            {{ presentation.title }}
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>

<style scoped lang="scss">
.home {
    background-color: var(--dark-blue);
    width: 100%;
    min-height: 100%;
    padding-bottom: 50px;
    box-sizing: border-box;

    h1 {
        color: var(--white);
        font-family: var(--heading-font);
        font-weight: var(--heading-font-weight);
        font-size: 50px;
        text-align: center;
        padding: 50px 0;
    }
}

.presentation-list {
    display: grid;
    gap: 48px;
}

.link {
    color: var(--white);
    font-family: var(--main-font);
    font-size: 25px;
}
</style>

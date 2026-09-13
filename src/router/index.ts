import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/HomePage.vue';
import { presentations } from '@/presentations';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        ...presentations.map(({ path, name, component }) => ({ path, name, component })),
    ],
});

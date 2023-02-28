import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/HomePage.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/dotnet-and-why-you-should-care',
            name: 'DotNetAndWhyYouShouldCare',
            component: () => import('@/presentations/DotNetAndWhyYouShouldCare/DotNetAndWhyYouShouldCare.vue'),
        },
    ],
});

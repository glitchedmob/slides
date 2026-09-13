import type { PresentationDefinition } from '../types';

export default {
    name: 'HowToLandYourFirstDevJob',
    path: '/how-to-land-your-first-dev-job',
    title: 'How To Land Your First Dev Job',
    order: 70,
    component: () => import('./HowToLandYourFirstDevJob.svelte'),
} satisfies PresentationDefinition;

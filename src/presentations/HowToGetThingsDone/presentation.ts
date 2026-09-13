import type { PresentationDefinition } from '../types';

export default {
    name: 'HowToGetThingsDone',
    path: '/how-to-get-things-done',
    title: 'How To Get Things Done',
    order: 40,
    component: () => import('./HowToGetThingsDone.vue'),
} satisfies PresentationDefinition;

import type { PresentationDefinition } from '../types';

export default {
    name: 'WhyLinux',
    path: '/why-linux',
    title: 'Why Linux?',
    order: 60,
    component: () => import('./WhyLinux.svelte'),
} satisfies PresentationDefinition;

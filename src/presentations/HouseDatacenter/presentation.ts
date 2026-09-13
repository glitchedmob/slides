import type { PresentationDefinition } from '../types';

export default {
    name: 'HouseDatacenter',
    path: '/house-datacenter',
    title: 'I turned My House Into a Datacenter (And You Can Too)',
    order: 50,
    component: () => import('./HouseDatacenter.vue'),
} satisfies PresentationDefinition;

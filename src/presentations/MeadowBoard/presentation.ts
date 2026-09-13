import type { PresentationDefinition } from '../types';

export default {
    name: 'MeadowBoard',
    path: '/meadow-board',
    title: 'Bring Your IoT Ideas to Life With the Meadow Board and Its Game-Changing .NET Apis',
    order: 20,
    component: () => import('./MeadowBoard.vue'),
} satisfies PresentationDefinition;

import type { PresentationDefinition } from '../types';

export default {
    name: 'StopWastingMoneyOnVirtualServers',
    path: '/stop-wasting-money-on-virtual-servers',
    title: 'Stop Wasting Money on Virtual Servers',
    order: 30,
    component: () => import('./StopWastingMoneyOnVirtualServers.svelte'),
} satisfies PresentationDefinition;

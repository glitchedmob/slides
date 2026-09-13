import type { RouteRecordRaw } from 'vue-router';

export interface PresentationDefinition {
    name: string;
    path: string;
    title: string;
    order: number;
    component: NonNullable<RouteRecordRaw['component']>;
}

import type { Component } from 'svelte';

export interface PresentationDefinition {
    name: string;
    path: `/${string}`;
    title: string;
    order: number;
    component: () => Promise<{ default: Component }>;
}

import type { PresentationDefinition } from './types';

// Metadata is eager; each definition keeps its slide component lazy-loaded.
const definitions = import.meta.glob<PresentationDefinition>('./*/presentation.ts', {
    eager: true,
    import: 'default',
});

export const presentations = Object.values(definitions).sort((a, b) => a.order - b.order);

import type { PresentationDefinition } from './types';

// Discover metadata eagerly while keeping each deck in its own lazy-loaded bundle.
const definitions = import.meta.glob<PresentationDefinition>('./*/presentation.ts', {
    eager: true,
    import: 'default',
});

export const presentations = Object.values(definitions).sort((a, b) => a.order - b.order);

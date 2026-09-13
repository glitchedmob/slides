import type { PresentationDefinition } from '../types';

export default {
    name: 'DotNetAndWhyYouShouldCare',
    path: '/dotnet-and-why-you-should-care',
    title: '.NET And Why You Should Care',
    order: 10,
    component: () => import('./DotNetAndWhyYouShouldCare.svelte'),
} satisfies PresentationDefinition;

import { error } from '@sveltejs/kit';
import { presentations } from '$lib/presentations';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => presentations.map(({ path }) => ({ presentation: path.slice(1) }));

export const load: PageLoad = async ({ params }) => {
    const presentation = presentations.find(({ path }) => path === `/${params.presentation}`);
    if (!presentation) error(404, 'Presentation not found');

    return {
        name: presentation.name,
        title: presentation.title,
        component: (await presentation.component()).default,
    };
};

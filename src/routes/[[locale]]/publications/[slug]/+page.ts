import { getLocale } from '$lib/paraglide/runtime';
import { error } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { publications } from '$lib/data/publications';

export const load = async ({ params }: ServerLoadEvent) => {
	try {
		const locale = getLocale();
		const publication = await import(`../../../../posts/projects/${params.slug}.${locale}.md`);

		// Find the full publication metadata from publications.ts
		const publicationMeta = publications.find((pub) => pub.slug === params.slug);

		if (!publicationMeta) {
			throw error(404, `Publication metadata not found for ${params.slug}`);
		}

		return {
			content: publication.default,
			meta: publicationMeta
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
};

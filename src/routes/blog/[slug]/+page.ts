import { getLocale } from '$lib/paraglide/runtime';
import { error } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const load = async ({ params }: ServerLoadEvent) => {
	try {
		const locale = getLocale();
		const post = await import(`../../../posts/${params.slug}.${locale}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
};

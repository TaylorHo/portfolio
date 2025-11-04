import * as sitemap from 'super-sitemap';
import { error, type RequestHandler } from '@sveltejs/kit';
import type { Post } from '$lib/models/blog';
import { publications } from '$lib/data/publications';
import { locales, baseLocale } from '$lib/paraglide/runtime';

export const GET: RequestHandler = async ({ fetch }) => {
	let posts: Post[];

	try {
		const response = await fetch('/api/posts');
		posts = await response.json();
	} catch (err) {
		throw error(500, 'Could not load data for param values.');
	}

	const result = await sitemap.response({
		origin: 'https://hoffmann.io',
		paramValues: {
			'/[[lang]]/blog/[slug]': posts.map((post) => post.slug ?? ''),
			'/[[lang]]/publications/[slug]': publications
				.filter((publication) => publication.slug)
				.map((publication) => publication.slug ?? '')
		},
		lang: {
			default: baseLocale,
			alternates: locales.filter((locale) => locale !== baseLocale)
		}
	});

	return result;
};

export const prerender = true;

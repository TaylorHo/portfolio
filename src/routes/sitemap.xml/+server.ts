import * as sitemap from 'super-sitemap';
import { error, type RequestHandler } from '@sveltejs/kit';
import type { Post } from '$lib/models/blog';
import { publications } from '$lib/data/publications';
import { locales, baseLocale } from '$lib/paraglide/runtime';
import { personalInfo } from '$lib/data/personal';

export const GET: RequestHandler = async ({ fetch }) => {
	let posts: Post[];

	try {
		const response = await fetch('/api/posts');
		posts = await response.json();
	} catch (err) {
		throw error(500, 'Could not load data for param values.');
	}

	const original = await sitemap.response({
		origin: personalInfo.url,
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

	// Get the sitemap XML as a string
	let xml = await original.text();

	// Modify the XML however you like
	xml = xml.replaceAll('http://', 'https://');

	// Return your modified version
	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};

export const prerender = true;

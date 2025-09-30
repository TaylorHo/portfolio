import type { Post } from '$lib/models/blog';
import { getLocale } from '$lib/paraglide/runtime';
import type { ServerLoadEvent } from '@sveltejs/kit';

export async function load({ fetch }: ServerLoadEvent) {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();

	// filter posts by locale
	const locale = getLocale();
	const filteredPosts = posts.filter((post) => post.locale === locale);

	return { posts: filteredPosts };
}

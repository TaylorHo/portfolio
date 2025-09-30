import { locales } from '$lib/paraglide/runtime';

export interface Post {
	title: string;
	slug: string;
	description: string;
	image?: string;
	date: string;
	categories: string[];
	published: boolean;
	locale?: (typeof locales)[number];
}

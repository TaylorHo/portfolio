export interface Post {
	title: string;
	slug: string;
	description: string;
	image?: string;
	date: string;
	categories: string[];
	published: boolean;
}

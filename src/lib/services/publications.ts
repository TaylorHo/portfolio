import { m } from '$lib/paraglide/messages';

export function getTypeTitle(type: string, plural: boolean = false): string {
	switch (type) {
		case 'article':
			return plural ? m.publication_type_article_plural() : m.publication_type_article();
		case 'book':
			return plural ? m.publication_type_book_plural() : m.publication_type_book();
		case 'conference':
			return plural ? m.publication_type_conference_plural() : m.publication_type_conference();
		default:
			return type.charAt(0).toUpperCase() + type.slice(1);
	}
}

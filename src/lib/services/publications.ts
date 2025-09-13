import { m } from '$lib/paraglide/messages';

export function getTypeTitle(type: string): string {
	switch (type) {
		case 'article':
			return m.publication_type_article();
		case 'book':
			return m.publication_type_book();
		case 'conference':
			return m.publication_type_conference();
		default:
			return type.charAt(0).toUpperCase() + type.slice(1);
	}
}

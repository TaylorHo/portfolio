import type { Publication } from '../models/publication';
import { m } from '$lib/paraglide/messages';

export const publications: Publication[] = [
	{
		title: m.publications_security_book_title(),
		authors: ['Taylor Hoffmann'],
		year: 2024,
		venue: m.publications_security_book_publisher(),
		type: 'book',
		abstract: m.publications_security_book_description(),
		doi: '10.5281/zenodo.16739985',
		url: 'https://zenodo.org/records/16739985',
		purchaseLink: 'https://loja.uiclap.com/titulo/ua56412/',
		tags: []
	},
	{
		title: m.publications_kiwix_article_title(),
		authors: ['Taylor Hoffmann'],
		year: 2025,
		venue: m.publications_kiwix_article_publisher(),
		type: 'article',
		abstract: m.publications_kiwix_article_description(),
		// doi: '',
		// url: 'https://seer.ufrgs.br/index.php/InfEducTeoriaPratica/index',
		tags: []
	}
];

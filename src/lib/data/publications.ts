import type { Publication } from '../models/publication';
import { m } from '$lib/paraglide/messages';

export const publications: Publication[] = [
	{
		slug: 'security-book',
		title: m.publications_security_book_title(),
		authors: ['Taylor Hoffmann'],
		publishedDate: '2024-05-14',
		publisher: 'Uiclap',
		type: 'book',
		abstract: m.publications_security_book_description(),
		doi: '10.5281/zenodo.16739985',
		url: 'https://zenodo.org/records/16739985',
		purchaseLink: 'https://loja.uiclap.com/titulo/ua56412/',
		keywords: [],
		isbn: '978-65-01-02867-5',
		pages: 68,
		language: m.language_portuguese()
	},
	{
		slug: undefined, // No slug = no detail page
		title: m.publications_kiwix_article_title(),
		authors: ['Taylor Hoffmann'],
		publishedDate: '2025-01-01', // TODO: Add publishing date
		publisher: 'Revista Informática na educação | UFRGS',
		type: 'article',
		abstract: m.publications_kiwix_article_description(),
		// doi: '',
		// url: 'https://seer.ufrgs.br/index.php/InfEducTeoriaPratica/index',
		keywords: [],
		language: m.language_portuguese()
	}
];

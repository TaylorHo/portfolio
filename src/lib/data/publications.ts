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
		slug: 'kiwix-as-a-digital-inclusion-tool',
		title: m.publications_kiwix_article_title(),
		authors: ['Taylor Hoffmann'],
		publishedDate: '2026-02-06',
		publisher: 'Revista Informática na educação | UFRGS',
		type: 'article',
		abstract: m.publications_kiwix_article_description(),
		// doi: '',
		url: 'https://seer.ufrgs.br/index.php/InfEducTeoriaPratica/article/view/143926',
		keywords: ['Inclusão digital', 'Conectividade', 'Educação digital', 'Tecnologias educacionais'],
		language: m.language_portuguese(),
		issn: '1982-1654',
		pages: 19,
		volume: 28,
		issue: 2
	}
];

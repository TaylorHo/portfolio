import type { Publication } from '../models/publication';

export const publications: Publication[] = [
	{
		id: 'publication-01',
		title: 'Example publication 01',
		authors: ['Taylor Hoffmann'],
		year: 2024,
		venue: 'Place 01',
		type: 'article',
		abstract:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		doi: '10.1016/j.jcp.2024.001',
		url: 'https://example.com/',
		tags: ['tag1', 'tag2', 'tag3']
	},
	{
		id: 'publication-02',
		title: 'Example publication 02',
		authors: ['Taylor Hoffmann'],
		year: 2023,
		venue: 'Place 02',
		type: 'book',
		abstract:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		url: 'https://example.com/',
		tags: ['tag1', 'tag2', 'tag3'],
		purchaseLink: 'https://example.com/'
	},
	{
		id: 'publication-03',
		title: 'Example publication 03',
		authors: ['Taylor Hoffmann'],
		year: 2023,
		venue: 'Place 03',
		type: 'conference',
		abstract:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
		url: 'https://example.com/',
		tags: ['tag1', 'tag2', 'tag3']
	}
];

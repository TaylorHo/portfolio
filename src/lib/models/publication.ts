export type PublicationType = 'article' | 'book' | 'conference';

export interface Publication {
	title: string;
	authors: string[];
	publishedDate: string; // Full date in ISO format (YYYY-MM-DD)
	type: PublicationType;
	abstract?: string;
	doi?: string;
	url?: string;
	pdf?: string;
	keywords?: string[];
	purchaseLink?: string;
	slug?: string; // No slug = no detail page
	publisher?: string; // Or Venue (publication "place") for conferences
	isbn?: string;
	issn?: string;
	pages?: string | number;
	volume?: string | number;
	issue?: string | number;
	language?: string;
}

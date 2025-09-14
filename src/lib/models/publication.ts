export interface Publication {
	title: string;
	authors: string[];
	year: number;
	venue: string;
	type: 'article' | 'book' | 'conference';
	abstract?: string;
	doi?: string;
	url?: string;
	pdf?: string;
	tags?: string[];
	purchaseLink?: string;
}

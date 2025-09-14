export interface Conference {
	title: string;
	organizer: string;
	year: number;
	venue?: string;
	description?: string;
	type: 'conference' | 'talk' | 'workshop' | 'webinar';
}

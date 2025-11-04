export type ConferenceType = 'conference' | 'talk' | 'workshop' | 'webinar';

export interface Conference {
	title: string;
	organizer: string;
	year: number;
	venue?: string;
	description?: string;
	type: ConferenceType;
}

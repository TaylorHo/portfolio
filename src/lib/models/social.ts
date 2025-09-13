export interface SocialLink {
	name: string;
	url: string;
	icon: string;
	iconSize: number;
	label: string;
}

export interface PersonalInfo {
	name: string;
	title: string;
	bio: string;
	location: string;
	email: string;
	socialLinks: SocialLink[];
}

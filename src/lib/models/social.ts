import type { Component } from 'svelte';

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
	iconSize: number;
	label: string;
}

export interface FooterLink {
	name: string;
	url: string;
	icon?: Component;
	svg?: string;
	label: string;
}

export interface PersonalInfo {
	name: string;
	url: string;
	title: string;
	bio: string;
	location: string;
	email: string;
	featuredLinks: SocialLink[];
	footerLinks: FooterLink[];
}

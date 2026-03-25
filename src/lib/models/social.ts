import type { Component } from 'svelte';

interface BaseLink {
	name: string;
	url: string;
	iconSize: number;
	label: string;
}

export interface SocialLink extends BaseLink {
	icon: string;
}

export interface FooterLink extends BaseLink {
	icon?: Component;
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

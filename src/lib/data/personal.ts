import { m } from '$lib/paraglide/messages';
import { Github, Instagram, Linkedin } from '@lucide/svelte';
import type { PersonalInfo } from '../models/social';

export const personalInfo: PersonalInfo = {
	name: 'Taylor Hoffmann',
	url: 'https://hoffmann.io',
	title: m.profile_title(),
	bio: m.profile_bio(),
	location: m.profile_location(),
	email: 'taylor@hoffmann.io',
	featuredLinks: [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/hoffmann-taylor/',
			icon: 'linkedin.webp',
			iconSize: 18,
			label: m.profile_name({ social: 'LinkedIn' })
		},
		{
			name: 'GitHub',
			url: 'https://github.com/TaylorHo',
			icon: 'github.webp',
			iconSize: 20,
			label: m.profile_name({ social: 'GitHub' })
		},
		{
			name: 'Lattes',
			url: 'https://lattes.cnpq.br/8033491399693302',
			icon: 'lattes.webp',
			iconSize: 18,
			label: m.profile_name({ social: 'Lattes' })
		},
		{
			name: 'ORCID',
			url: 'https://orcid.org/0000-0002-8418-514X',
			icon: 'orcid.webp',
			iconSize: 18,
			label: m.profile_name({ social: 'ORCID' })
		}
	],
	footerLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/TaylorHo',
			icon: Github,
			label: m.profile_name({ social: 'GitHub' })
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/hoffmann-taylor/',
			icon: Linkedin,
			label: m.profile_name({ social: 'LinkedIn' })
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/hoffmann_taylor/',
			icon: Instagram,
			label: m.profile_name({ social: 'Instagram' })
		}
	]
};

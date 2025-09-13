import type { PersonalInfo } from '../models/social';

export const personalInfo: PersonalInfo = {
	name: 'Taylor Hoffmann',
	title: 'Physicist, Software Engineer & Researcher',
	bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
	location: 'Rio Grande do Sul, Brasil',
	email: 'taylor@hotay.dev',
	socialLinks: [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/hoffmann-taylor/',
			icon: 'linkedin.webp',
			iconSize: 18,
			label: 'Professional Profile'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/TaylorHo',
			icon: 'github.webp',
			iconSize: 20,
			label: 'Code Portfolio'
		},
		{
			name: 'Lattes',
			url: 'http://lattes.cnpq.br/8033491399693302',
			icon: 'lattes.webp',
			iconSize: 18,
			label: 'Academic CV'
		},
		{
			name: 'ORCID',
			url: 'https://orcid.org/0000-0002-8418-514X',
			icon: 'orcid.webp',
			iconSize: 18,
			label: 'Research Profile'
		}
	]
};

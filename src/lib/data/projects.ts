import type { Project } from '../models/project';

export const projects: Project[] = [
	{
		title: 'Project 01',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
		technologies: ['tech1', 'tech2', 'tech3', 'tech4', 'tech5'],
		year: 2024,
		type: 'library',
		status: 'active',
		githubUrl: 'https://example.com',
		demoUrl: 'https://example.com',
		doi: '10.1000/182',
		featured: true
	}
];

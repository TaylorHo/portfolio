import type { Project } from '../models/project';

export const projects: Project[] = [
	{
		id: 'project-01',
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
	},
	{
		id: 'project-02',
		title: 'Project 02',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
		technologies: ['tech1', 'tech2', 'tech3', 'tech4', 'tech5'],
		year: 2023,
		type: 'web',
		status: 'completed',
		githubUrl: 'https://example.com',
		demoUrl: 'https://example.com',
		doi: '10.1000/182',
		featured: true
	},
	{
		id: 'project-03',
		title: 'Project 03',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
		technologies: ['tech1', 'tech2', 'tech3', 'tech4', 'tech5'],
		year: 2023,
		type: 'web',
		status: 'completed',
		githubUrl: 'https://example.com',
		demoUrl: 'https://example.com',
		doi: '10.1000/182'
	},
	{
		id: 'project-04',
		title: 'Project 04',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
		technologies: ['tech1', 'tech2', 'tech3', 'tech4', 'tech5'],
		year: 2022,
		type: 'mobile',
		status: 'completed',
		githubUrl: 'https://example.com',
		demoUrl: 'https://example.com',
		doi: '10.1000/182'
	},
	{
		id: 'project-05',
		title: 'Project 05',
		description:
			'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
		technologies: ['tech1', 'tech2', 'tech3', 'tech4', 'tech5'],
		year: 2022,
		type: 'research',
		status: 'completed',
		githubUrl: 'https://example.com',
		demoUrl: 'https://example.com',
		doi: '10.1000/182'
	},
	{
		id: 'project-06',
		title: 'Project 06',
		description:
			'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
		technologies: ['tech1', 'tech2', 'tech3', 'tech4', 'tech5'],
		year: 2021,
		type: 'desktop',
		status: 'archived',
		githubUrl: 'https://example.com',
		demoUrl: 'https://example.com',
		doi: '10.1000/182'
	}
];

import type { Resume } from '../models/resume';

export const resume: Resume = {
	workExperience: [
		{
			id: 'work-experience-01',
			title: 'Title 01',
			company: 'Company 01',
			location: 'Location 01',
			startDate: '2022-06',
			description: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
				'Ut labore et dolore magna aliqua, enim ad minim veniam quis nostrud exercitation',
				'Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor',
				'In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
			],
			projects: [
				{
					id: 'project-01',
					title: 'Project 01',
					description: ['Description 01', 'Description 02', 'Description 03', 'Description 04'],
					technologies: ['tech1', 'tech2', 'tech3', 'tech4', 'tech5']
				},
				{
					id: 'project-02',
					title: 'Project 02',
					description: ['Description 01', 'Description 02', 'Description 03', 'Description 04'],
					technologies: ['tech1', 'tech2', 'tech3', 'tech4', 'tech5', 'tech6', 'tech7']
				}
			]
		},
		{
			id: 'work-experience-02',
			title: 'Title 02',
			company: 'Company 02',
			location: 'Location 02',
			startDate: '2021-01',
			endDate: '2022-05',
			description: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
			],
			projects: []
		},
		{
			id: 'work-experience-03',
			title: 'Title 03',
			company: 'Company 03',
			location: 'Location 03',
			startDate: '2019-08',
			endDate: '2020-12',
			description: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
				'Ut labore et dolore magna aliqua, enim ad minim veniam quis nostrud exercitation',
				'Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor',
				'In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
			],
			projects: []
		}
	],
	education: [
		{
			id: 'education-01',
			degree: 'Degree 01',
			institution: 'Institution 01',
			location: 'Location 01',
			startDate: '2017-09',
			endDate: '2021-12',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
			thesis: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
			gpa: 'x.x/x.x'
		},
		{
			id: 'education-02',
			degree: 'Degree 02',
			institution: 'Institution 02',
			location: 'Location 02',
			startDate: '2015-09',
			endDate: '2017-06',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
			gpa: 'x.x/x.x'
		},
		{
			id: 'education-03',
			degree: 'Degree 03',
			institution: 'Institution 03',
			location: 'Location 03',
			startDate: '2011-09',
			endDate: '2015-06',
			description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
			gpa: 'x.x/x.x'
		}
	],
	extraCapacitation: [
		{
			id: 'certification-01',
			title: 'Certification 01',
			institution: 'Institution 01',
			completionDate: '2023-11',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
			credentialUrl: 'https://example.com'
		},
		{
			id: 'certification-02',
			title: 'Certification 02',
			institution: 'Institution 02',
			completionDate: '2023-08',
			description: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi',
			credentialUrl: 'https://example.com'
		}
	]
};

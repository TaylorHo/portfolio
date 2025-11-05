import { m } from '$lib/paraglide/messages';
import type { Project } from '../models/project';

export const projects: Project[] = [
	// {
	// 	title: 'Image Hash Linker',
	// 	description: m.projects_image_hash_linker_description(),
	// 	technologies: ['Rust', 'Hash', m.projects_tag_image_processing()],
	// 	year: 2025,
	// 	type: 'library',
	// 	status: 'maintained',
	// 	githubUrl: 'https://github.com/TaylorHo/img-hash-linker'
	// },
	// {
	// 	title: 'Econflux',
	// 	description: m.projects_econflux_description(),
	// 	technologies: [
	// 		m.projects_tag_physics(),
	// 		'Rust',
	// 		m.projects_tag_economics_physics(),
	// 		m.projects_tag_simulation(),
	// 		'Monte Carlo'
	// 	],
	// 	year: 2025,
	// 	type: 'library',
	// 	status: 'maintained',
	// 	githubUrl: 'https://github.com/TaylorHo/econflux'
	// },
	{
		title: 'Goals Tracker',
		description: m.projects_goals_tracker_description(),
		technologies: ['Svelte', m.projects_tag_productivity()],
		year: 2025,
		type: 'web',
		status: 'maintained',
		githubUrl: 'https://github.com/TaylorHo/goals',
		demoUrl: 'https://goals.hotay.dev'
	},
	{
		title: 'audit-export',
		description: m.projects_audit_export_description(),
		technologies: ['Node.js', m.projects_tag_security(), 'CLI'],
		year: 2024,
		type: 'library',
		status: 'maintained',
		githubUrl: 'https://github.com/TaylorHo/audit-export/',
		demoUrl: 'https://www.npmjs.com/package/audit-export'
	},
	{
		title: 'Avalia',
		description: m.projects_avalia_description(),
		technologies: ['Next.js', m.projects_tag_science()],
		year: 2024,
		type: 'web',
		status: 'maintained',
		githubUrl: 'https://github.com/TaylorHo/avalia',
		demoUrl: 'https://avalia.hotay.dev/docs/index.html',
		featured: true
	},
	{
		title: 'D&D Beyond Kit',
		description: m.projects_dnd_beyond_kit_description(),
		technologies: [m.projects_tag_extension(), 'RPG'],
		year: 2024,
		type: 'web',
		status: 'maintained',
		githubUrl: 'https://github.com/hotaydev/dnd-beyond-kit',
		demoUrl: 'https://dnd-beyond-kit.hotay.dev/'
	},
	{
		title: 'enygmah',
		description: m.projects_enygmah_description(),
		technologies: ['Rust', m.projects_tag_security(), 'CLI'],
		year: 2024,
		type: 'library',
		status: 'maintained',
		githubUrl: 'https://github.com/TaylorHo/enygmah'
	},
	{
		title: 'YouTube Shorts Blocker',
		description: m.projects_youtube_shorts_blocker_description(),
		technologies: [m.projects_tag_extension(), m.projects_tag_productivity()],
		year: 2024,
		type: 'web',
		status: 'maintained',
		githubUrl: 'https://github.com/TaylorHo/youtube-shorts-blocker',
		demoUrl:
			'https://chromewebstore.google.com/detail/youtube-shorts-blocker/jchbbofddpgfbaheknainnhbdonkpogf'
	}
];

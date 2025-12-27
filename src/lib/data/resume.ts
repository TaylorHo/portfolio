import { m } from '$lib/paraglide/messages';
import type { Resume } from '../models/resume';

export const resume: Resume = {
	workExperience: [
		{
			title: m.resume_experience_certi_researcher_current_title(),
			company: 'Fundação CERTI',
			location: m.resume_experience_certi_researcher_current_location(),
			startDate: '2024-11',
			description: [],
			projects: [
				{
					title: m.resume_experience_certi_researcher_current_project_0_title(),
					description: [
						m.resume_experience_certi_researcher_current_project_0_description_0(),
						m.resume_experience_certi_researcher_current_project_0_description_1(),
						m.resume_experience_certi_researcher_current_project_0_description_2(),
						m.resume_experience_certi_researcher_current_project_0_description_3()
					],
					tags: ['CT Scanner', 'DICOM', 'Rust', 'OHIF', 'Node.js']
				},
				{
					title: m.resume_experience_certi_researcher_current_project_1_title(),
					description: [
						m.resume_experience_certi_researcher_current_project_1_description_0(),
						m.resume_experience_certi_researcher_current_project_1_description_1(),
						m.resume_experience_certi_researcher_current_project_1_description_2(),
						m.resume_experience_certi_researcher_current_project_1_description_3(),
						m.resume_experience_certi_researcher_current_project_1_description_4()
					],
					tags: [
						'OpenBIM',
						'IFC',
						'Blender',
						'FreeCAD',
						'GeoBIM',
						'webGIS',
						'ArcGIS',
						'Python',
						'Node.js'
					]
				}
			]
		},
		{
			title: m.resume_experience_nike_security_consultant_title(),
			company: 'Nike do Brasil + Universidade Cruzeiro do Sul',
			location: m.resume_experience_nike_security_consultant_location(),
			startDate: '2024-02',
			endDate: '2024-11',
			description: [m.resume_experience_nike_security_consultant_description()],
			projects: []
		},
		{
			title: m.resume_experience_certi_researcher_previous_title(),
			company: 'Fundação CERTI',
			location: m.resume_experience_certi_researcher_previous_location(),
			startDate: '2022-06',
			endDate: '2024-02',
			description: [],
			projects: [
				{
					title: m.resume_experience_certi_researcher_previous_project_0_title(),
					description: [
						m.resume_experience_certi_researcher_previous_project_0_description_0(),
						m.resume_experience_certi_researcher_previous_project_0_description_1(),
						m.resume_experience_certi_researcher_previous_project_0_description_2(),
						m.resume_experience_certi_researcher_previous_project_0_description_3(),
						m.resume_experience_certi_researcher_previous_project_0_description_4()
					],
					tags: ['Time Series', 'Hardware', 'Monitoring', 'Node.js', 'Energy efficiency']
				},
				{
					title: m.resume_experience_certi_researcher_previous_project_1_title(),
					description: [
						m.resume_experience_certi_researcher_previous_project_1_description_0(),
						m.resume_experience_certi_researcher_previous_project_1_description_1(),
						m.resume_experience_certi_researcher_previous_project_1_description_2(),
						m.resume_experience_certi_researcher_previous_project_1_description_3(),
						m.resume_experience_certi_researcher_previous_project_1_description_4(),
						m.resume_experience_certi_researcher_previous_project_1_description_5()
					],
					tags: [
						'Flutter',
						'Node.js',
						'Offline Data sync',
						'Augmented Reality',
						'Naval engineering'
					]
				},
				{
					title: m.resume_experience_certi_researcher_previous_project_2_title(),
					description: [
						m.resume_experience_certi_researcher_previous_project_2_description_0(),
						m.resume_experience_certi_researcher_previous_project_2_description_1(),
						m.resume_experience_certi_researcher_previous_project_2_description_2(),
						m.resume_experience_certi_researcher_previous_project_2_description_3(),
						m.resume_experience_certi_researcher_previous_project_2_description_4()
					],
					tags: ['Realtime', 'Node.js', 'Cloud', 'IFC', 'Naval engineering']
				}
			]
		},
		{
			title: m.resume_experience_unialcance_professor_title(),
			company: 'Unialcance',
			location: m.resume_experience_unialcance_professor_location(),
			startDate: '2022-09',
			endDate: '2023-08',
			description: [
				m.resume_experience_unialcance_professor_description_0(),
				m.resume_experience_unialcance_professor_description_1(),
				m.resume_experience_unialcance_professor_description_2(),
				m.resume_experience_unialcance_professor_description_3()
			],
			projects: []
		},
		{
			title: m.resume_experience_unialcance_engineer_title(),
			company: 'Unialcance',
			location: m.resume_experience_unialcance_engineer_location(),
			startDate: '2020-02',
			endDate: '2022-03',
			description: [
				m.resume_experience_unialcance_engineer_description_0(),
				m.resume_experience_unialcance_engineer_description_1(),
				m.resume_experience_unialcance_engineer_description_2(),
				m.resume_experience_unialcance_engineer_description_3(),
				m.resume_experience_unialcance_engineer_description_4(),
				m.resume_experience_unialcance_engineer_description_5()
			],
			tags: ['PHP', 'Node.js', 'Marketing', 'Gimp', 'Kdenlive', 'DaVinci Resolve'],
			projects: []
		}
	],
	education: [
		{
			degree: m.resume_education_physics_title(),
			institution: 'Universidade de Franca',
			location: m.resume_education_physics_location(),
			startDate: '2023-01',
			endDate: '2025-12',
			description: m.resume_education_physics_description(),
			gpa: '9.82/10.0'
		},
		{
			degree: m.resume_education_computer_science_title(),
			institution: 'Universidade Estácio',
			location: m.resume_education_computer_science_location(),
			startDate: '2023-01',
			endDate: '2026-06',
			description: m.resume_education_computer_science_description(),
			gpa: '9.79/10.0'
		}
		// {
		// 	degree: 'Especialização em Química',
		// 	institution: 'Faculdade de São Marcos',
		// 	location: 'São Marcos, Rio Grande do Sul, Brasil',
		// 	startDate: '2026',
		// 	endDate: '2026',
		// 	description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
		// },
		// {
		// 	degree: 'Especialização em Biotecnologia', // Ou Biologia Molecular
		// 	institution: 'Faculdade de São Marcos',
		// 	location: 'São Marcos, Rio Grande do Sul, Brasil',
		// 	startDate: '2026',
		// 	endDate: '2026',
		// 	description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
		// },
		// {
		// 	degree: 'Doutorado em Física',
		// 	institution: 'Universidade Federal do Rio Grande do Sul',
		// 	location: 'Porto Alegre, Rio Grande do Sul, Brasil',
		// 	startDate: '2026',
		// 	endDate: '2031',
		// 	description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
		// }
	],
	extraCapacitation: [
		{
			title: m.resume_extra_capacitation_radiotherapy(),
			institution: 'Centro de Oncologia - Faculdade Sírio-Libanês',
			completionDate: '2025-11',
			// description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
			credentialUrl: 'https://drive.google.com/file/d/1dj6n6gwiVeS8uOr9HeSd6RVLMqxpEId_/view'
		},
		{
			title: m.resume_extra_capacitation_open_science(),
			institution: 'NASA - National Aeronautics and Space Administration',
			completionDate: '2025-08',
			// description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
			credentialUrl: 'https://www.credly.com/badges/07f01202-c35c-43cd-a4c1-cad9e87a0aa1'
		},
		{
			title: m.resume_extra_capacitation_minimum_squares(),
			institution: 'SBF - Sociedade Brasileira de Física',
			completionDate: '2025-09',
			// description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
			credentialUrl:
				'https://sec.sbfisica.org.br/servicos/certificados/validaCertificadoWebMiniCurso.asp?curId=24&insId=9'
		},
		{
			title: m.resume_extra_capacitation_geant4(),
			institution: 'UFRN - Universidade Federal do Rio Grande do Norte',
			completionDate: '2024-10'
			// description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod'
		}
	]
};

import type { Resume } from '../models/resume';

export const resume: Resume = {
	workExperience: [
		{
			title: 'Pesquisador em Engenharia e Tecnologia',
			company: 'Fundação CERTI',
			location: 'Florianópolis, Santa Catarina, Brasil',
			startDate: '2024-11',
			description: [],
			projects: [
				{
					title: 'Simulação e Redução de Doses de Radiação em tomografia computadorizada',
					description: [],
					technologies: ['CT Scanner', 'DICOM', 'Rust', 'OHIF', 'Node.js']
				},
				{
					title: 'Extensão do padrão BIM para Sistemas Submarinos | Petrobras',
					description: [],
					technologies: [
						'OpenBIM',
						'IFC',
						'Blender',
						'FreeCAD',
						'GeoBIM',
						'webGIS',
						'ArcGIS',
						'Python',
						'Node.js',
						'Graph Store'
					]
				}
			]
		},
		{
			title: 'Consultor em Segurança de Aplicações',
			company: 'Nike do Brasil + Universidade Cruzeiro do Sul',
			location: 'São Paulo, Brasil',
			startDate: '2024-02',
			endDate: '2024-11',
			description: [],
			projects: []
		},
		{
			title: 'Pesquisador',
			company: 'Fundação CERTI',
			location: 'Florianópolis, Santa Catarina, Brasil',
			startDate: '2022-06',
			endDate: '2024-02',
			description: [],
			projects: [
				{
					title: 'Eficiência Energética | Labfaber',
					description: [],
					technologies: ['Time Series', 'Hardware', 'Monitoring', 'Node.js', 'Energy efficiency']
				},
				{
					title: 'Descomissionamento de Plataformas Marítimas | Petrobras',
					description: [],
					technologies: [
						'Flutter',
						'Node.js',
						'Offline Data sync',
						'Augmented Reality',
						'Naval engineering'
					]
				},
				{
					title: 'Digitalização de processos estruturais de plataformas marítimas | Petrobras',
					description: [],
					technologies: ['Realtime', 'Node.js', 'Cloud', 'IFC', 'Naval engineering']
				}
			]
		},
		{
			title: 'Professor de Programação',
			company: 'Unialcance',
			location: 'Rio Grande do Sul, Brasil',
			startDate: '2022-09',
			endDate: '2023-08',
			description: [],
			projects: []
		},
		{
			title: 'Engenheiro de Software',
			company: 'Unialcance',
			location: 'Rio Grande do Sul, Brasil',
			startDate: '2020-02',
			endDate: '2022-03',
			description: [],
			projects: []
		}
	],
	education: [
		{
			degree: 'Bacharelado em Física',
			institution: 'Universidade de Franca',
			location: 'Franca, São Paulo, Brasil',
			startDate: '2023-01',
			endDate: '2025-12',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
			gpa: '9.9/10.0'
		},
		{
			degree: 'Bacharelado em Ciência da Computação',
			institution: 'Universidade Estácio',
			location: 'Rio de Janeiro, Rio de Janeiro, Brasil',
			startDate: '2023-01',
			endDate: '2026-06',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
			gpa: '9.74/10.0'
		}
		// {
		// 	degree: 'Especialização em Biotecnologia',
		// 	institution: 'Universidade Estácio',
		// 	location: 'Rio de Janeiro, Rio de Janeiro, Brasil',
		// 	startDate: '2026',
		// 	endDate: '2027',
		// 	description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
		// },
		// {
		// 	degree: 'Doutorado em Física',
		// 	institution: 'Universidade Federal do Rio Grande do Sul',
		// 	location: 'Porto Alegre, Rio Grande do Sul, Brasil',
		// 	startDate: '2026',
		// 	endDate: '2030',
		// 	description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
		// }
	],
	extraCapacitation: [
		{
			title: 'Open Science 101',
			institution: 'NASA - National Aeronautics and Space Administration',
			completionDate: '2025-08',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
			credentialUrl: 'https://www.credly.com/badges/07f01202-c35c-43cd-a4c1-cad9e87a0aa1'
		},
		{
			title: 'Método dos Mínimos Quadrados – para cientistas experimentais',
			institution: 'SBF - Sociedade Brasileira de Física',
			completionDate: '2025-09',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
			credentialUrl:
				'https://sec.sbfisica.org.br/servicos/certificados/validaCertificadoWebMiniCurso.asp?curId=24&insId=9'
		},
		{
			title: 'GEANT4 e DMG4 - Introdução à Simulação de Monte Carlo',
			institution: 'UFRN - Universidade Federal do Rio Grande do Norte',
			completionDate: '2024-10',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod'
		}
	]
};

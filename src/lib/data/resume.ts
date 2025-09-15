import type { Resume } from '../models/resume';

// TODO: Translate content

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
					description: [
						'Desenvolvimento de sistema de simulação de doses de radiação em pacientes virtuais para otimização de qualidade de imagem',
						'Criação de aplicação multiplataforma (desktop e mobile) para interação direta com equipamentos de tomografia computadorizada',
						'Implementação de renderização de imagens simuladas com OHIF e DICOM baseada em estimativas de dose de radiação',
						'Desenvolvimento de sistema de avaliação de qualidade de imagem correlacionada com dose de radiação recebida pelo paciente'
					],
					tags: ['CT Scanner', 'DICOM', 'Rust', 'OHIF', 'Node.js']
				},
				{
					title: 'Extensão do padrão BIM para Sistemas Submarinos | Petrobras',
					description: [
						'Extensão do padrão IFC via OpenBIM para suporte a estruturas submarinas de extração de petróleo em softwares BIM',
						'Desenvolvimento de simulações de estruturas submarinas utilizando Blender e FreeCAD',
						'Implementação de algoritmos de Machine Learning para detecção de falhas estruturais em estruturas submarinas',
						'Realização de análises geográficas de estruturas submarinas e litorâneas com ArcGIS',
						'Integração de conhecimentos multidisciplinares: engenharia naval, software, modelagem 3D e simulação física submarina'
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
			title: 'Consultor em Segurança de Aplicações',
			company: 'Nike do Brasil + Universidade Cruzeiro do Sul',
			location: 'São Paulo, Brasil',
			startDate: '2024-02',
			endDate: '2024-11',
			description: [
				'Aplicação de conhecimentos e certificações em segurança de aplicações para implementação de medidas de segurança, resolução de problemas críticos, automação de processos, testes de segurança e conscientização corporativa. Após período focado exclusivamente em segurança de grandes empresas, optei por retornar à Fundação CERTI buscando um ambiente mais inovador e desafiador, onde pudesse contribuir com pesquisa e desenvolvimento de soluções que impactem positivamente número maior de pessoas através da inovação tecnológica.'
			],
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
					description: [
						'Desenvolvimento de software de monitoramento de consumo energético para setores industriais',
						'Implementação de análises avançadas para identificação de desperdícios de energia',
						'Criação de sistema de suporte a séries temporais para recebimento de dados de equipamentos',
						'Desenvolvimento de hardware de coleta automática de dados para as séries temporais',
						'Implementação de monitoramento contínuo e sistema de alertas para detecção de problemas'
					],
					tags: ['Time Series', 'Hardware', 'Monitoring', 'Node.js', 'Energy efficiency']
				},
				{
					title: 'Comissionamento de Plataformas Marítimas | Petrobras',
					description: [
						'Desenvolvimento de software de comissionamento para verificação de integridade de estruturas e equipamentos de plataformas marítimas',
						'Implementação de validação completa desde equipamentos individuais até sistemas de segurança da plataforma',
						'Criação de sistema offline com sincronização automática resiliente a interrupções de conectividade',
						'Desenvolvimento de interface mobile otimizada para uso com equipamentos de proteção (luvas e capacetes)',
						'Implementação de sistema de geolocalização interna para otimização de rotas de coleta de evidências',
						'Gestão de sincronização de altos volumes de dados de evidências coletadas em mídias digitais'
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
					title: 'Digitalização de processos de engenharia de plataformas marítimas | Petrobras',
					description: [
						'Desenvolvimento de software para digitalização dos processos de gestão da construção de plataformas marítimas',
						'Implementação de sistema para suporte a todas as etapas de definição e aprovações do processo construtivo',
						'Criação de fluxo digital eficiente para otimização dos processos de engenharia naval',
						'Integração com estruturas IFC para visualização das estruturas da plataforma',
						'Desenvolvimento de sistema de gestão integrada entre contratante e empresas construtoras'
					],
					tags: ['Realtime', 'Node.js', 'Cloud', 'IFC', 'Naval engineering']
				}
			]
		},
		{
			title: 'Professor de Programação',
			company: 'Unialcance',
			location: 'Rio Grande do Sul, Brasil',
			startDate: '2022-09',
			endDate: '2023-08',
			description: [
				'Ensino de fundamentos e lógica de programação para 3 turmas com 10 a 20 alunos cada',
				'Desenvolvimento de metodologia didática para introdução à programação web',
				'Orientação de projetos finais focados no desenvolvimento de e-commerce simples com tecnologias web',
				'Acompanhamento individual do progresso dos alunos e adaptação do conteúdo às necessidades da turma'
			],
			projects: []
		},
		{
			title: 'Engenheiro de Software',
			company: 'Unialcance',
			location: 'Rio Grande do Sul, Brasil',
			startDate: '2020-02',
			endDate: '2022-03',
			description: [
				'Progressão do estágio à contratação e posterior cargo de gestão de área',
				'Desenvolvimento de sistemas de software internos para modernização de processos empresariais',
				'Implementação de automações e relatórios dinâmicos para gestão de negócio e vendas',
				'Colaboração próxima com equipe de marketing, adquirindo experiência em edição de imagens e vídeos',
				'Desenvolvimento de habilidades em escrita criativa e comunicação visual',
				'Implementação de soluções utilizando principalmente PHP e Node.js'
			],
			tags: ['PHP', 'Node.js', 'Marketing', 'Gimp', 'Kdenlive', 'DaVinci Resolve'],
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
			description:
				'Especialização em física computacional, física estatística e aplicações em física nuclear e de partículas',
			gpa: '9.92/10.0'
		},
		{
			degree: 'Bacharelado em Ciência da Computação',
			institution: 'Universidade Estácio',
			location: 'Rio de Janeiro, Rio de Janeiro, Brasil',
			startDate: '2023-01',
			endDate: '2026-06',
			description:
				'Formação complementar em computação de baixo nível para desenvolvimento de dispositivos inovadores de processamento de dados integrados com física',
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
			// description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
			credentialUrl: 'https://www.credly.com/badges/07f01202-c35c-43cd-a4c1-cad9e87a0aa1'
		},
		{
			title: 'Método dos Mínimos Quadrados – para cientistas experimentais',
			institution: 'SBF - Sociedade Brasileira de Física',
			completionDate: '2025-09',
			// description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
			credentialUrl:
				'https://sec.sbfisica.org.br/servicos/certificados/validaCertificadoWebMiniCurso.asp?curId=24&insId=9'
		},
		{
			title: 'GEANT4 e DMG4 - Introdução à Simulação de Monte Carlo',
			institution: 'UFRN - Universidade Federal do Rio Grande do Norte',
			completionDate: '2024-10'
			// description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod'
		}
	]
};

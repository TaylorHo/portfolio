import type { Project } from '../models/project';

// TODO: Translate content

export const projects: Project[] = [
	{
		title: 'Arcana Pixel',
		description:
			'Mesa virtual open source para RPGs com suporte nativo a Ordem Paranormal, D&D, Cthulhu e Tormenta. Interface moderna com todas as ferramentas e automações necessárias.',
		technologies: ['Rust', 'Svelte', 'RPG'],
		year: 2025,
		type: 'web',
		status: 'active',
		githubUrl: 'https://github.com/hotaydev/arcana-pixel',
		demoUrl: 'https://www.arcanapixel.com/',
		featured: true
	},
	{
		title: 'Image Hash Linker',
		description:
			'Biblioteca para adicionar um link à uma imagem através de mecanismo de hash e tabela de referência. Está para sair um artigo explicando melhor o mecanismo.',
		technologies: ['Rust', 'Hash', 'Processamento de Imagens'],
		year: 2025,
		type: 'library',
		status: 'active',
		githubUrl: 'https://github.com/TaylorHo/img-hash-linker'
	},
	{
		title: 'Econflux',
		description:
			'Biblioteca Rust para simulações de física econômica com agentes, eventos probabilísticos e análise de cenários usando métodos Monte Carlo.',
		technologies: ['Física', 'Rust', 'Física Econômica', 'Simulação', 'Monte Carlo'],
		year: 2025,
		type: 'library',
		status: 'active',
		githubUrl: 'https://github.com/TaylorHo/econflux'
	},
	{
		title: 'Goals Tracker',
		description:
			'Aplicativo web para gerenciar e acompanhar metas de longo prazo com visualização de progresso, marcos e estatísticas detalhadas.',
		technologies: ['Svelte', 'Produtividade'],
		year: 2025,
		type: 'web',
		status: 'active',
		githubUrl: 'https://github.com/hotaydev/goals',
		demoUrl: 'https://goals.hotay.dev'
	},
	{
		title: 'audit-export',
		description:
			'CLI que converte resultados do npm audit em relatórios HTML interativos para melhor visualização de vulnerabilidades de segurança.',
		technologies: ['Node.js', 'Segurança', 'CLI'],
		year: 2024,
		type: 'library',
		status: 'active',
		githubUrl: 'https://github.com/hotaydev/audit-export/',
		demoUrl: 'https://www.npmjs.com/package/audit-export'
	},
	{
		title: 'Avalia',
		description:
			'Plataforma completa para avaliação digital de trabalhos em feiras de iniciação científica, com critérios customizáveis e relatórios automatizados.',
		technologies: ['Next.js', 'Ciência'],
		year: 2024,
		type: 'web',
		status: 'completed',
		githubUrl: 'https://github.com/hotaydev/avalia',
		demoUrl: 'https://avalia.hotay.dev/docs/index.html',
		featured: true
	},
	{
		title: 'D&D Beyond Kit',
		description:
			'Extensão para traduzir fichas de personagens no D&D Beyond e adicionar novas funcionalidades, disponível para Chrome e Firefox.',
		technologies: ['Extensão', 'RPG'],
		year: 2024,
		type: 'web',
		status: 'completed',
		githubUrl: 'https://github.com/hotaydev/dnd-beyond-kit',
		demoUrl: 'https://dnd-beyond-kit.hotay.dev/'
	},
	{
		title: 'enygmah',
		description:
			'CLI unificada para análises de segurança automatizadas com relatórios completos. Suporta web apps, mobile, APIs e containers Docker.',
		technologies: ['Rust', 'Segurança', 'CLI'],
		year: 2024,
		type: 'library',
		status: 'completed',
		githubUrl: 'https://github.com/hotaydev/enygmah'
	},
	{
		title: 'YouTube Shorts Blocker',
		description:
			'Extensão para remover os Shorts da interface do YouTube, evitando distrações e perda de tempo. Disponível para Chrome e Firefox.',
		technologies: ['Extensão', 'Produtividade'],
		year: 2024,
		type: 'web',
		status: 'completed',
		githubUrl: 'https://github.com/hotaydev/youtube-shorts-blocker',
		demoUrl:
			'https://chromewebstore.google.com/detail/youtube-shorts-blocker/jchbbofddpgfbaheknainnhbdonkpogf'
	}
];

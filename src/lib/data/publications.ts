import type { Publication } from '../models/publication';

// TODO: Translate content

export const publications: Publication[] = [
	{
		title: 'Segurança de Aplicações para Desenvolvedores',
		authors: ['Taylor Hoffmann'],
		year: 2024,
		venue: 'Uiclap',
		type: 'book',
		abstract:
			'Guia prático que apresenta, de forma simples e objetiva, como desenvolvedores podem aplicar segurança ao ciclo de vida do software, integrando-a à esteira de Integração Contínua e aprendendo a corrigir vulnerabilidades de forma eficaz.',
		doi: '10.5281/zenodo.16739985',
		url: 'https://zenodo.org/records/16739985',
		purchaseLink: 'https://loja.uiclap.com/titulo/ua56412/',
		tags: []
	},
	{
		title: 'Kiwix como instrumento de inclusão digital',
		authors: ['Taylor Hoffmann'],
		year: 2025,
		venue: 'Revista Informática na educação | UFRGS',
		type: 'article',
		abstract:
			'Aceito, ainda não publicado. Em 2022, 58,8% das escolas públicas brasileiras tinham internet instável e 20,4% não tinham acesso. Este trabalho mostra como o Kiwix, ferramenta de software livre, pode levar conteúdos educacionais a essas escolas de forma prática e barata, beneficiando cerca de 70% das escolas brasileiras com acesso restrito ou inexistente, auxiliando na inclusão digital.',
		// doi: '',
		// url: 'https://seer.ufrgs.br/index.php/InfEducTeoriaPratica/index',
		tags: []
	}
];

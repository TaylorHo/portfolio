const siteMetadata = {
	title: "Portfolio | Taylor Hoffmann",
	author: "Taylor Hoffmann",
	headerTitle: "Minhas ideias",
	description: "Meu portfolio pessoal onde compartilho um pouco de tudo",
	snippets: "Trechos de código reutilizáveis coletados por Taylor",
	language: "pt-BR",
	theme: "system", // system, dark or light
	siteUrl: "https://me.hotay.dev",
	siteRepo: "https://github.com/TaylorHo/portfolio",
	siteLogo: "/static/images/logo.png",
	image: "/static/images/avatar.jpg",
	socialBanner: "/static/images/twitter-card.png",
	email: "taylor@hotay.dev",
	github: "https://github.com/TaylorHo",
	linkedin: "https://www.linkedin.com/in/hoffmann-taylor/",
	website: "https://me.hotay.dev",
	locale: "pt-BR",
	analytics: {
		plausibleDataDomain: "", // e.g. tailwind-nextjs-starter-blog.vercel.app
		simpleAnalytics: false, // true or false
		// TODO: change Umami by PostHog (and also add PostHog to this project)
		umamiWebsiteId: "", // e.g. 123e4567-e89b-12d3-a456-426614174000
		googleAnalyticsId: "", // e.g. UA-000000-2 or G-XXXXXXX
	},
	newsletter: {
		provider: "emailOctopus",
	},
	comment: {
		provider: "giscus",
		giscusConfig: {
			repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
			repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
			category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
			categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
			mapping: "pathname",
			reactions: "1",
			metadata: "0",
			// theme example: light, dark, dark_dimmed, dark_high_contrast
			// transparent_dark, preferred_color_scheme, custom
			theme: "light",
			inputPosition: "bottom",
			lang: "pt",
			darkTheme: "dark",
			themeURL: "",
		},
	},
	socialAccount: {},
};

module.exports = siteMetadata;

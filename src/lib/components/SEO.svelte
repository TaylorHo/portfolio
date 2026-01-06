<script lang="ts">
	import { page } from '$app/state';
	import { personalInfo } from '$lib/data/personal';
	import { getLocale } from '$lib/paraglide/runtime';

	interface Props {
		title: string;
		description: string;
		tags?: string[];
		keywords?: string[];
		image?: string;
	}

	const { title, description, tags, keywords, image }: Props = $props();

	const ogImage = $derived(image || `${personalInfo.url}/assets/images/profile/light.webp`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={page.url.href} />
	{#if keywords}
		<meta name="keywords" content={keywords.join(', ') || ''} />
	{/if}

	<!-- OPEN GRAPH (Facebook, LinkedIn, Slack, etc.) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content={personalInfo.name} />

	<!-- OPTIONAL OG TAGS -->
	<meta property="og:locale" content={getLocale().toLowerCase()} />
	<!-- For blogs/news -->
	{#if tags}
		<meta property="article:tag" content={tags.join(', ')} />
	{/if}

	<!-- TWITTER CARDS -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<!-- <meta name="twitter:site" content="@twitterhandle" /> -->
	<!-- optional -->
</svelte:head>

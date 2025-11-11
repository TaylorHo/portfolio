<script lang="ts">
	import type { Publication } from '$lib/models/publication';
	import { m } from '$lib/paraglide/messages';
	import { formatAuthors } from '$lib/services/formatting';
	import {
		getTitleForPublicationType,
		getIconForPublicationType
	} from '$lib/services/publications';
	import Badge from '$lib/components/Badge.svelte';
	import CardHeader from '$lib/components/CardHeader.svelte';

	interface Props {
		publication: Publication;
	}

	let { publication }: Props = $props();

	const ComponentIcon = $derived(getIconForPublicationType(publication.type));
</script>

<div class="publication-card card">
	<CardHeader
		icon={ComponentIcon}
		typeText={getTitleForPublicationType(publication.type)}
		year={new Date(publication.publishedDate).getFullYear()}
		badgeVariant="primary"
	/>

	<h3 class="publication-title">
		{#if publication.slug}
			<a href={`/publications/${publication.slug}`}>
				{publication.title}
			</a>
		{:else if publication.url}
			<a href={publication.url} target="_blank" rel="noopener noreferrer">
				{publication.title}
			</a>
		{:else}
			{publication.title}
		{/if}
	</h3>

	<div class="publication-meta">
		<p class="authors">{formatAuthors(publication.authors)}</p>
		<p class="publisher">{publication.publisher}</p>
	</div>

	{#if publication.abstract}
		<p class="abstract">{publication.abstract}</p>
	{/if}

	{#if publication.keywords && publication.keywords.length > 0}
		<div class="keywords">
			{#each publication.keywords as keyword}
				<Badge variant="hover">{keyword}</Badge>
			{/each}
		</div>
	{/if}

	{#if publication.slug}
		<a href={`/publications/${publication.slug}`} class="btn btn-primary">
			{m.view_publication()}
		</a>
	{/if}
	{#if publication.purchaseLink}
		<a
			href={publication.purchaseLink}
			target="_blank"
			rel="noopener noreferrer"
			class="btn btn-accent"
		>
			{m.buy_physical_copy()}
		</a>
	{/if}
</div>

<style>
	.publication-card {
		cursor: pointer;
	}

	.publication-title {
		margin: 0 0 var(--space-3) 0;
		font-size: var(--font-size-xl);
		line-height: 1.3;
	}

	.publication-title a {
		color: var(--color-text);
		text-decoration: none;
	}

	.publication-title a:hover {
		color: var(--color-primary);
	}

	.publication-meta {
		margin-bottom: var(--space-4);
	}

	.authors {
		font-weight: 500;
		color: var(--color-text);
		margin: 0 0 var(--space-1) 0;
	}

	.publisher {
		color: var(--color-text-secondary);
		font-style: italic;
		margin: 0;
	}

	.abstract {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: var(--space-4);
	}

	.keywords {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-bottom: var(--space-4);
	}

	@media (max-width: 768px) {
		.publication-title {
			font-size: var(--font-size-lg);
			margin-bottom: var(--space-2);
		}

		.publication-meta {
			margin-bottom: var(--space-3);
		}

		.authors {
			font-size: var(--font-size-sm);
		}

		.publisher {
			font-size: var(--font-size-sm);
		}

		.abstract {
			font-size: var(--font-size-sm);
			margin-bottom: var(--space-3);
		}

		.keywords {
			margin-bottom: var(--space-3);
		}
	}

	@media (max-width: 480px) {
		.publication-title {
			font-size: var(--font-size-lg);
		}

		.authors {
			font-size: var(--font-size-base);
		}

		.publisher {
			font-size: var(--font-size-base);
		}
	}
</style>

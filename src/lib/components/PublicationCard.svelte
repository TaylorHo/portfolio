<script lang="ts">
	import type { Publication } from '$lib/models/publication';
	import { formatAuthors } from '$lib/services/formatting';
	import {
		getTitleForPublicationType,
		getIconForPublicationType
	} from '$lib/services/publications';

	interface Props {
		publication: Publication;
	}

	let { publication }: Props = $props();

	const ComponentIcon = $derived(getIconForPublicationType(publication.type));
</script>

<div class="publication-card card">
	<div class="publication-header">
		<div class="publication-type">
			<span class="type-icon">
				<ComponentIcon size={16} />
			</span>
			<span class="type-text">{getTitleForPublicationType(publication.type)}</span>
			<span class="year">{new Date(publication.publishedDate).getFullYear()}</span>
		</div>
	</div>

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
				<span class="keyword">{keyword}</span>
			{/each}
		</div>
	{/if}
</div>

<style>
	.publication-card {
		cursor: pointer;
	}

	.publication-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-3);
	}

	.publication-type {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
	}

	.type-icon {
		font-size: var(--font-size-base);
		display: flex;
	}

	.type-text {
		text-transform: capitalize;
		font-weight: 500;
	}

	.year {
		background-color: var(--color-primary);
		color: white;
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
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

	.keyword {
		background-color: var(--color-hover);
		color: var(--color-text-secondary);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.publication-header {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-2);
			margin-bottom: var(--space-2);
		}

		.publication-type {
			font-size: var(--font-size-sm);
		}

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

		.keyword {
			font-size: var(--font-size-sm);
			padding: var(--space-1) var(--space-2);
		}
	}

	@media (max-width: 480px) {
		.publication-header {
			gap: var(--space-1);
		}

		.publication-type {
			gap: var(--space-1);
		}

		.publication-title {
			font-size: var(--font-size-lg);
		}

		.authors {
			font-size: var(--font-size-base);
		}

		.publisher {
			font-size: var(--font-size-base);
		}

		.year {
			font-size: var(--font-size-sm);
			padding: var(--space-1) var(--space-2);
		}
	}
</style>

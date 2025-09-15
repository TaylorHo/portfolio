<script lang="ts">
	import type { Publication } from '$lib/models/publication';
	import { m } from '$lib/paraglide/messages';
	import { getTypeTitle } from '$lib/services/publications';
	import { FileText, BookOpen, Mic } from '@lucide/svelte';
	import type { Component } from 'svelte';

	interface Props {
		publication: Publication;
	}

	let { publication }: Props = $props();

	function getTypeIcon(type: string): Component {
		switch (type) {
			case 'article':
				return FileText;
			case 'book':
				return BookOpen;
			case 'conference':
				return Mic;
			default:
				return FileText;
		}
	}

	function formatAuthors(authors: string[]): string {
		if (authors.length <= 2) {
			return authors.join(' & ');
		}
		return `${authors[0]} et al.`;
	}

	const ComponentIcon = $derived(getTypeIcon(publication.type));
</script>

<div class="publication-card card">
	<div class="publication-header">
		<div class="publication-type">
			<span class="type-icon">
				<ComponentIcon size={16} />
			</span>
			<span class="type-text">{getTypeTitle(publication.type)}</span>
			<span class="year">{publication.year}</span>
		</div>
	</div>

	<h3 class="publication-title">
		{#if publication.url}
			<a href={publication.url} target="_blank" rel="noopener noreferrer">
				{publication.title}
			</a>
		{:else}
			{publication.title}
		{/if}
	</h3>

	<div class="publication-meta">
		<p class="authors">{formatAuthors(publication.authors)}</p>
		<p class="venue">{publication.venue}</p>
	</div>

	{#if publication.abstract}
		<p class="abstract">{publication.abstract}</p>
	{/if}

	{#if publication.tags && publication.tags.length > 0}
		<div class="tags">
			{#each publication.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	{/if}

	<div class="publication-links">
		{#if publication.url}
			<a href={publication.url} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
				{m.view_publication()}
			</a>
		{/if}
		{#if publication.pdf}
			<a href={publication.pdf} target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
				PDF
			</a>
		{/if}
		{#if publication.type === 'book' && publication.purchaseLink}
			<a
				href={publication.purchaseLink}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-accent"
			>
				{m.buy_physical_copy()}
			</a>
		{/if}
		{#if publication.doi}
			<a
				href="https://doi.org/{publication.doi}"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-secondary"
			>
				DOI
			</a>
		{/if}
	</div>
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

	.venue {
		color: var(--color-text-secondary);
		font-style: italic;
		margin: 0;
	}

	.abstract {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: var(--space-4);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-bottom: var(--space-4);
	}

	.tag {
		background-color: var(--color-hover);
		color: var(--color-text-secondary);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
	}

	.publication-links {
		display: flex;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		.publication-header {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-2);
		}

		.publication-links {
			flex-direction: column;
		}
	}
</style>

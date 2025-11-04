<script lang="ts">
	import type { Publication } from '$lib/models/publication';
	import type { Component } from 'svelte';
	import { ArrowLeft, ExternalLink } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';
	import {
		getTitleForPublicationType,
		getIconForPublicationType
	} from '$lib/services/publications';
	import { formatAuthors } from '$lib/services/formatting';

	interface Props {
		data: {
			content: Component;
			meta: Publication;
		};
	}

	let { data }: Props = $props();

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
	}

	const ComponentIcon = $derived(getIconForPublicationType(data.meta.type));
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.abstract || ''} />
</svelte:head>

<div class="publication-page">
	<div class="container">
		<!-- Back to publications -->
		<div class="back-link">
			<a href="/publications" class="btn btn-secondary">
				<ArrowLeft size={16} />
				{m.back_to_publications()}
			</a>
		</div>

		<!-- Page Title -->
		<header class="page-header">
			<h1 class="publication-title">{data.meta.title}</h1>
			{#if data.meta.abstract}
				<p class="abstract">{data.meta.abstract}</p>
			{/if}
		</header>

		<!-- Two Column Layout -->
		<div class="publication-layout">
			<!-- Main Content (Left) -->
			<article class="publication-content">
				<data.content />
			</article>

			<!-- Info Block (Right) -->
			<aside class="publication-info">
				<div class="info-block">
					<div class="info-header">
						<ComponentIcon size={20} />
						<span class="info-title">{getTitleForPublicationType(data.meta.type)}</span>
					</div>

					<div class="info-body">
						<!-- Authors -->
						<div class="info-row">
							<dt class="info-label">
								{data.meta.authors.length > 1
									? m.publication_info_authors()
									: m.publication_info_author()}
							</dt>
							<dd class="info-value">{formatAuthors(data.meta.authors)}</dd>
						</div>

						<!-- Published Date -->
						<div class="info-row">
							<dt class="info-label">{m.publication_info_published()}</dt>
							<dd class="info-value">{formatDate(data.meta.publishedDate)}</dd>
						</div>

						<!-- Publisher -->
						{#if data.meta.publisher}
							<div class="info-row">
								<dt class="info-label">
									{data.meta.type === 'conference'
										? m.publication_info_venue()
										: m.publication_info_publisher()}
								</dt>
								<dd class="info-value">{data.meta.publisher}</dd>
							</div>
						{/if}

						<!-- Pages -->
						{#if data.meta.pages}
							<div class="info-row">
								<dt class="info-label">{m.publication_info_pages()}</dt>
								<dd class="info-value">{data.meta.pages}</dd>
							</div>
						{/if}

						<!-- Language -->
						{#if data.meta.language}
							<div class="info-row">
								<dt class="info-label">{m.publication_info_language()}</dt>
								<dd class="info-value">{data.meta.language}</dd>
							</div>
						{/if}

						<!-- ISBN -->
						{#if data.meta.isbn}
							<div class="info-row">
								<dt class="info-label">{m.publication_info_isbn()}</dt>
								<dd class="info-value">{data.meta.isbn}</dd>
							</div>
						{/if}

						<!-- ISSN -->
						{#if data.meta.issn}
							<div class="info-row">
								<dt class="info-label">{m.publication_info_issn()}</dt>
								<dd class="info-value">{data.meta.issn}</dd>
							</div>
						{/if}

						<!-- Volume -->
						{#if data.meta.volume}
							<div class="info-row">
								<dt class="info-label">{m.publication_info_volume()}</dt>
								<dd class="info-value">{data.meta.volume}</dd>
							</div>
						{/if}

						<!-- Issue -->
						{#if data.meta.issue}
							<div class="info-row">
								<dt class="info-label">{m.publication_info_issue()}</dt>
								<dd class="info-value">{data.meta.issue}</dd>
							</div>
						{/if}

						<!-- DOI -->
						{#if data.meta.doi}
							<div class="info-row">
								<dt class="info-label">{m.publication_info_doi()}</dt>
								<dd class="info-value">
									<a
										href="https://doi.org/{data.meta.doi}"
										target="_blank"
										rel="noopener noreferrer"
										class="info-link"
									>
										{data.meta.doi}
										<ExternalLink size={14} />
									</a>
								</dd>
							</div>
						{/if}
					</div>

					<!-- Action Links -->
					<div class="info-actions">
						{#if data.meta.url}
							<a
								href={data.meta.url}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-primary btn-block"
							>
								{m.view_publication()}
							</a>
						{/if}
						{#if data.meta.pdf}
							<a
								href={data.meta.pdf}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-secondary btn-block"
							>
								PDF
							</a>
						{/if}
						{#if data.meta.type === 'book' && data.meta.purchaseLink}
							<a
								href={data.meta.purchaseLink}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-accent btn-block"
							>
								{m.buy_physical_copy()}
							</a>
						{/if}
					</div>

					<!-- Tags -->
					{#if data.meta.keywords && data.meta.keywords.length > 0}
						<div class="info-keywords">
							{#each data.meta.keywords as keyword}
								<span class="keyword">{keyword}</span>
							{/each}
						</div>
					{/if}
				</div>
			</aside>
		</div>
	</div>
</div>

<style>
	.publication-page {
		padding: var(--space-8) 0 var(--space-20) 0;
		min-height: calc(100vh - 64px);
	}

	.back-link {
		margin-bottom: var(--space-8);
	}

	.back-link .btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
	}

	.page-header {
		margin-bottom: var(--space-12);
	}

	.publication-title {
		font-size: var(--font-size-4xl);
		font-weight: 700;
		line-height: 1.2;
		color: var(--color-text);
		margin: 0 0 var(--space-4) 0;
	}

	.abstract {
		font-size: var(--font-size-lg);
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	/* Two Column Layout */
	.publication-layout {
		display: grid;
		grid-template-columns: 1fr 350px;
		gap: var(--space-12);
		align-items: start;
	}

	/* Main Content (Left) */
	.publication-content {
		line-height: 1.8;
		font-size: var(--font-size-base);
		color: var(--color-text);
		min-width: 0;
	}

	/* Info Block (Right) - Wikipedia Style */
	.publication-info {
		position: sticky;
		top: var(--space-8);
	}

	.info-block {
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		overflow: hidden;
	}

	.info-header {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-4);
		background-color: var(--color-hover);
		border-bottom: 1px solid var(--color-border);
	}

	.info-title {
		font-size: var(--font-size-base);
		font-weight: 600;
		color: var(--color-text);
	}

	.info-body {
		padding: var(--space-4);
	}

	.info-row {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: var(--space-3);
		padding: var(--space-3) 0;
		border-bottom: 1px solid var(--color-border);
	}

	.info-row:last-child {
		border-bottom: none;
	}

	.info-label {
		font-size: var(--font-size-sm);
		font-weight: 600;
		color: var(--color-text-secondary);
		margin: 0;
	}

	.info-value {
		font-size: var(--font-size-sm);
		color: var(--color-text);
		margin: 0;
		word-break: break-word;
	}

	.info-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		color: var(--color-primary);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.info-link:hover {
		color: var(--color-primary-hover);
		text-decoration: underline;
	}

	.info-actions {
		padding: var(--space-4);
		border-top: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.btn-block {
		width: 100%;
		justify-content: center;
	}

	.info-keywords {
		padding: var(--space-4);
		border-top: 1px solid var(--color-border);
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.keyword {
		background-color: var(--color-hover);
		color: var(--color-text-secondary);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-xs);
		font-weight: 500;
	}

	/* Typography for publication content */
	.publication-content :global(h1),
	.publication-content :global(h2),
	.publication-content :global(h3),
	.publication-content :global(h4),
	.publication-content :global(h5),
	.publication-content :global(h6) {
		color: var(--color-text);
		font-weight: 600;
		margin: var(--space-8) 0 var(--space-4) 0;
		line-height: 1.3;
	}

	.publication-content :global(h1) {
		font-size: var(--font-size-3xl);
	}

	.publication-content :global(h2) {
		font-size: var(--font-size-2xl);
	}

	.publication-content :global(h3) {
		font-size: var(--font-size-xl);
	}

	.publication-content :global(p) {
		margin: 0 0 var(--space-6) 0;
		color: var(--color-text);
	}

	.publication-content :global(a) {
		color: var(--color-primary);
		text-decoration: underline;
		text-decoration-color: rgba(var(--base-color-rgb), 0.3);
		transition: all 0.2s ease;
	}

	.publication-content :global(a:hover) {
		color: var(--color-primary-hover);
		text-decoration-color: var(--color-primary-hover);
	}

	.publication-content :global(ul),
	.publication-content :global(ol) {
		margin: 0 0 var(--space-6) 0;
		padding-left: var(--space-6);
	}

	.publication-content :global(li) {
		margin-bottom: var(--space-2);
		color: var(--color-text);
	}

	.publication-content :global(blockquote) {
		border-left: 4px solid var(--color-primary);
		padding-left: var(--space-4);
		margin: var(--space-6) 0;
		font-style: italic;
		color: var(--color-text-secondary);
	}

	.publication-content :global(code) {
		background-color: var(--color-hover);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: 0.9em;
		color: var(--color-text);
	}

	.publication-content :global(pre) {
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-4);
		margin: var(--space-6) 0;
		overflow-x: auto;
		position: relative;
	}

	.publication-content :global(pre code) {
		background: none;
		padding: 0;
	}

	/* Copy button styles */
	.publication-content :global(.rehype-pretty-copy) {
		position: absolute;
		top: var(--space-2);
		right: var(--space-2);
		background-color: #2a2a2a;
		border: 1px solid #adadad;
		border-radius: var(--radius-sm);
		padding: var(--space-2);
		width: 32px;
		height: 32px;
		cursor: pointer;
		transition: all 0.2s ease;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.publication-content :global(.rehype-pretty-copy::before) {
		content: '';
		width: 16px;
		height: 16px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23adadad' d='M16.187 9.5H12.25a1.75 1.75 0 0 0-1.75 1.75v28.5c0 .967.784 1.75 1.75 1.75h23.5a1.75 1.75 0 0 0 1.75-1.75v-28.5a1.75 1.75 0 0 0-1.75-1.75h-3.937a4.25 4.25 0 0 1-4.063 3h-7.5a4.25 4.25 0 0 1-4.063-3M31.813 7h3.937A4.25 4.25 0 0 1 40 11.25v28.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75v-28.5A4.25 4.25 0 0 1 12.25 7h3.937a4.25 4.25 0 0 1 4.063-3h7.5a4.25 4.25 0 0 1 4.063 3M18.5 8.25c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 1 0 0-3.5h-7.5a1.75 1.75 0 0 0-1.75 1.75'/%3E%3C/svg%3E");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}

	.publication-content :global(.rehype-pretty-copy:hover) {
		border-color: #adadad;
		background-color: #3a3a3a;
	}

	.publication-content :global(.rehype-pretty-copy.rehype-pretty-copied) {
		border-color: #66ff85;
	}

	.publication-content :global(.rehype-pretty-copy.rehype-pretty-copied::before) {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2366ff85' d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'/%3E%3C/svg%3E");
	}

	.publication-content :global(code) {
		counter-reset: step;
		counter-increment: step calc(var(--start, 1) - 1);
	}

	.publication-content :global(code .line::before) {
		content: counter(step);
		counter-increment: step;
		width: 1rem;
		margin-right: 1.5rem;
		display: inline-block;
		text-align: right;
		color: rgba(255, 255, 255, 0.5);
	}

	.publication-content :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: var(--radius-md);
		margin: var(--space-6) 0;
	}

	/* Responsive Design */
	@media (max-width: 1024px) {
		.publication-layout {
			grid-template-columns: 1fr 300px;
			gap: var(--space-8);
		}

		.info-row {
			grid-template-columns: 90px 1fr;
		}
	}

	@media (max-width: 768px) {
		.publication-page {
			padding: var(--space-6) 0 var(--space-16) 0;
		}

		.back-link {
			margin-bottom: var(--space-6);
		}

		.page-header {
			margin-bottom: var(--space-8);
		}

		.publication-title {
			font-size: var(--font-size-3xl);
		}

		.abstract {
			font-size: var(--font-size-base);
		}

		.publication-layout {
			grid-template-columns: 1fr;
			gap: var(--space-8);
		}

		.publication-info {
			position: static;
			order: -1;
		}

		.info-row {
			grid-template-columns: 1fr;
			gap: var(--space-1);
		}

		.publication-content :global(h1) {
			font-size: var(--font-size-2xl);
		}

		.publication-content :global(h2) {
			font-size: var(--font-size-xl);
		}

		.publication-content :global(h3) {
			font-size: var(--font-size-lg);
		}
	}

	@media (max-width: 480px) {
		.publication-page {
			padding: var(--space-4) 0 var(--space-12) 0;
		}

		.publication-title {
			font-size: var(--font-size-2xl);
		}

		.abstract {
			font-size: var(--font-size-sm);
		}
	}
</style>

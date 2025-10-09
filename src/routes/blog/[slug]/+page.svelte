<script lang="ts">
	import { formatDate } from '$lib/services/date';
	import type { Post } from '$lib/models/blog';
	import type { Component } from 'svelte';
	import { browser } from '$app/environment';
	import { Calendar, ArrowLeft } from '@lucide/svelte';
	import Comments from '$lib/components/blog/Comments.svelte';

	interface Props {
		data: {
			content: Component;
			meta: Post;
		};
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
		integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="blog-post-page">
	<div class="container">
		<!-- Back to blog -->
		<div class="back-link">
			<a href="/blog" class="btn btn-secondary">
				<ArrowLeft size={16} />
				Back to Blog
			</a>
		</div>

		<article class="blog-post">
			<!-- Header -->
			<header class="post-header">
				<div class="post-meta">
					<div class="meta-info">
						<span class="date">
							<Calendar size={16} />
							{formatDate(data.meta.date)}
						</span>
					</div>
				</div>

				<h1 class="post-title">{data.meta.title}</h1>

				{#if data.meta.description}
					<p class="post-description">{data.meta.description}</p>
				{/if}

				{#if data.meta.image}
					<div class="post-image">
						<img src={data.meta.image} alt={data.meta.title} />
					</div>
				{/if}

				{#if data.meta.categories && data.meta.categories.length > 0}
					<div class="post-categories">
						{#each data.meta.categories as category}
							<span class="category-tag">{category}</span>
						{/each}
					</div>
				{/if}
			</header>

			<!-- Content -->
			<div class="post-content">
				<data.content />
			</div>
		</article>

		{#if browser}
			<Comments />
		{/if}
	</div>
</div>

<style>
	.blog-post-page {
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

	.blog-post {
		max-width: 800px;
		margin: 0 auto 4rem;
	}

	.post-header {
		margin-bottom: var(--space-12);
		text-align: center;
	}

	.post-meta {
		margin-bottom: var(--space-6);
	}

	.meta-info {
		display: flex;
		justify-content: center;
		gap: var(--space-6);
		flex-wrap: wrap;
		margin-bottom: var(--space-2);
	}

	.date {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--color-text-secondary);
		font-size: var(--font-size-sm);
		font-weight: 500;
	}

	.post-title {
		font-size: var(--font-size-4xl);
		font-weight: 700;
		line-height: 1.2;
		color: var(--color-text);
		margin: 0 0 var(--space-6) 0;
	}

	.post-description {
		font-size: var(--font-size-xl);
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin: 0 0 var(--space-8) 0;
		font-weight: 400;
	}

	.post-image {
		margin: var(--space-8) 0;
		border-radius: var(--radius-lg);
		overflow: hidden;
		box-shadow: var(--shadow-lg);
	}

	.post-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-categories {
		display: flex;
		justify-content: center;
		gap: var(--space-3);
		flex-wrap: wrap;
		margin-top: var(--space-6);
	}

	.category-tag {
		background-color: var(--color-primary);
		color: white;
		padding: var(--space-2) var(--space-4);
		border-radius: var(--radius-full);
		font-size: var(--font-size-sm);
		font-weight: 500;
		text-decoration: none;
		transition: background-color 0.2s ease;
	}

	.category-tag:hover {
		background-color: var(--color-primary-hover);
	}

	.post-content {
		line-height: 1.8;
		font-size: var(--font-size-lg);
		color: var(--color-text);
	}

	/* Typography for post content */
	.post-content :global(h1),
	.post-content :global(h2),
	.post-content :global(h3),
	.post-content :global(h4),
	.post-content :global(h5),
	.post-content :global(h6) {
		color: var(--color-text);
		font-weight: 600;
		margin: var(--space-8) 0 var(--space-4) 0;
		line-height: 1.3;
	}

	.post-content :global(h1) {
		font-size: var(--font-size-3xl);
	}

	.post-content :global(h2) {
		font-size: var(--font-size-2xl);
	}

	.post-content :global(h3) {
		font-size: var(--font-size-xl);
	}

	.post-content :global(p) {
		margin: 0 0 var(--space-6) 0;
		color: var(--color-text);
	}

	.post-content :global(a) {
		color: var(--color-primary);
		text-decoration: underline;
		text-decoration-color: rgba(var(--base-color-rgb), 0.3);
		transition: all 0.2s ease;
	}

	.post-content :global(a:hover) {
		color: var(--color-primary-hover);
		text-decoration-color: var(--color-primary-hover);
	}

	.post-content :global(ul),
	.post-content :global(ol) {
		margin: 0 0 var(--space-6) 0;
		padding-left: var(--space-6);
	}

	.post-content :global(li) {
		margin-bottom: var(--space-2);
		color: var(--color-text);
	}

	.post-content :global(blockquote) {
		border-left: 4px solid var(--color-primary);
		padding-left: var(--space-4);
		margin: var(--space-6) 0;
		font-style: italic;
		color: var(--color-text-secondary);
	}

	.post-content :global(code) {
		background-color: var(--color-hover);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: 0.9em;
		color: var(--color-text);
	}

	.post-content :global(pre) {
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-4);
		margin: var(--space-6) 0;
		overflow-x: auto;
		position: relative;
	}

	.post-content :global(pre code) {
		background: none;
		padding: 0;
	}

	/* Copy button styles */
	.post-content :global(.rehype-pretty-copy) {
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

	.post-content :global(.rehype-pretty-copy::before) {
		content: '';
		width: 16px;
		height: 16px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23adadad' d='M16.187 9.5H12.25a1.75 1.75 0 0 0-1.75 1.75v28.5c0 .967.784 1.75 1.75 1.75h23.5a1.75 1.75 0 0 0 1.75-1.75v-28.5a1.75 1.75 0 0 0-1.75-1.75h-3.937a4.25 4.25 0 0 1-4.063 3h-7.5a4.25 4.25 0 0 1-4.063-3M31.813 7h3.937A4.25 4.25 0 0 1 40 11.25v28.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75v-28.5A4.25 4.25 0 0 1 12.25 7h3.937a4.25 4.25 0 0 1 4.063-3h7.5a4.25 4.25 0 0 1 4.063 3M18.5 8.25c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 1 0 0-3.5h-7.5a1.75 1.75 0 0 0-1.75 1.75'/%3E%3C/svg%3E");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}

	.post-content :global(.rehype-pretty-copy:hover) {
		border-color: #adadad;
		background-color: #3a3a3a;
	}

	.post-content :global(.rehype-pretty-copy.rehype-pretty-copied) {
		border-color: #66ff85;
	}

	.post-content :global(.rehype-pretty-copy.rehype-pretty-copied::before) {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2366ff85' d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'/%3E%3C/svg%3E");
	}

	.post-content :global(code) {
		counter-reset: step;
		counter-increment: step calc(var(--start, 1) - 1);
	}

	.post-content :global(code .line::before) {
		content: counter(step);
		counter-increment: step;
		width: 1rem;
		margin-right: 1.5rem;
		display: inline-block;
		text-align: right;
		color: rgba(255, 255, 255, 0.5);
	}

	.post-content :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: var(--radius-md);
		margin: var(--space-6) 0;
	}

	@media (max-width: 768px) {
		.blog-post-page {
			padding: var(--space-6) 0 var(--space-16) 0;
		}

		.back-link {
			margin-bottom: var(--space-6);
		}

		.post-header {
			margin-bottom: var(--space-8);
			text-align: left;
		}

		.meta-info {
			justify-content: flex-start;
			gap: var(--space-4);
		}

		.post-title {
			font-size: var(--font-size-3xl);
			text-align: left;
		}

		.post-description {
			font-size: var(--font-size-lg);
			text-align: left;
		}

		.post-categories {
			justify-content: flex-start;
			margin-top: var(--space-4);
		}

		.post-content {
			font-size: var(--font-size-base);
		}

		.post-content :global(h1) {
			font-size: var(--font-size-2xl);
		}

		.post-content :global(h2) {
			font-size: var(--font-size-xl);
		}

		.post-content :global(h3) {
			font-size: var(--font-size-lg);
		}
	}

	@media (max-width: 480px) {
		.blog-post-page {
			padding: var(--space-4) 0 var(--space-12) 0;
		}

		.post-title {
			font-size: var(--font-size-2xl);
		}

		.post-description {
			font-size: var(--font-size-base);
		}

		.meta-info {
			flex-direction: column;
			gap: var(--space-2);
		}

		.post-categories {
			gap: var(--space-2);
		}

		.category-tag {
			font-size: var(--font-size-sm);
			padding: var(--space-1) var(--space-3);
		}
	}
</style>

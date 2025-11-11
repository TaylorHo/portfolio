<script lang="ts">
	import { formatDate } from '$lib/services/date';
	import type { Post } from '$lib/models/blog';
	import type { Component } from 'svelte';
	import { browser } from '$app/environment';
	import { Calendar, ArrowLeft } from '@lucide/svelte';
	import Comments from '$lib/components/blog/Comments.svelte';
	import { m } from '$lib/paraglide/messages';
	import SEO from '$lib/components/SEO.svelte';
	import '$lib/styles/markdown.css';

	interface Props {
		data: {
			content: Component;
			meta: Post;
		};
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
		integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
		crossorigin="anonymous"
	/>
</svelte:head>

<SEO
	title={data.meta.title}
	description={data.meta.description || ''}
	tags={data.meta.categories}
/>

<div class="blog-post-page">
	<div class="container">
		<!-- Back to blog -->
		<div class="back-link">
			<a href="/blog" class="btn btn-secondary">
				<ArrowLeft size={16} />
				{m.blog_back_to_blog()}
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
			<div class="markdown-content">
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

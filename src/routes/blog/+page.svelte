<script lang="ts">
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import type { Post } from '$lib/models/blog';
	import { personalInfo } from '$lib/data/personal';
	import { m } from '$lib/paraglide/messages';

	interface Props {
		data: {
			posts: Post[];
		};
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{m.blog_title()} - {personalInfo.name}</title>
	<meta name="description" content={m.blog_meta_description()} />
</svelte:head>

<div class="blog-page">
	<div class="container">
		<div class="page-header">
			<h1>{m.blog_title()}</h1>
			<p class="page-description">
				{m.blog_description()}
			</p>
		</div>

		{#if data.posts.length > 0}
			<div class="blog-grid">
				{#each data.posts as post}
					<BlogCard {post} />
				{/each}
			</div>
		{:else}
			<div class="empty-state">
				<h3>{m.blog_no_posts_found()}</h3>
				<p>{m.blog_check_back_later()}</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.blog-page {
		padding: var(--space-12) 0 var(--space-20) 0;
		min-height: calc(100vh - 64px);
	}

	.page-header {
		text-align: center;
		margin-bottom: var(--space-12);
	}

	.page-header h1 {
		font-size: var(--font-size-4xl);
		font-weight: 700;
		margin-bottom: var(--space-4);
		color: var(--color-text);
	}

	.page-description {
		font-size: var(--font-size-lg);
		color: var(--color-text-secondary);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.blog-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: var(--space-6);
		max-width: 1200px;
		margin: 0 auto;
	}

	.empty-state {
		text-align: center;
		padding: var(--space-16);
		color: var(--color-text-secondary);
	}

	.empty-state h3 {
		margin-bottom: var(--space-2);
		color: var(--color-text);
	}

	@media (max-width: 768px) {
		.blog-page {
			padding: var(--space-8) 0 var(--space-16) 0;
		}

		.page-header h1 {
			font-size: var(--font-size-3xl);
		}

		.page-description {
			font-size: var(--font-size-base);
		}

		.blog-grid {
			grid-template-columns: 1fr;
			gap: var(--space-4);
		}
	}

	@media (max-width: 480px) {
		.blog-grid {
			gap: var(--space-3);
		}
	}
</style>

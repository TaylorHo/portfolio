<script lang="ts">
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import type { Post } from '$lib/models/blog';
	import { personalInfo } from '$lib/data/personal';
	import { m } from '$lib/paraglide/messages';
	import SEO from '$lib/components/SEO.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';

	interface Props {
		data: {
			posts: Post[];
		};
	}

	let { data }: Props = $props();
</script>

<SEO title="{m.blog_title()} - {personalInfo.name}" description={m.blog_meta_description()} />

<div class="blog-page">
	<div class="container">
		<PageHeader title={m.blog_title()} description={m.blog_description()} />

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

<script lang="ts">
	import { formatDate } from '$lib/services/date';
	import type { Post } from '$lib/models/blog';
	import { Calendar, Clock } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';

	interface Props {
		post: Post;
	}

	let { post }: Props = $props();
</script>

{#key post.slug}
	<div class="blog-card card">
		<a href={`/blog/${post.slug}`} class="blog-card-link">
			{#if post.image}
				<div class="blog-image">
					<img src={post.image} alt={post.title} />
				</div>
			{/if}

			<div class="blog-content">
				<div class="blog-header">
					<div class="blog-meta">
						<span class="date-badge">
							<Calendar size={14} />
							{formatDate(post.date)}
						</span>
						{#if post.categories && post.categories.length > 0}
							<div class="categories">
								{#each post.categories.slice(0, 2) as category}
									<span class="category-tag">{category}</span>
								{/each}
							</div>
						{/if}
					</div>
				</div>

				<h3 class="blog-title">{post.title}</h3>

				<p class="blog-description">{post.description}</p>

				<div class="blog-footer">
					<span class="read-more">{m.read_article()} →</span>
				</div>
			</div>
		</a>
	</div>
{/key}

<style>
	.blog-card {
		position: relative;
		overflow: hidden;
	}

	.blog-card-link {
		display: block;
		text-decoration: none;
		color: inherit;
		height: 100%;
	}

	.blog-image {
		width: 100%;
		height: 200px;
		overflow: hidden;
		border-radius: var(--radius-md) var(--radius-md) 0 0;
		margin: calc(-1 * var(--space-6)) calc(-1 * var(--space-6)) var(--space-4)
			calc(-1 * var(--space-6));
	}

	.blog-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.2s ease;
	}

	.blog-card:hover .blog-image img {
		transform: scale(1.05);
	}

	.blog-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.blog-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--space-1);
	}

	.blog-meta {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		flex-wrap: wrap;
	}

	.date-badge {
		display: flex;
		align-items: center;
		gap: var(--space-1);
		background-color: var(--color-hover);
		color: var(--color-text-secondary);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
	}

	.categories {
		display: flex;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.category-tag {
		background-color: rgba(var(--base-color-rgb), 0.05);
		color: var(--color-primary);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
	}

	.blog-title {
		margin: 0;
		font-size: var(--font-size-xl);
		line-height: 1.3;
		color: var(--color-text);
		transition: color 0.2s ease;
	}

	.blog-card:hover .blog-title {
		color: var(--color-primary);
	}

	.blog-description {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.blog-footer {
		margin-top: auto;
		padding-top: var(--space-2);
	}

	.read-more {
		color: var(--color-primary);
		font-weight: 500;
		font-size: var(--font-size-sm);
		transition: color 0.2s ease;
	}

	.blog-card:hover .read-more {
		color: var(--color-primary-hover);
	}

	@media (max-width: 768px) {
		.blog-image {
			height: 160px;
		}

		.blog-title {
			font-size: var(--font-size-lg);
		}

		.blog-meta {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-2);
		}

		.categories {
			gap: var(--space-1);
		}

		.category-tag {
			font-size: var(--font-size-sm);
			padding: var(--space-1) var(--space-2);
		}
	}

	@media (max-width: 480px) {
		.blog-image {
			height: 140px;
		}

		.blog-title {
			font-size: var(--font-size-lg);
		}

		.blog-description {
			font-size: var(--font-size-sm);
			-webkit-line-clamp: 2;
			line-clamp: 2;
		}
	}
</style>

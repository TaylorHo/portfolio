<script lang="ts">
	import PublicationCard from '$lib/components/PublicationCard.svelte';
	import { personalInfo } from '$lib/data/personal';
	import { publications } from '$lib/data/publications';
	import { m } from '$lib/paraglide/messages';
	import { getTypeTitle } from '$lib/services/publications';

	// Sort publications by year (most recent first)
	const sortedPublications = publications.sort((a, b) => b.year - a.year);

	// Group publications by type
	const publicationsByType = sortedPublications.reduce(
		(acc, pub) => {
			if (!acc[pub.type]) {
				acc[pub.type] = [];
			}
			acc[pub.type].push(pub);
			return acc;
		},
		{} as Record<string, typeof publications>
	);

	const typeOrder = ['book', 'article', 'conference'];
	const orderedTypes = typeOrder.filter((type) => publicationsByType[type]);
</script>

<svelte:head>
	<title>{m.publications()} - {personalInfo.name}</title>
	<meta
		name="description"
		content={m.publications_page_meta_description({ name: personalInfo.name })}
	/>
</svelte:head>

<div class="publications-page">
	<div class="container">
		<div class="page-header">
			<h1>{m.publications()}</h1>
			<p class="page-description">
				{m.publications_page_headline()}
			</p>
		</div>

		<div class="publications-content">
			{#each orderedTypes as type}
				<section class="publication-section">
					<h2 class="section-title">{getTypeTitle(type, true)}</h2>
					<div class="publications-grid">
						{#each publicationsByType[type] as publication}
							<PublicationCard {publication} />
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>
</div>

<style>
	.publications-page {
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
		margin: 0 auto var(--space-8) auto;
		line-height: 1.6;
	}

	.publications-content {
		max-width: 1000px;
		margin: 0 auto;
	}

	.publication-section {
		margin-bottom: var(--space-16);
	}

	.section-title {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		margin-bottom: var(--space-6);
		color: var(--color-text);
		border-bottom: 2px solid var(--color-border);
		padding-bottom: var(--space-2);
	}

	.publications-grid {
		display: grid;
		gap: var(--space-6);
	}

	@media (max-width: 768px) {
		.publications-page {
			padding: var(--space-8) 0 var(--space-16) 0;
		}

		.page-header h1 {
			font-size: var(--font-size-3xl);
		}

		.publication-section {
			margin-bottom: var(--space-12);
		}

		.section-title {
			font-size: var(--font-size-xl);
		}
	}
</style>

<script lang="ts">
	interface Props {
		title: string;
		description?: string;
		class?: string;
	}

	let { title, description, class: className = '' }: Props = $props();
</script>

<div class="page-header {className}">
	<h1>{title}</h1>
	{#if description}
		<p class="page-description">{description}</p>
	{/if}
</div>

<style>
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

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: var(--font-size-3xl);
		}

		.page-description {
			font-size: var(--font-size-base);
		}
	}
</style>

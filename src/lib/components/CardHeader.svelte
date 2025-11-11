<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import Badge from '$lib/components/Badge.svelte';

	interface Props {
		icon: Component;
		typeText: string;
		year: number;
		badgeVariant?: 'default' | 'primary' | 'accent' | 'hover' | 'secondary';
		children?: Snippet;
	}

	let { icon: Icon, typeText, year, badgeVariant = 'hover', children }: Props = $props();
</script>

<div class="card-header">
	<div class="card-type">
		<span class="type-icon">
			<Icon size={16} />
		</span>
		<span class="type-text">{typeText}</span>
		<Badge variant={badgeVariant}>{year}</Badge>
	</div>
	{@render children?.()}
</div>

<style>
	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-3);
	}

	.card-type {
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

	@media (max-width: 768px) {
		.card-header {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-2);
		}

		.card-type {
			gap: var(--space-1);
		}
	}
</style>

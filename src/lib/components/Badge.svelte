<script lang="ts">
	interface Props {
		variant?: 'default' | 'primary' | 'accent' | 'hover' | 'secondary';
		class?: string;
		children: import('svelte').Snippet;
	}

	let { variant = 'default', class: className = '', children }: Props = $props();
</script>

<span class="badge badge-{variant} {className}">
	{@render children()}
</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.badge-default {
		background-color: rgba(var(--base-color-rgb), 0.05);
		color: var(--color-primary);
	}

	.badge-primary {
		background-color: var(--color-primary);
		color: white;
	}

	.badge-accent {
		background-color: var(--color-accent);
		color: white;
	}

	.badge-hover {
		background-color: var(--color-hover);
		color: var(--color-text-secondary);
	}

	.badge-secondary {
		background-color: var(--color-hover);
		color: var(--color-text);
	}
</style>

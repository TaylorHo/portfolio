<script lang="ts">
	import { Paperclip, ExternalLink } from '@lucide/svelte';
	import type { Component } from 'svelte';

	interface Props {
		link: string;
		label: string;
		icon?: Component;
	}

	let { link, label, icon: Icon = Paperclip }: Props = $props();

	let host = $derived.by(() => {
		try {
			return new URL(link).hostname.replace(/^www\./, '');
		} catch {
			return link;
		}
	});
</script>

<a href={link} class="attachment" target="_blank" rel="noopener noreferrer">
	<div class="attachment-icon" aria-hidden="true">
		<Icon size={20} />
	</div>

	<div class="attachment-body">
		<span class="attachment-label">{label}</span>
		<span class="attachment-host">{host}</span>
	</div>

	<ExternalLink size={16} class="attachment-external" aria-hidden="true" />
</a>

<style>
	.attachment {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		width: 100%;
		margin: var(--space-4) 0;
		padding: var(--space-3) var(--space-4);
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		text-decoration: none;
		color: inherit;
		transition:
			border-color 0.2s ease,
			background-color 0.2s ease,
			box-shadow 0.2s ease,
			transform 0.2s ease;
	}

	.attachment:hover {
		border-color: var(--color-primary);
		background-color: var(--color-hover);
		box-shadow: var(--shadow-md);
		transform: translateY(-1px);
	}

	.attachment:focus-visible {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}

	.attachment-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: var(--radius-md);
		background-color: var(--color-hover);
		color: var(--color-primary);
	}

	.attachment-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		min-width: 0;
		flex: 1;
	}

	.attachment-label {
		font-size: var(--font-size-base);
		font-weight: 600;
		color: var(--color-text);
		line-height: 1.3;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.attachment-host {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		line-height: 1.3;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.attachment:hover .attachment-host {
		color: var(--color-primary);
	}

	.attachment :global(.attachment-external) {
		flex-shrink: 0;
		color: var(--color-text-secondary);
		opacity: 0;
		transition:
			opacity 0.2s ease,
			color 0.2s ease;
	}

	.attachment:hover :global(.attachment-external) {
		opacity: 1;
		color: var(--color-primary);
	}
</style>

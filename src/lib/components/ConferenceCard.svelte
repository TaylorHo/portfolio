<script lang="ts">
	import type { Conference } from '$lib/models/conference';
	import {
		getIconForConferenceType,
		getTypeLabelForConferenceType
	} from '$lib/services/conferences';
	import { MapPin, Globe } from '@lucide/svelte';
	import CardHeader from '$lib/components/CardHeader.svelte';

	interface Props {
		conference: Conference;
	}

	let { conference }: Props = $props();
	const ComponentIcon = $derived(getIconForConferenceType(conference.type));
</script>

<div class="conference-card card">
	<CardHeader
		icon={ComponentIcon}
		typeText={getTypeLabelForConferenceType(conference.type)}
		year={conference.year}
		badgeVariant="accent"
	/>

	<h3 class="conference-title">
		{conference.title}
	</h3>

	<div class="conference-meta">
		<p class="organizer">
			<Globe size={14} />
			{conference.organizer}
		</p>
		{#if conference.venue}
			<p class="venue">
				<MapPin size={14} />
				{conference.venue}
			</p>
		{/if}
	</div>

	{#if conference.description}
		<p class="description">{conference.description}</p>
	{/if}
</div>

<style>
	.conference-card {
		cursor: pointer;
		padding: var(--space-3) var(--space-6);
	}

	.conference-title {
		margin: 0 0 var(--space-3) 0;
		font-size: var(--font-size-xl);
		line-height: 1.3;
	}

	.conference-meta {
		margin-bottom: var(--space-1);
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.conference-meta p {
		margin: 0;
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
	}

	.description {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: var(--space-4);
	}

	@media (max-width: 768px) {
		.conference-meta {
			gap: var(--space-2);
		}
	}
</style>

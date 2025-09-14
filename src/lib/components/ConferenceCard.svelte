<script lang="ts">
	import type { Conference } from '$lib/models/conference';
	import { m } from '$lib/paraglide/messages';
	import { Calendar, MapPin, User, Globe, Video, Wrench } from '@lucide/svelte';
	import type { Component } from 'svelte';

	interface Props {
		conference: Conference;
	}

	let { conference }: Props = $props();

	function getTypeIcon(type: string): Component {
		switch (type) {
			case 'conference':
				return Calendar;
			case 'talk':
				return User;
			case 'workshop':
				return Wrench;
			case 'webinar':
				return Video;
			default:
				return Calendar;
		}
	}

	function getTypeLabel(type: string): string {
		switch (type) {
			case 'conference':
				return m.conference_type_conference();
			case 'talk':
				return m.conference_type_talk();
			case 'workshop':
				return m.conference_type_workshop();
			case 'webinar':
				return m.conference_type_webinar();
			default:
				return type.charAt(0).toUpperCase() + type.slice(1);
		}
	}

	const ComponentIcon = $derived(getTypeIcon(conference.type));
</script>

<div class="conference-card card">
	<div class="conference-header">
		<div class="conference-type">
			<span class="type-icon">
				<ComponentIcon size={16} />
			</span>
			<span class="type-text">{getTypeLabel(conference.type)}</span>
			<span class="year">{conference.year}</span>
		</div>
	</div>

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
	}

	.conference-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-3);
	}

	.conference-type {
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

	.year {
		background-color: var(--color-accent);
		color: white;
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
	}

	.conference-title {
		margin: 0 0 var(--space-3) 0;
		font-size: var(--font-size-xl);
		line-height: 1.3;
	}

	.conference-meta {
		margin-bottom: var(--space-4);
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
		.conference-header {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-2);
		}

		.conference-meta {
			gap: var(--space-2);
		}
	}
</style>

<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { personalInfo } from '$lib/data/personal';
	import { projects } from '$lib/data/projects';
	import { m } from '$lib/paraglide/messages';
	import { getStatusTitle, getTypeTitle } from '$lib/services/projects';
	import { Search } from '@lucide/svelte';

	// Sort projects: featured first, then by year (most recent first)
	const sortedProjects = projects.sort((a, b) => {
		if (a.featured && !b.featured) return -1;
		if (!a.featured && b.featured) return 1;
		return b.year - a.year;
	});

	// Filter options
	let selectedType = $state('all');
	let selectedStatus = $state('all');

	const types = ['all', ...new Set(projects.map((p) => p.type))];
	const statuses = ['all', ...new Set(projects.map((p) => p.status))];

	// Filtered projects
	const filteredProjects = $derived(() => {
		return sortedProjects.filter((project) => {
			const typeMatch = selectedType === 'all' || project.type === selectedType;
			const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
			return typeMatch && statusMatch;
		});
	});
</script>

<svelte:head>
	<title>{m.projects()} - {personalInfo.name}</title>
	<meta
		name="description"
		content={m.projects_page_meta_description({ name: personalInfo.name })}
	/>
</svelte:head>

<div class="projects-page">
	<div class="container">
		<div class="page-header">
			<h1>{m.projects()}</h1>
			<p class="page-description">
				{m.projects_page_headline()}
			</p>
		</div>

		<div class="filters">
			<div class="filter-group">
				<label for="type-filter">{m.project_filter_type()}:</label>
				<select id="type-filter" bind:value={selectedType}>
					{#each types as type}
						<option value={type}>{getTypeTitle(type)}</option>
					{/each}
				</select>
			</div>

			<div class="filter-group">
				<label for="status-filter">{m.project_filter_status()}:</label>
				<select id="status-filter" bind:value={selectedStatus}>
					{#each statuses as status}
						<option value={status}>{getStatusTitle(status)}</option>
					{/each}
				</select>
			</div>
		</div>

		<div class="projects-grid">
			{#each filteredProjects() as project}
				<ProjectCard {project} />
			{/each}
		</div>

		{#if filteredProjects().length === 0}
			<div class="empty-state">
				<div class="empty-icon"><Search size={64} /></div>
				<h3>{m.project_filter_no_projects_found()}</h3>
				<p>{m.project_filter_try_adjusting_filters()}</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.projects-page {
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

	.filters {
		display: flex;
		gap: var(--space-4);
		margin-bottom: var(--space-8);
		justify-content: center;
		flex-wrap: wrap;
	}

	.filter-group {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.filter-group label {
		font-weight: 500;
		color: var(--color-text);
	}

	.filter-group select {
		padding: var(--space-2) var(--space-3);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background-color: var(--color-surface);
		color: var(--color-text);
		font-size: var(--font-size-sm);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: var(--space-6);
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (max-width: 480px) {
		.projects-grid {
			grid-template-columns: 1fr;
			gap: var(--space-4);
		}
	}

	.empty-state {
		text-align: center;
		padding: var(--space-16);
		color: var(--color-text-secondary);
	}

	.empty-icon {
		font-size: 4rem;
		margin-bottom: var(--space-4);
	}

	.empty-state h3 {
		margin-bottom: var(--space-2);
		color: var(--color-text);
	}

	@media (max-width: 768px) {
		.projects-page {
			padding: var(--space-8) 0 var(--space-16) 0;
		}

		.page-header h1 {
			font-size: var(--font-size-3xl);
		}

		.page-description {
			font-size: var(--font-size-base);
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}

		.filters {
			flex-direction: column;
			align-items: center;
		}
	}
</style>

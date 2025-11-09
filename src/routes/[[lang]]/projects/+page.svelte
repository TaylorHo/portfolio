<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { personalInfo } from '$lib/data/personal';
	import { projects } from '$lib/data/projects';
	import type { Project, ProjectType } from '$lib/models/project';
	import { m } from '$lib/paraglide/messages';
	import { getTitleForProjectType } from '$lib/services/projects';
	import { Search } from '@lucide/svelte';
	import SEO from '$lib/components/SEO.svelte';

	// Function to extract owner and repo from GitHub URL
	function extractGithubInfo(url: string): { owner: string; repo: string } | null {
		const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
		if (!match) return null;
		return { owner: match[1], repo: match[2].replace(/\/$/, '') };
	}

	// Function to fetch GitHub stars for a single repo
	async function fetchGithubStars(githubUrl: string): Promise<number> {
		try {
			const info = extractGithubInfo(githubUrl);
			if (!info) return 0;

			const response = await fetch(`https://api.github.com/repos/${info.owner}/${info.repo}`);
			if (!response.ok) return 0;

			const data = await response.json();
			return data.stargazers_count || 0;
		} catch (error) {
			console.error('Error fetching GitHub stars:', error);
			return 0;
		}
	}

	// Sort projects: featured first, then by stars (most stars first), then by year (most recent first)
	function sortProjects(projectsList: Project[]): Project[] {
		return projectsList.sort((a, b) => {
			// Featured projects first
			if (a.featured && !b.featured) return -1;
			if (!a.featured && b.featured) return 1;

			// Within each group (featured/unfeatured), sort by stars
			const aStars = a.stars || 0;
			const bStars = b.stars || 0;
			if (aStars !== bStars) return bStars - aStars;

			// If stars are equal, sort by year
			return b.year - a.year;
		});
	}

	// State for projects with stars
	let projectsWithStars = $state<Project[]>(sortProjects([...projects]));

	// Fetch stars for all projects with GitHub URLs
	onMount(async () => {
		const fetchedProjects = await Promise.all(
			projects.map(async (project) => {
				if (project.githubUrl) {
					const stars = await fetchGithubStars(project.githubUrl);
					return { ...project, stars };
				}
				return project;
			})
		);
		projectsWithStars = sortProjects(fetchedProjects);
	});

	// Filter options
	let selectedType = $state('all');

	const types: (ProjectType | 'all')[] = ['all', ...new Set(projects.map((p) => p.type))];

	// Filtered projects
	const filteredProjects = $derived(() => {
		return projectsWithStars.filter((project) => {
			const typeMatch = selectedType === 'all' || project.type === selectedType;
			return typeMatch;
		});
	});
</script>

<SEO
	title="{m.projects()} - {personalInfo.name}"
	description={m.projects_page_meta_description({ name: personalInfo.name })}
/>

<div class="projects-page">
	<div class="container">
		<div class="page-header">
			<h1>{m.projects()}</h1>
			<p class="page-description">
				{m.projects_page_headline()}
			</p>
		</div>

		<div class="filters">
			<div class="filter-section">
				<span class="filter-label">{m.project_filter_type()}:</span>
				<div class="filter-tags">
					{#each types as type}
						<button
							class="filter-tag"
							class:active={selectedType === type}
							onclick={() => (selectedType = type)}
						>
							{getTitleForProjectType(type)}
						</button>
					{/each}
				</div>
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
		margin-bottom: var(--space-8);
	}

	.filter-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-3);
	}

	.filter-label {
		font-weight: 500;
		color: var(--color-text);
		font-size: var(--font-size-base);
	}

	.filter-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		justify-content: center;
	}

	.filter-tag {
		padding: var(--space-2) var(--space-4);
		border: 2px solid var(--color-border);
		border-radius: var(--radius-full);
		background-color: var(--color-surface);
		color: var(--color-text-secondary);
		font-size: var(--font-size-sm);
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
		text-transform: capitalize;
	}

	.filter-tag:hover {
		border-color: var(--color-primary);
		color: var(--color-text);
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.filter-tag.active {
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.filter-tag.active:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
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

		.filter-tags {
			gap: var(--space-2);
		}

		.filter-tag {
			font-size: var(--font-size-sm);
			padding: var(--space-2) var(--space-3);
		}
	}
</style>

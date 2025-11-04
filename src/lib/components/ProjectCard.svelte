<script lang="ts">
	import type { Project } from '$lib/models/project';
	import { m } from '$lib/paraglide/messages';
	import {
		getStatusForProjectType,
		getTitleForProjectType,
		getIconForProjectType
	} from '$lib/services/projects';
	import { Star, Github, ExternalLink } from '@lucide/svelte';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();

	function getStatusColor(status: string): string {
		switch (status) {
			case 'active':
				return 'var(--color-primary)';
			case 'completed':
				return '#10b981';
			case 'archived':
				return 'var(--color-text-secondary)';
			default:
				return 'var(--color-text-secondary)';
		}
	}

	const ComponentIcon = $derived(getIconForProjectType(project.type));
</script>

<div class="project-card card">
	<div class="project-header">
		<div class="project-type">
			<span class="type-icon">
				<ComponentIcon size={16} />
			</span>
			<span class="type-text">{getTitleForProjectType(project.type)}</span>
			<span class="year">{project.year}</span>
		</div>
		<div class="project-status">
			<span
				class="status-badge"
				style="background-color: {getStatusColor(project.status)}; color: white;"
			>
				{getStatusForProjectType(project.status)}
			</span>
			{#if project.featured}
				<span class="featured-badge">
					<Star size={16} />
					{m.project_featured()}
				</span>
			{/if}
		</div>
	</div>

	<h3 class="project-title">{project.title}</h3>

	<p class="project-description">{project.description}</p>

	{#if project.technologies && project.technologies.length > 0}
		<div class="technologies">
			{#each project.technologies as tech}
				<span class="tech-tag">{tech}</span>
			{/each}
		</div>
	{/if}

	<div class="project-links">
		{#if project.githubUrl}
			<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
				<Github size={16} />
				GitHub
			</a>
		{/if}
		{#if project.demoUrl}
			<a href={project.demoUrl} target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
				<ExternalLink size={16} />
				Demo
			</a>
		{/if}
		{#if project.doi}
			<a
				href={project.doi.startsWith('https://') ? project.doi : `https://doi.org/${project.doi}`}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-secondary"
			>
				DOI
			</a>
		{/if}
	</div>
</div>

<style>
	.project-card {
		position: relative;
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-3);
	}

	.project-type {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
	}

	.type-icon {
		font-size: var(--font-size-base);
	}

	.type-text {
		text-transform: capitalize;
		font-weight: 500;
	}

	.year {
		background-color: var(--color-hover);
		color: var(--color-text);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
	}

	.featured-badge {
		background: linear-gradient(135deg, #fbbf24, #f59e0b);
		color: white;
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: var(--space-1);
	}

	.project-title {
		margin: 0 0 var(--space-2) 0;
		font-size: var(--font-size-xl);
		line-height: 1.3;
	}

	.project-status {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		margin-bottom: var(--space-3);
	}

	.status-badge {
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
		text-transform: capitalize;
	}

	.project-description {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: var(--space-4);
	}

	.technologies {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-bottom: var(--space-4);
	}

	.tech-tag {
		background-color: rgba(var(--base-color-rgb), 0.05);
		color: var(--color-text);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		font-weight: 500;
	}

	.project-links {
		display: flex;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.project-links .btn {
		display: flex;
		align-items: center;
		gap: var(--space-1);
	}

	@media (max-width: 768px) {
		.project-header {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-2);
			margin-bottom: var(--space-2);
		}

		.project-type {
			font-size: var(--font-size-sm);
		}

		.project-status {
			margin-bottom: var(--space-2);
		}

		.project-title {
			font-size: var(--font-size-lg);
			margin-bottom: var(--space-2);
		}

		.project-description {
			font-size: var(--font-size-sm);
			margin-bottom: var(--space-3);
		}

		.technologies {
			margin-bottom: var(--space-3);
		}

		.tech-tag {
			font-size: var(--font-size-sm);
			padding: var(--space-1) var(--space-2);
		}

		.project-links {
			flex-direction: column;
			gap: var(--space-2);
		}

		.project-links .btn {
			width: 100%;
			justify-content: center;
		}
	}

	@media (max-width: 480px) {
		.project-header {
			gap: var(--space-1);
		}

		.project-type {
			gap: var(--space-1);
		}

		.project-title {
			font-size: var(--font-size-lg);
		}

		.project-description {
			font-size: var(--font-size-base);
		}

		.featured-badge {
			font-size: var(--font-size-sm);
			padding: var(--space-1) var(--space-2);
		}

		.year {
			font-size: var(--font-size-sm);
			padding: var(--space-1) var(--space-2);
		}

		.status-badge {
			font-size: var(--font-size-sm);
			padding: var(--space-1) var(--space-2);
		}
	}
</style>

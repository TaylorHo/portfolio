<script lang="ts">
	import { personalInfo } from '$lib/data/personal';
	import { resume } from '$lib/data/resume';
	import { Briefcase, GraduationCap, Award } from '@lucide/svelte';

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-US', {
			month: 'short',
			year: 'numeric'
		});
	}

	function formatDateRange(startDate: string, endDate?: string): string {
		const start = formatDate(startDate);
		const end = endDate ? formatDate(endDate) : 'Present';
		return `${start} - ${end}`;
	}
</script>

<svelte:head>
	<title>Resume - {personalInfo.name}</title>
	<meta
		name="description"
		content="Professional experience and academic background of {personalInfo.name}"
	/>
</svelte:head>

<div class="resume-page">
	<div class="container">
		<div class="page-header">
			<h1>Resume</h1>
			<p class="page-description">
				My professional journey in physics, software engineering and research, including work
				experience and academic achievements.
			</p>
			<!-- <div class="download-section">
				<button class="btn btn-primary" disabled>
					<Download size={20} />
					Download PDF
				</button>
			</div> -->
		</div>

		<div class="resume-content">
			<!-- Work Experience Section -->
			<section class="resume-section">
				<h2 class="section-title">
					<span class="section-icon"><Briefcase size={24} /></span>
					Work Experience
				</h2>
				<div class="timeline">
					{#each resume.workExperience as job}
						<div class="timeline-item">
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<div class="job-header">
									<div class="job-main">
										<h3 class="job-title">{job.title}</h3>
										<h4 class="job-company">{job.company}</h4>
										<p class="job-location">{job.location}</p>
									</div>
									<div class="job-date">
										{formatDateRange(job.startDate, job.endDate)}
									</div>
								</div>

								{#if job.description && job.description.length > 0}
									<div class="job-overview">
										{#if job.description.length === 1}
											<p class="job-description-single">{job.description[0]}</p>
										{:else}
											<ul class="job-description">
												{#each job.description as item}
													<li>{item}</li>
												{/each}
											</ul>
										{/if}
									</div>
								{/if}

								{#if job.projects && job.projects.length > 0}
									<div class="projects-section">
										<h4 class="projects-heading">Key Projects</h4>
										{#each job.projects as project}
											<div class="project">
												<h5 class="project-title">{project.title}</h5>

												{#if project.description.length === 1}
													<p class="project-description-single">{project.description[0]}</p>
												{:else}
													<ul class="project-description">
														{#each project.description as item}
															<li>{item}</li>
														{/each}
													</ul>
												{/if}

												{#if project.technologies && project.technologies.length > 0}
													<div class="project-technologies">
														<span class="tech-label">Technologies:</span>
														<div class="tech-tags">
															{#each project.technologies as tech}
																<span class="tech-tag">{tech}</span>
															{/each}
														</div>
													</div>
												{/if}
											</div>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Education Section -->
			<section class="resume-section">
				<h2 class="section-title">
					<span class="section-icon"><GraduationCap size={24} /></span>
					Education
				</h2>
				<div class="timeline">
					{#each resume.education as edu}
						<div class="timeline-item">
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<div class="edu-header">
									<div class="edu-main">
										<h3 class="edu-degree">{edu.degree}</h3>
										<h4 class="edu-institution">{edu.institution}</h4>
										<p class="edu-location">{edu.location}</p>
									</div>
									<div class="edu-date">
										{formatDateRange(edu.startDate, edu.endDate)}
									</div>
								</div>

								{#if edu.description}
									<p class="edu-description">{edu.description}</p>
								{/if}

								{#if edu.thesis}
									<div class="thesis">
										<span class="thesis-label">Thesis:</span>
										<span class="thesis-title">{edu.thesis}</span>
									</div>
								{/if}

								{#if edu.gpa}
									<div class="gpa">
										<span class="gpa-label">GPA:</span>
										<span class="gpa-value">{edu.gpa}</span>
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Extra Capacitation Section -->
			<section class="resume-section">
				<h2 class="section-title">
					<span class="section-icon"><Award size={24} /></span>
					Extra Capacitation
				</h2>
				<div class="timeline">
					{#each resume.extraCapacitation as cert}
						<div class="timeline-item">
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<div class="cert-header">
									<div class="cert-main">
										<h3 class="cert-title">{cert.title}</h3>
										<h4 class="cert-institution">{cert.institution}</h4>
									</div>
									<div class="cert-date">
										{formatDate(cert.completionDate)}
									</div>
								</div>

								{#if cert.description}
									<p class="cert-description">{cert.description}</p>
								{/if}

								{#if cert.credentialUrl}
									<div class="credential">
										<span class="credential-label">Credential:</span>
										<a
											href={cert.credentialUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="credential-link"
										>
											View Certificate
										</a>
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</section>
		</div>
	</div>
</div>

<style>
	.resume-page {
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
		margin: 0 auto var(--space-6) auto;
		line-height: 1.6;
	}

	/* .download-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-2);
	}

	.download-section .btn {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	} */

	.resume-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.resume-section {
		margin-bottom: var(--space-16);
	}

	.section-title {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		font-size: var(--font-size-2xl);
		font-weight: 600;
		margin-bottom: var(--space-8);
		color: var(--color-text);
		border-bottom: 2px solid var(--color-border);
		padding-bottom: var(--space-2);
	}

	.section-icon {
		font-size: var(--font-size-xl);
	}

	.timeline {
		position: relative;
		padding-left: var(--space-6);
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 12px;
		top: 0;
		bottom: 0;
		width: 2px;
		background-color: var(--color-border);
	}

	.timeline-item {
		position: relative;
		margin-bottom: var(--space-12);
	}

	.timeline-item:last-child {
		margin-bottom: 0;
	}

	.timeline-marker {
		position: absolute;
		left: -18px;
		top: 8px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: var(--color-primary);
		border: 3px solid var(--color-background);
		z-index: 1;
	}

	.timeline-content {
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-6);
		box-shadow: var(--shadow-sm);
	}

	.job-header,
	.edu-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--space-4);
	}

	.job-title,
	.edu-degree {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-text);
		margin: 0 0 var(--space-1) 0;
	}

	.job-company,
	.edu-institution {
		font-size: var(--font-size-lg);
		font-weight: 500;
		color: var(--color-primary);
		margin: 0 0 var(--space-1) 0;
	}

	.job-location,
	.edu-location {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		margin: 0;
	}

	.job-date,
	.edu-date {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		font-weight: 500;
		text-align: right;
		white-space: nowrap;
	}

	.job-description {
		margin: 0;
		padding-left: var(--space-4);
	}

	.job-description li {
		margin-bottom: var(--space-2);
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.job-description-single {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.projects-section {
		margin-top: var(--space-4);
	}

	.projects-heading {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-text);
		margin: 0 0 var(--space-4) 0;
		padding-bottom: var(--space-2);
		border-bottom: 1px solid var(--color-border);
	}

	.project {
		margin-bottom: var(--space-6);
		padding: var(--space-4);
		background-color: rgba(var(--base-color-rgb), 0.04);
		border-radius: var(--radius-md);
		/* border-left: 3px solid var(--color-primary); */
	}

	.project:last-child {
		margin-bottom: 0;
	}

	.project-title {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-text);
		margin: 0 0 var(--space-3) 0;
	}

	.project-description {
		margin: 0 0 var(--space-4) 0;
		padding-left: var(--space-4);
	}

	.project-description li {
		margin-bottom: var(--space-2);
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.project-description-single {
		margin: 0 0 var(--space-4) 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.tech-label {
		font-weight: 500;
		color: var(--color-text);
		margin-bottom: var(--space-2);
		display: block;
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.tech-tag {
		display: inline-block;
		padding: var(--space-1) var(--space-3);
		background-color: var(--color-primary);
		color: white;
		font-size: var(--font-size-sm);
		font-weight: 500;
		border-radius: var(--radius-full);
		white-space: nowrap;
	}

	.edu-description {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: var(--space-3);
	}

	.thesis {
		margin-bottom: var(--space-2);
	}

	.thesis-label {
		font-weight: 500;
		color: var(--color-text);
	}

	.thesis-title {
		color: var(--color-text-secondary);
		font-style: italic;
	}

	.gpa {
		color: var(--color-text-secondary);
	}

	.gpa-label {
		font-weight: 500;
	}

	.gpa-value {
		color: var(--color-primary);
		font-weight: 600;
	}

	.cert-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--space-4);
	}

	.cert-title {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-text);
		margin: 0 0 var(--space-1) 0;
	}

	.cert-institution {
		font-size: var(--font-size-lg);
		font-weight: 500;
		color: var(--color-primary);
		margin: 0;
	}

	.cert-date {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		font-weight: 500;
		text-align: right;
		white-space: nowrap;
	}

	.cert-description {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: var(--space-3);
	}

	.credential-label {
		font-weight: 500;
		color: var(--color-text);
		margin-right: var(--space-2);
	}

	.credential-link {
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.credential-link:hover {
		color: var(--color-primary-hover);
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.resume-page {
			padding: var(--space-8) 0 var(--space-16) 0;
		}

		.page-header h1 {
			font-size: var(--font-size-3xl);
		}

		.timeline {
			padding-left: var(--space-4);
		}

		.timeline-marker {
			left: -6px;
		}

		.job-header,
		.edu-header,
		.cert-header {
			flex-direction: column;
			gap: var(--space-2);
		}

		.job-date,
		.edu-date,
		.cert-date {
			text-align: left;
		}

		.section-title {
			font-size: var(--font-size-xl);
		}

		.project {
			padding: var(--space-3);
		}

		.projects-heading {
			font-size: var(--font-size-base);
		}

		.project-title {
			font-size: var(--font-size-sm);
		}

		.tech-tags {
			gap: var(--space-1);
		}

		.tech-tag {
			padding: calc(var(--space-1) * 0.75) var(--space-2);
			font-size: var(--font-size-xs);
		}
	}
</style>

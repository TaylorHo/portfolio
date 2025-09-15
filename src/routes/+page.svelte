<script lang="ts">
	import { personalInfo } from '$lib/data/personal';
	import { MapPin, BookOpen, Code, GraduationCap } from '@lucide/svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{personalInfo.name} - {personalInfo.title}</title>
	<meta
		name="description"
		content="{m.personal_portfolio_of()} {personalInfo.name}, {personalInfo.title}"
	/>
</svelte:head>

<div class="hero">
	<div class="container">
		<div class="hero-content">
			<div class="hero-image">
				<div class="profile-photo">
					<img
						src="/images/profile/light.webp"
						width={240}
						height={240}
						alt={personalInfo.name}
						class="profile-img light-theme"
					/>
					<img
						src="/images/profile/dark.webp"
						width={240}
						height={240}
						alt={personalInfo.name}
						class="profile-img dark-theme"
					/>
				</div>
				<!-- Floating decorations for dark theme -->
				<div class="floating-decorations">
					<span class="decoration moon">
						<img
							src="/images/profile/decorations/moon.webp"
							alt={m.dark_theme_decoration_name()}
							width={36}
							height={36}
						/>
					</span>
				</div>
				<!-- Floating decorations for light theme -->
				<div class="floating-decorations-light">
					<span class="decoration atom">
						<img
							src="/images/profile/decorations/atom.webp"
							alt={m.light_theme_decoration_name()}
							width={36}
							height={36}
						/>
					</span>
				</div>
			</div>

			<div class="hero-text">
				<h1 class="hero-title">{personalInfo.name}</h1>
				<h2 class="hero-subtitle">{personalInfo.title}</h2>
				<p class="hero-location">
					<MapPin size={20} class="location-icon" />{personalInfo.location}
				</p>

				<p class="hero-bio">{personalInfo.bio}</p>

				<div class="social-links">
					{#each personalInfo.featuredLinks as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="social-link btn btn-secondary"
							title={social.label}
						>
							<span class="social-icon">
								<img
									src={`/images/social/${social.icon}`}
									width={social.iconSize}
									height={social.iconSize}
									alt={social.icon}
								/>
							</span>
							<span class="social-name">{social.name}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="highlights">
			<div class="container">
				<div class="highlights-tagline">
					<p>{m.explore_my_work()}</p>
				</div>
				<div class="highlights-grid">
					<div class="highlight-card">
						<div class="highlight-icon"><BookOpen size={28} /></div>
						<h3>{m.publications()}</h3>
						<a href={localizeHref('/publications')} class="btn btn-primary highlight-btn"
							>{m.view_all()}</a
						>
					</div>

					<div class="highlight-card">
						<div class="highlight-icon"><Code size={28} /></div>
						<h3>{m.projects()}</h3>
						<a href={localizeHref('/projects')} class="btn btn-primary highlight-btn"
							>{m.explore()}</a
						>
					</div>

					<div class="highlight-card">
						<div class="highlight-icon"><GraduationCap size={28} /></div>
						<h3>{m.experience()}</h3>
						<a href={localizeHref('/resume')} class="btn btn-primary highlight-btn"
							>{m.view_resume()}</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.hero {
		background: var(--color-surface);
		padding: var(--space-8) 0;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: var(--space-12);
		align-items: center;
		padding-bottom: var(--space-6);
	}

	.hero-image {
		display: flex;
		justify-content: center;
		position: relative;
		padding: var(--space-8);
	}

	.profile-photo {
		width: 240px;
		height: 240px;
		border-radius: 50%;
		overflow: hidden;
		border: 4px solid var(--color-border);
		box-shadow: var(--shadow-lg);
		position: relative;
	}

	.profile-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Show light image by default and when light theme is active */
	:root .profile-img.dark-theme,
	:root[data-theme='light'] .profile-img.dark-theme {
		display: none;
	}

	:root .profile-img.light-theme,
	:root[data-theme='light'] .profile-img.light-theme {
		display: block;
	}

	/* Show dark image when dark theme is active */
	:root[data-theme='dark'] .profile-img.light-theme {
		display: none;
	}

	:root[data-theme='dark'] .profile-img.dark-theme {
		display: block;
	}

	/* Floating decorations - only visible in dark theme */
	.floating-decorations {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	:root[data-theme='dark'] .floating-decorations {
		opacity: 1;
	}

	.decoration {
		position: absolute;
		font-size: 2rem;
		animation: float 6s ease-in-out infinite;
	}

	.moon {
		top: 12%;
		left: 15%;
		animation-delay: 0s;
	}

	/* Floating decorations for light theme */
	.floating-decorations-light {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	:root[data-theme='dark'] .floating-decorations-light {
		opacity: 0;
	}

	.atom {
		top: 12%;
		left: 15%;
		animation-delay: 0s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		33% {
			transform: translateY(-12px) rotate(3deg);
		}
		66% {
			transform: translateY(6px) rotate(-2deg);
		}
	}

	.hero-text {
		max-width: 600px;
	}

	.hero-title {
		font-size: var(--font-size-4xl);
		font-weight: 700;
		margin: 0 0 var(--space-2) 0;
		color: var(--color-text);
	}

	.hero-subtitle {
		font-size: var(--font-size-xl);
		font-weight: 500;
		color: var(--color-text-secondary);
		margin: 0 0 var(--space-3) 0;
	}

	.hero-location {
		color: var(--color-text-secondary);
		margin: 0 0 var(--space-6) 0;
		font-size: var(--font-size-lg);
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	:global(.location-icon) {
		flex-shrink: 0;
	}

	.hero-bio {
		font-size: var(--font-size-lg);
		line-height: 1.7;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-8);
	}

	.social-links {
		display: flex;
		gap: var(--space-3);
		margin-bottom: var(--space-8);
		flex-wrap: wrap;
	}

	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		font-size: var(--font-size-sm);
	}

	.social-icon {
		font-size: var(--font-size-base);
		display: flex;
	}

	.highlights {
		margin-top: var(--space-16);
	}

	.highlights-tagline {
		text-align: center;
		margin-bottom: var(--space-6);
	}

	.highlights-tagline p {
		color: var(--color-text-secondary);
		font-size: var(--font-size-lg);
		margin: 0;
		font-weight: 500;
	}

	.highlights-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-4);
		width: 100%;
	}

	.highlight-card {
		background-color: var(--color-background);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-4) var(--space-6);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		transition: all 0.2s ease;
		text-decoration: none;
	}

	.highlight-card:hover {
		box-shadow: var(--shadow-md);
		transform: translateY(-2px);
	}

	.highlight-icon {
		color: var(--color-primary);
		flex-shrink: 0;
		display: flex;
	}

	.highlight-card h3 {
		font-size: var(--font-size-base);
		margin: 0;
		font-weight: 600;
		color: var(--color-text);
	}

	.highlight-btn {
		font-size: var(--font-size-sm);
		padding: var(--space-1) var(--space-3);
		align-self: flex-start;
	}

	@media (max-width: 768px) {
		.hero {
			padding: var(--space-6) 0;
			min-height: 100vh;
		}

		.hero-content {
			grid-template-columns: 1fr;
			gap: var(--space-6);
			text-align: center;
		}

		.profile-photo {
			width: 160px;
			height: 160px;
		}

		.hero-title {
			font-size: var(--font-size-2xl);
		}

		.hero-subtitle {
			font-size: var(--font-size-lg);
		}

		.social-links {
			justify-content: center;
		}

		.highlights {
			margin-top: var(--space-8);
		}

		.highlights-tagline {
			margin-bottom: var(--space-4);
		}

		.highlights-grid {
			grid-template-columns: 1fr;
			gap: var(--space-3);
		}

		.highlight-card {
			padding: var(--space-3) var(--space-4);
			flex-direction: column;
			text-align: center;
			gap: var(--space-3);
		}

		.highlight-btn {
			align-self: center;
		}
	}
</style>

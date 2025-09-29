<script lang="ts">
	import { page } from '$app/state';
	import { personalInfo } from '$lib/data/personal';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { ArrowLeft, TriangleAlert, House } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';

	const errorStatus = $derived(page.status);
	const errorMessage = $derived(page.error?.message);

	const is404 = $derived(errorStatus === 404);
</script>

<svelte:head>
	<title>{errorStatus} - {personalInfo.name}</title>
	<meta name="description" content="{m.error()} {errorStatus} - {personalInfo.name}" />
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="error-container">
	<div class="container">
		{#if is404}
			<!-- 404 Page Not Found -->
			<div class="error-content">
				<div class="error-icon">
					<div class="error-number">404</div>
				</div>

				<div class="error-text">
					<h1 class="error-title">{m.page_not_found_title()}</h1>
					<p class="error-description">
						{m.page_not_found_description()}
					</p>

					<div class="error-actions">
						<a href={localizeHref('/')} class="btn btn-primary">
							<House size={18} />
							{m.go_home()}
						</a>
						<button onclick={() => history.back()} class="btn btn-secondary">
							<ArrowLeft size={18} />
							{m.go_back()}
						</button>
					</div>
				</div>
			</div>
		{:else}
			<!-- General Error Page -->
			<div class="error-content">
				<div class="error-icon">
					<TriangleAlert size={64} class="alert-icon" />
				</div>

				<div class="error-text">
					<h1 class="error-title">{m.something_went_wrong_title()}</h1>
					<div class="error-details">
						<p class="error-status">{m.error()} {errorStatus}</p>
						{#if errorMessage}
							<p class="error-message">{errorMessage}</p>
						{/if}
					</div>

					<p class="error-description">
						{m.something_went_wrong_description()}
					</p>

					<div class="error-actions">
						<a href={localizeHref('/')} class="btn btn-primary">
							<House size={18} />
							{m.go_home()}
						</a>
						<button onclick={() => location.reload()} class="btn btn-secondary">
							{m.try_again()}
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.error-container {
		min-height: calc(100vh - 64px); /* Account for navigation height */
		background-color: var(--color-surface);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-8) 0;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.error-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 600px;
		gap: var(--space-8);
	}

	.error-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text-secondary);
	}

	.error-number {
		font-size: 8rem;
		font-weight: 700;
		color: var(--color-primary);
		line-height: 1;
		opacity: 0.8;
	}

	:global(.alert-icon) {
		color: var(--color-primary);
		opacity: 0.8;
	}

	.error-text {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		align-items: center;
	}

	.error-title {
		font-size: var(--font-size-3xl);
		font-weight: 600;
		color: var(--color-text);
		margin: 0;
	}

	.error-details {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.error-status {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-primary);
		margin: 0;
	}

	.error-message {
		font-size: var(--font-size-base);
		color: var(--color-text-secondary);
		margin: 0;
		padding: var(--space-3) var(--space-4);
		background-color: var(--color-background);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		font-family: monospace;
	}

	.error-description {
		font-size: var(--font-size-lg);
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin: 0;
		max-width: 480px;
	}

	.error-actions {
		display: flex;
		gap: var(--space-3);
		flex-wrap: wrap;
		justify-content: center;
		margin-top: var(--space-2);
	}

	.error-actions .btn {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	@media (max-width: 768px) {
		.error-container {
			padding: var(--space-6) var(--space-4);
		}

		.error-content {
			gap: var(--space-6);
		}

		.error-number {
			font-size: 6rem;
		}

		.error-title {
			font-size: var(--font-size-2xl);
		}

		.error-description {
			font-size: var(--font-size-base);
		}

		.error-actions {
			flex-direction: column;
			width: 100%;
			max-width: 280px;
		}

		.error-actions .btn {
			justify-content: center;
		}
	}
</style>

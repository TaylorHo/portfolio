<script lang="ts">
	import { personalInfo } from '$lib/data/personal';
	import { m } from '$lib/paraglide/messages';
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<p class="footer-text">
				© {new Date().getFullYear()}
				{personalInfo.name}. {m.all_rights_reserved()}.
			</p>

			<div class="social-links">
				{#each personalInfo.footerLinks as social}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						class="social-link"
						title={social.label}
						aria-label={social.label}
					>
						{#if social.svg}
							{@html social.svg}
						{:else if social.icon}
							<social.icon size={18} />
						{:else}
							{social.label}
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: var(--color-surface);
		border-top: 1px solid var(--color-border);
		padding: var(--space-4) 0;
		margin-top: auto;
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--space-4);
	}

	.footer-text {
		margin: 0;
		color: var(--color-text-secondary);
		font-size: var(--font-size-sm);
	}

	.social-links {
		display: flex;
		gap: var(--space-3);
		align-items: center;
	}

	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		color: var(--color-text-secondary);
		background-color: transparent;
		transition: all 0.2s ease;
		text-decoration: none;
	}

	.social-link:hover {
		color: var(--color-primary);
		background-color: var(--color-hover);
		transform: translateY(-2px);
	}

	:global(.bluesky-icon) {
		width: 18px;
		height: 18px;
	}

	@media (max-width: 768px) {
		.footer-content {
			flex-direction: column;
			gap: var(--space-3);
			text-align: center;
			padding: 0 var(--space-3);
		}

		.footer-text {
			font-size: var(--font-size-sm);
		}

		.social-links {
			justify-content: center;
			gap: var(--space-2);
		}

		.social-link {
			width: 40px;
			height: 40px;
		}
	}

	@media (max-width: 480px) {
		.footer {
			padding: var(--space-3) 0;
		}

		.footer-content {
			gap: var(--space-2);
		}

		.social-link {
			width: 36px;
			height: 36px;
		}
	}
</style>

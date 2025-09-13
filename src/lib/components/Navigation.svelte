<script lang="ts">
	import { page } from '$app/state';
	import { personalInfo } from '$lib/data/personal';
	import { Moon, Sun, Globe } from '@lucide/svelte';

	interface Props {
		isDark: boolean;
		toggleTheme: () => void;
	}

	let { isDark, toggleTheme }: Props = $props();

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/publications', label: 'Publications' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/resume', label: 'Resume' }
	];

	function isActive(href: string): boolean {
		if (href === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(href);
	}
</script>

<nav class="nav">
	<div class="nav-container">
		<div class="nav-brand">
			<a href="/">{personalInfo.name}</a>
		</div>

		<div class="nav-links">
			{#each navItems as item}
				<a href={item.href} class="nav-link" class:active={isActive(item.href)}>
					{item.label}
				</a>
			{/each}
		</div>

		<div class="nav-controls">
			<button class="theme-toggle" title="Toggle theme" onclick={toggleTheme}>
				{#if isDark}
					<Sun size={18} />
				{:else}
					<Moon size={18} />
				{/if}
			</button>
			<button class="lang-toggle" title="Toggle language">
				<Globe size={18} />
				<span>EN</span>
			</button>
		</div>
	</div>
</nav>

<style>
	.nav {
		background-color: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		z-index: 100;
		backdrop-filter: blur(8px);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--space-4);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
	}

	.nav-brand a {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-text);
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		gap: var(--space-6);
	}

	.nav-link {
		color: var(--color-text-secondary);
		text-decoration: none;
		font-weight: 500;
		padding: var(--space-2) var(--space-3);
		border-radius: var(--radius-md);
		transition: all 0.2s ease;
	}

	.nav-link:hover {
		color: var(--color-text);
		background-color: var(--color-hover);
	}

	.nav-link.active {
		color: var(--color-primary);
		background-color: var(--color-primary);
		background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
	}

	.nav-controls {
		display: flex;
		gap: var(--space-2);
	}

	.theme-toggle,
	.lang-toggle {
		background: none;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-2) var(--space-3);
		cursor: pointer;
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		gap: var(--space-1);
	}

	.theme-toggle:hover,
	.lang-toggle:hover {
		border-color: var(--color-primary);
		color: var(--color-text);
	}

	@media (max-width: 768px) {
		.nav-container {
			padding: 0 var(--space-3);
		}

		.nav-links {
			gap: var(--space-3);
		}

		.nav-link {
			padding: var(--space-1) var(--space-2);
			font-size: var(--font-size-sm);
		}

		.nav-brand a {
			font-size: var(--font-size-lg);
		}
	}
</style>

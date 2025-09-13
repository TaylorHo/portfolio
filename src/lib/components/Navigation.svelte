<script lang="ts">
	import { page } from '$app/state';
	import { personalInfo } from '$lib/data/personal';
	import { Moon, Sun, Globe, ChevronDown } from '@lucide/svelte';
	import { baseLocale, locales, getLocale, setLocale, localizeHref } from '$lib/paraglide/runtime';

	type Locale = (typeof locales)[number];

	interface Props {
		isDark: boolean;
		toggleTheme: () => void;
	}

	let { isDark, toggleTheme }: Props = $props();

	// Language switcher state
	let showLanguageDropdown = $state(false);
	let currentLocale = $state(getLocale());

	// Make navItems reactive to locale changes
	const navItems = $derived([
		{ href: localizeHref('/'), baseHref: '/', label: 'Home' },
		{ href: localizeHref('/publications'), baseHref: '/publications', label: 'Publications' },
		{ href: localizeHref('/projects'), baseHref: '/projects', label: 'Projects' },
		{ href: localizeHref('/resume'), baseHref: '/resume', label: 'Resume' }
	]);

	function isActive(baseHref: string): boolean {
		// Remove locale prefix from current pathname for comparison
		let currentPath: string = page.url.pathname;

		// If current locale is not the base locale, remove the locale prefix
		if (currentLocale !== baseLocale) {
			const localePrefix = `/${currentLocale}`;
			if (currentPath.startsWith(localePrefix)) {
				const pathWithoutLocale = currentPath.slice(localePrefix.length);
				currentPath = pathWithoutLocale || '/';
			}
		}

		// Compare with base href
		if (baseHref === '/') {
			return currentPath === '/';
		}
		return currentPath.startsWith(baseHref);
	}

	function toggleLanguageDropdown() {
		showLanguageDropdown = !showLanguageDropdown;
	}

	function handleLocaleChange(locale: Locale) {
		setLocale(locale);
		currentLocale = locale;
		showLanguageDropdown = false;
	}

	// Update current locale when it changes (e.g., from URL navigation)
	$effect(() => {
		currentLocale = getLocale();
	});

	// Close dropdown when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.language-switcher')) {
			showLanguageDropdown = false;
		}
	}

	// Add/remove event listener for clicking outside
	$effect(() => {
		if (showLanguageDropdown) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<nav class="nav">
	<div class="nav-container">
		<div class="nav-brand">
			<a href={localizeHref('/')}>{personalInfo.name}</a>
		</div>

		<div class="nav-links">
			{#each navItems as item}
				<a href={item.href} class="nav-link" class:active={isActive(item.baseHref)}>
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

			<div class="language-switcher">
				<button
					class="lang-toggle"
					title="Select language"
					onclick={toggleLanguageDropdown}
					class:active={showLanguageDropdown}
				>
					<Globe size={18} />
					<span>{currentLocale.toUpperCase()}</span>
					<ChevronDown size={14} class={`chevron ${showLanguageDropdown ? 'rotated' : ''}`} />
				</button>

				{#if showLanguageDropdown}
					<div class="language-dropdown">
						{#each locales as locale}
							<button
								class="language-option"
								class:current={locale === currentLocale}
								onclick={() => handleLocaleChange(locale)}
							>
								{locale.toUpperCase()}
							</button>
						{/each}
					</div>
				{/if}
			</div>
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

	.lang-toggle.active {
		border-color: var(--color-primary);
		color: var(--color-text);
	}

	.language-switcher {
		position: relative;
	}

	:global(.chevron) {
		transition: transform 0.2s ease;
	}

	:global(.chevron.rotated) {
		transform: rotate(180deg);
	}

	.language-dropdown {
		position: absolute;
		top: calc(100% + var(--space-1));
		right: 0;
		min-width: 80px;
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		z-index: 1000;
		overflow: hidden;
	}

	.language-option {
		width: 100%;
		background: none;
		border: none;
		padding: var(--space-2) var(--space-3);
		cursor: pointer;
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		transition: all 0.2s ease;
		text-align: left;
		display: flex;
		align-items: center;
	}

	.language-option:hover {
		background-color: var(--color-hover);
		color: var(--color-text);
	}

	.language-option.current {
		color: var(--color-primary);
		background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
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

		.theme-toggle,
		.lang-toggle {
			padding: var(--space-1) var(--space-2);
		}

		.language-dropdown {
			right: -var(--space-2);
		}
	}
</style>

<script lang="ts">
	import { page } from '$app/state';
	import { personalInfo } from '$lib/data/personal';
	import { Moon, Sun, Globe, ChevronDown, Menu, X } from '@lucide/svelte';
	import { locales, getLocale, setLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';

	type Locale = (typeof locales)[number];

	interface Props {
		isDark: boolean;
		toggleTheme: () => void;
	}

	let { isDark, toggleTheme }: Props = $props();

	// Mobile menu state
	let showMobileMenu = $state(false);
	// Language switcher state
	let showLanguageDropdown = $state(false);
	let currentLocale = $state(getLocale());

	// Make navItems reactive to locale changes
	const navItems = $derived([
		{ href: localizeHref('/'), label: m.topbar_tab_home() },
		{
			href: localizeHref('/publications'),
			label: m.topbar_tab_publications()
		},
		{ href: localizeHref('/projects'), label: m.topbar_tab_projects() },
		{ href: localizeHref('/resume'), label: m.topbar_tab_resume() },
		{ href: localizeHref('/blog'), label: 'Blog' }
	]);

	function isActive(href: string): boolean {
		let currentPath: string = page.url.pathname;

		if (href === localizeHref('/')) {
			return currentPath === href;
		}

		return currentPath.startsWith(href);
	}

	function toggleMobileMenu() {
		showMobileMenu = !showMobileMenu;
	}

	function closeMobileMenu() {
		showMobileMenu = false;
	}

	function toggleLanguageDropdown() {
		showLanguageDropdown = !showLanguageDropdown;
	}

	function handleLocaleChange(locale: Locale) {
		setLocale(locale);
		currentLocale = locale;
		showLanguageDropdown = false;
		closeMobileMenu();
	}

	function handleOverlayKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			closeMobileMenu();
		}
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

		<!-- Desktop Navigation -->
		<div class="nav-links desktop-nav">
			{#each navItems as item}
				<a href={item.href} class="nav-link" class:active={isActive(item.href)}>
					{item.label}
				</a>
			{/each}
		</div>

		<div class="nav-controls">
			<!-- Desktop Controls -->
			<div class="desktop-controls">
				<button class="theme-toggle" title={m.topbar_toggle_theme()} onclick={toggleTheme}>
					{#if isDark}
						<Sun size={18} />
					{:else}
						<Moon size={18} />
					{/if}
				</button>

				<div class="language-switcher">
					<button
						class="lang-toggle"
						title={m.topbar_select_language()}
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

			<!-- Mobile Menu Button -->
			<button class="mobile-menu-button" onclick={toggleMobileMenu} aria-label="Toggle mobile menu">
				{#if showMobileMenu}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if showMobileMenu}
		<div
			class="mobile-overlay"
			role="button"
			tabindex="0"
			aria-label="Close mobile menu"
			onclick={closeMobileMenu}
			onkeydown={handleOverlayKeydown}
		></div>
	{/if}

	<!-- Mobile Navigation Menu -->
	{#if showMobileMenu}
		<div class="mobile-nav">
			<div class="mobile-nav-content">
				<div class="mobile-nav-links">
					{#each navItems as item}
						<a
							href={item.href}
							class="mobile-nav-link"
							class:active={isActive(item.href)}
							onclick={closeMobileMenu}
						>
							{item.label}
						</a>
					{/each}
				</div>

				<div class="mobile-nav-controls">
					<button class="mobile-theme-toggle" onclick={toggleTheme}>
						{#if isDark}
							<Sun size={20} />
						{:else}
							<Moon size={20} />
						{/if}
						<span>{m.topbar_toggle_theme()}</span>
					</button>

					<div class="mobile-language-switcher">
						<span class="mobile-lang-label">{m.topbar_select_language()}:</span>
						<div class="mobile-lang-options">
							{#each locales as locale}
								<button
									class="mobile-lang-option"
									class:current={locale === currentLocale}
									onclick={() => handleLocaleChange(locale)}
								>
									{locale.toUpperCase()}
								</button>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
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
		background-color: color-mix(in srgb, var(--color-primary) 20%, transparent);
	}

	.nav-controls {
		display: flex;
		gap: var(--space-2);
	}

	.desktop-controls {
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
		background-color: color-mix(in srgb, var(--color-primary) 20%, transparent);
	}

	/* Mobile Menu Button */
	.mobile-menu-button {
		display: none;
		background: none;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-2);
		cursor: pointer;
		color: var(--color-text-secondary);
		transition: all 0.2s ease;
	}

	.mobile-menu-button:hover {
		border-color: var(--color-primary);
		color: var(--color-text);
	}

	/* Mobile Overlay */
	.mobile-overlay {
		display: none;
		position: fixed;
		top: 64px; /* Start below the navigation bar */
		left: 0;
		width: 100%;
		height: calc(100vh - 64px); /* Cover remaining viewport height */
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}

	/* Mobile Navigation */
	.mobile-nav {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background-color: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
		box-shadow: var(--shadow-lg);
		z-index: 1000;
	}

	.mobile-nav-content {
		padding: var(--space-4);
	}

	.mobile-nav-links {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		margin-bottom: var(--space-6);
	}

	.mobile-nav-link {
		display: block;
		padding: var(--space-3) var(--space-4);
		color: var(--color-text-secondary);
		text-decoration: none;
		font-weight: 500;
		border-radius: var(--radius-md);
		transition: all 0.2s ease;
		font-size: var(--font-size-base);
	}

	.mobile-nav-link:hover,
	.mobile-nav-link.active {
		color: var(--color-primary);
		background-color: color-mix(in srgb, var(--color-primary) 20%, transparent);
	}

	.mobile-nav-controls {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		padding-top: var(--space-4);
		border-top: 1px solid var(--color-border);
	}

	.mobile-theme-toggle {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		background: none;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		color: var(--color-text-secondary);
		font-size: var(--font-size-base);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.mobile-theme-toggle:hover {
		border-color: var(--color-primary);
		color: var(--color-text);
	}

	.mobile-language-switcher {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.mobile-lang-label {
		font-size: var(--font-size-sm);
		font-weight: 500;
		color: var(--color-text);
	}

	.mobile-lang-options {
		display: flex;
		gap: var(--space-2);
	}

	.mobile-lang-option {
		flex: 1;
		padding: var(--space-2) var(--space-3);
		background: none;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		color: var(--color-text-secondary);
		font-size: var(--font-size-sm);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.mobile-lang-option:hover {
		border-color: var(--color-primary);
		color: var(--color-text);
	}

	.mobile-lang-option.current {
		border-color: var(--color-primary);
		color: var(--color-primary);
		background-color: color-mix(in srgb, var(--color-primary) 20%, transparent);
	}

	@media (max-width: 768px) {
		.nav-container {
			padding: 0 var(--space-3);
		}

		.desktop-nav {
			display: none;
		}

		.desktop-controls {
			display: none;
		}

		.mobile-menu-button {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.mobile-overlay {
			display: block;
		}

		.nav-brand a {
			font-size: var(--font-size-lg);
		}
	}

	@media (min-width: 769px) {
		.mobile-nav {
			display: none;
		}
	}
</style>

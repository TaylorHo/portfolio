<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { browser } from '$app/environment';
	import PageTransition from './transition.svelte';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { setContext } from 'svelte';

	let { children, data } = $props();

	// Theme state management
	let isDark = $state(false);

	// Sync with initial theme set in app.html
	$effect(() => {
		if (browser) {
			const currentTheme = document.documentElement.getAttribute('data-theme');
			isDark = currentTheme === 'dark';
		}
	});

	// Update DOM and localStorage when theme changes
	$effect(() => {
		if (browser) {
			document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		}
	});

	function toggleTheme() {
		isDark = !isDark;
	}

	// Provide theme context to child components
	setContext('theme', {
		get isDark() {
			return isDark;
		},
		toggleTheme
	});
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" href="/rss.xml" />
</svelte:head>

<div class="app-layout">
	<Navigation {isDark} {toggleTheme} />

	<main>
		<PageTransition url={data.url}>
			{@render children?.()}
		</PageTransition>
	</main>

	<Footer />
</div>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<style>
	.app-layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		background-color: var(--color-background);
	}
</style>

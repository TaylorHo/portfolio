<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from './transition.svelte';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { themeStore } from '$lib/services/theme';

	let { children, data } = $props();
	let isDark = $state(false);

	themeStore.subscribe((value) => {
		isDark = value;
	});
</script>

<div class="app-layout">
	<Navigation {isDark} toggleTheme={() => themeStore.toggle()} />

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

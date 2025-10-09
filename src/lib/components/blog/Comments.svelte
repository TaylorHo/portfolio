<script lang="ts">
	export const ssr = false;

	import { getLocale } from '$lib/paraglide/runtime';
	import { themeStore } from '$lib/services/theme';

	let locale = getLocale();
	let isDark = $state(false);
	let giscusContainer: HTMLDivElement;

	// Subscribe to theme changes
	themeStore.subscribe((value) => {
		isDark = value;
		// Send theme update to giscus iframe if it exists
		if (giscusContainer) {
			const iframe = giscusContainer.querySelector('iframe.giscus-frame') as HTMLIFrameElement;
			if (iframe?.contentWindow) {
				const message = {
					setConfig: {
						theme: isDark ? 'dark' : 'light'
					}
				};
				iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
			}
		}
	});
</script>

<div bind:this={giscusContainer}>
	<script
		src="https://giscus.app/client.js"
		data-repo="TaylorHo/portfolio"
		data-repo-id="R_kgDOPv6A7w"
		data-category="Blog Posts"
		data-category-id="DIC_kwDOPv6A784CwVBR"
		data-mapping="title"
		data-strict="0"
		data-reactions-enabled="1"
		data-emit-metadata="0"
		data-input-position="top"
		data-theme={isDark ? 'dark' : 'light'}
		data-lang={locale.split('-')[0]}
		data-loading="lazy"
		crossorigin="anonymous"
		async
	></script>
</div>

export const prerender = true;
export const trailingSlash = 'always';

import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const load = async () => {
	if (browser) {
		posthog.init('phc_JBYFh2Ew3kdz3hfD8IIxV62Ml7ipQnAINBYflUv2608', {
			api_host: 'https://insights.hotay.dev',
			defaults: '2025-05-24'
		});
	}

	return;
};

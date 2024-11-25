import "@/css/tailwind.css";
import "@/css/prism.css";
import "@/css/extra.css";
import "katex/dist/katex.css";
import "@fontsource/inter/latin.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import ScrollTop from "@/components/ScrollTop";
import siteMetadata from "@/data/siteMetadata";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

if (typeof window !== "undefined") {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
		api_host:
			process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
		person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
		loaded: (posthog) => {
			if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
		},
	});
}

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
			<ScrollTop />
			<Head>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
			</Head>
			<PostHogProvider client={posthog}>
				<LayoutWrapper>
					<Component {...pageProps} />
				</LayoutWrapper>
			</PostHogProvider>
		</ThemeProvider>
	);
}

import "@/css/tailwind.css";
import "@/css/prism.css";
import "@/css/extra.css";
import "katex/dist/katex.css";
import "@fontsource/inter/latin.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import ScrollTop from "@/components/ScrollTop";
import Analytics from "@/components/analytics";
import siteMetadata from "@/data/siteMetadata";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

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
			<Analytics />
			<LayoutWrapper>
				<Component {...pageProps} />
			</LayoutWrapper>
		</ThemeProvider>
	);
}

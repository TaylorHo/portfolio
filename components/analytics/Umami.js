import siteMetadata from "@/data/siteMetadata";
import Script from "next/script";

const UmamiScript = () => {
	return (
		<Script
			async
			defer
			data-website-id={siteMetadata.analytics.umamiWebsiteId}
			src="https://cloud.umami.is/script.js" // Replace with your umami instance
		/>
	);
};

export default UmamiScript;

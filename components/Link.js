/* eslint-disable jsx-a11y/anchor-has-content */
import Link from "next/link";

const CustomLink = ({ href, ...rest }) => {
	const isInternalLink = href?.startsWith("/");
	const isAnchorLink = href?.startsWith("#");

	if (isInternalLink) {
		return <Link href={href} {...rest} />;
	}

	if (isAnchorLink) {
		return <a href={href} {...rest} />;
	}

	return (
		<a
			className="special-underline-new no-underline hover:text-gray-100 dark:hover:text-gray-100"
			target="_blank"
			rel="noopener noreferrer"
			href={href}
			{...rest}
		/>
	);
};

export default CustomLink;

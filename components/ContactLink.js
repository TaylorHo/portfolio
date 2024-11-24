const ContactLink = ({ socialMedia, href, contact }) => {
	return (
		<li className="duration-250 mr-2 inline cursor-pointer transition-colors ease-in sm:text-lg md:text-4xl">
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="whitespace-nowrap"
			>
				<span className="whitespace-nowrap duration-250 transition-colors ease-in">
					{socialMedia}
				</span>
				<span className="whitespace-nowrap font-light opacity-50">: </span>
				<a
					href={href}
					className="whitespace-nowrap duration-250 font-mono transition-colors ease-in hover:text-primary-500 dark:hover:text-primary-400"
				>
					{contact}
				</a>
			</a>
		</li>
	);
};

export default ContactLink;

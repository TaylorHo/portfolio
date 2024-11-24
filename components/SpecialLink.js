const SpecialLink = ({ link, title, description, site, image }) => {
	const openInNewTab = () => {
		window.open(link, "_blank", "noopener,noreferrer");
	};

	return (
		<div
			onClick={openInNewTab}
			className="flex w-100 my-0 py-0 mx-auto bg-white rounded-md shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-95 mb-4"
		>
			<div className="flex-1 p-8">
				<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
					{title}
				</div>
				<p className="mt-2 text-gray-500">{description}</p>
				<p className="text-gray-400">{site}</p>
			</div>
			<div className="flex-shrink-0 mr-6">
				<img
					className="w-full max-w-xs max-h-24 object-cover rounded-md"
					src={image}
					alt={site}
				/>
			</div>
		</div>
	);
};

export default SpecialLink;

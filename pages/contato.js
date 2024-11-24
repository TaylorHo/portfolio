import ContactLink from "@/components/ContactLink";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";

const Contact = () => {
	return (
		<>
			{/* TODO: change this list to be a list of "button like" options */}
			<PageSEO
				title={`Contato - ${siteMetadata.author}`}
				description="Onde me encontrar"
			/>
			<div className="mx-auto max-w-3xl overflow-hidden">
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
					Contato
				</h1>
				<div className="pt-10 pb-8">
					<ul className="font-semi-bold flex flex-col space-y-4">
						<ContactLink
							href="mailto:taylor@hotay.dev"
							socialMedia="email"
							contact="taylor@hotay.dev"
						/>
						<ContactLink
							href="https://github.com/TaylorHo"
							socialMedia="github"
							contact="github.com/TaylorHo"
						/>
						<ContactLink
							href="https://www.linkedin.com/in/hoffmann-taylor/"
							socialMedia="linkedin"
							contact="/in/hoffmann-taylor"
						/>

						<ContactLink
							href="https://instagram.com/hoffmann_taylor/"
							socialMedia="instagram"
							contact="@hoffmann_taylor"
						/>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Contact;

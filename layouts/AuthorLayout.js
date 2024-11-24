import Experience from "@/components/Experience";
import Image from "@/components/Image";
import Link from "@/components/Link";
import { PageSEO } from "@/components/SEO";
import experienceData from "@/data/experienceData";
import { AiOutlineGithub } from "react-icons/ai";
import { RoughNotation } from "react-rough-notation";

export default function AuthorLayout({ children, frontMatter }) {
	const { name, avatar, occupation, company } = frontMatter;

	return (
		<>
			<PageSEO title={`Sobre - ${name}`} description={"Um pouco sobre mim"} />
			<div className="">
				<div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						Sobre
					</h1>
				</div>
				<div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
					<div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
						<Image
							src={avatar}
							alt="avatar"
							width={192}
							height={192}
							className="h-48 w-48 rounded-full xl:rounded-full"
							placeholder="blur"
							blurDataURL="/static/images/SVG-placeholder.png"
						/>
						<h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
							{name}
						</h3>
						<div className="text-gray-500 dark:text-gray-400">{occupation}</div>
						<div className="text-gray-500 dark:text-gray-400">{company}</div>
						<div className="flex flex-col pt-3">
							<a
								className="rounded-full border px-8 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:border-[#f0f0f0f0] hover:bg-[#f0f0f0f0] hover:text-black hover:shadow dark:text-white dark:hover:text-black"
								href="https://github.com/TaylorHo"
								data-screen-name="@TaylorHo"
								target="_blank"
								rel="noreferrer noopener"
							>
								<AiOutlineGithub className="mr-2 mb-0.5 inline h-5 w-5" />
								Meu GitHub
							</a>
						</div>
					</div>
					<div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
						<p>
							<RoughNotation
								type="bracket"
								brackets={["left", "right"]}
								show={true}
								color="#FF0000"
								animationDelay={300}
								animationDuration={3000}
							>
								Olá, eu sou o Taylor, apaixonado por tantas coisas que chega a
								ser difícil citar. Para ser breve, posso dizer que amo código
								livre e falo disso o tempo todo. Tenho um longo passado com
								desenvolvimento de software e cibersegurança, também tenho um
								livro publicado e estou me formando em Física e Ciência da
								Computação - já tenho formação em Defesa Cibernética.
							</RoughNotation>
						</p>
						<br />
						<p className="sm:block md:hidden lg:hidden">
							Amo aprender algo novo e testar coisas diferentes, mas costumo
							focar em assuntos que{" "}
							<span className="font-semibold">
								envolvem computação, segurança ou fisica.
							</span>{" "}
							Este site é o meu lugar para falar{" "}
							<RoughNotation
								type="underline"
								show={true}
								color="#FBCFE8"
								animationDelay={1500}
								animationDuration={3000}
								multiline={true}
							>
								constantemente sobre programação, segurança, código livre, e
								possivelmente sobre física, pesquisas e ciências em geral.
							</RoughNotation>
						</p>
						<p className="hidden md:block">
							Amo aprender algo novo e testar coisas diferentes, mas costumo
							focar em assuntos que
							<RoughNotation
								animationDelay="1000"
								animationDuration="3000"
								type="highlight"
								color="#0ea4e9"
								strokeWidth="3"
								show={true}
							>
								<span className="text-black dark:text-white">
									envolvem computação, segurança ou fisica.
								</span>
							</RoughNotation>{" "}
							Este site é o meu lugar para falar{" "}
							<RoughNotation
								type="underline"
								show={true}
								color="#FBCFE8"
								animationDelay={1500}
								animationDuration={3000}
								multiline={true}
							>
								constantemente sobre programação, segurança, código livre, e
								possivelmente sobre física, pesquisas e ciências em geral.
							</RoughNotation>
						</p>
						<br />
						<p>
							Atualmente eu trabalho na{" "}
							<Link
								href={"https://www.hotay.dev/"}
								className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
							>
								Hotay
							</Link>
							, empresa que fundei, e na{" "}
							<Link
								href={"https://www.convisoappsec.com/"}
								className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
							>
								Fundação CERTI
							</Link>
							, como Pesquisador em Engenharia e Tecnologia. Você pode me
							encontrar no{" "}
							<Link
								href="https://github.com/TaylorHo"
								className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
							>
								Github
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="ml-0.5 inline-block h-4 w-4 fill-current"
								>
									<title>GitHub</title>
									<g data-name="Layer 2">
										<g data-name="external-link">
											<rect width="24" height="24" opacity="0" />
											<path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
											<path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
										</g>
									</g>
								</svg>
							</Link>
							,{" "}
							<Link
								href="https://www.linkedin.com/in/hoffmann-taylor/"
								className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
							>
								LinkedIn
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="ml-0.5 inline-block h-4 w-4 fill-current"
								>
									<title>LinkedIn</title>
									<g data-name="Layer 2">
										<g data-name="external-link">
											<rect width="24" height="24" opacity="0" />
											<path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
											<path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
										</g>
									</g>
								</svg>
							</Link>{" "}
							ou via{" "}
							<Link
								href="mailto:taylor@hotay.dev"
								className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
							>
								Email
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="ml-0.5 inline-block h-4 w-4 fill-current"
								>
									<title>Email</title>
									<g data-name="Layer 2">
										<g data-name="external-link">
											<rect width="24" height="24" opacity="0" />
											<path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
											<path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
										</g>
									</g>
								</svg>
							</Link>
						</p>
						<br />
						<p>
							Aqui você vai encontrar de tudo um pouco a meu respeito. Espero
							que goste.
						</p>
					</div>
				</div>
				<div className="mt-10 md:pl-16">
					<div className="space-y-2 pt-6 pb-8 md:space-y-5">
						<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
							Experiência
						</h1>
					</div>
					<div className="max-w-none pt-8 pb-8 xl:col-span-2">
						{experienceData.map((d) => (
							<Experience
								key={d.company}
								title={d.title}
								company={d.company}
								location={d.location}
								range={d.range}
								url={d.url}
								text1={d.text1}
								text2={d.text2}
								text3={d.text3}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

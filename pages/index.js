import Link from "@/components/Link";
import { PageSEO } from "@/components/SEO";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import formatDate from "@/lib/utils/formatDate";
import { useRouter } from "next/navigation";
import { RoughNotation } from "react-rough-notation";

const MAX_DISPLAY = 3;

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter("artigos");

	return { props: { posts } };
}

export default function Home({ posts }) {
	const { push } = useRouter();
	return (
		<>
			<PageSEO
				title={siteMetadata.title}
				description={siteMetadata.description}
			/>
			<div>
				<div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
					<div className="pt-6">
						<h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
							Olá, sou o{" "}
							<span className="text-primary-color-500 dark:text-primary-color-dark-500">
								Taylor
							</span>
						</h1>
						<h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
							Sou pesquisador, físico, autor, desenvolvedor e engenheiro de
							cibersegurança. Amo aprender e experimentar coisas novas,
							especialmente com Código Livre. Fundei a Hotay, trabalho em
							diversos projetos e contribuo para diversos outros, tais como
							Flutter, Quantum cirq, FreeCAD, Rust, Debian e o Kernel Linux.
						</h2>
						<p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
							Este é o meu lugar para{" "}
							<RoughNotation
								animate="true"
								type="box"
								show={true}
								color="#DE1D8D"
								animationDelay={1000}
								animationDuration={2500}
								className="text-slate-200"
							>
								pensamentos, reflexões e tudo mais.&nbsp;
							</RoughNotation>
							Tenha uma boa leitura.
						</p>
						<div className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
							Este é o meu lugar para{" "}
							<RoughNotation
								animate="true"
								type="highlight"
								show={true}
								color="#DE1D8D"
								animationDelay={1000}
								animationDuration={2500}
								className="text-slate-200"
							>
								pensamentos, reflexões e tudo mais.&nbsp;
							</RoughNotation>
							Tenha uma boa leitura.{" "}
							<div className="mt-8 text-slate-600 dark:text-slate-400">
								<span className="text-sm">Use</span>{" "}
								<span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
									⌘
								</span>{" "}
								<span className="text-sm">+ </span>
								<span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
									K
								</span>{" "}
								<span className="text-sm">para opções</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="grid grid-cols-1 grid-rows-3 gap-4 py-12">
							<div className="my-2 grid items-start gap-8">
								<div className="group relative">
									<div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
									<Link href="/projetos">
										<span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
											<span className="flex items-center space-x-5">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 -rotate-6 text-green-600"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
													/>
												</svg>
												<span className="pr-6 whitespace-nowrap text-gray-900 dark:text-gray-100">
													Criações&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												</span>
											</span>
											<span className="pl-6 text-green-600 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
												Projetos&nbsp;&rarr;
											</span>
										</span>
									</Link>
								</div>
							</div>
							<div className="my-2 grid items-start gap-8">
								<div className="group relative">
									<div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
									<Link href="/jornada">
										<span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
											<span className="flex items-center space-x-5">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 -rotate-6 text-pink-600"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
													/>
												</svg>
												<span className="pr-6 whitespace-nowrap text-gray-900 dark:text-gray-100">
													História&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												</span>
											</span>
											<span className="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
												Jornada&nbsp;&rarr;
											</span>
										</span>
									</Link>
								</div>
							</div>
							<div className="my-2 grid items-start gap-8">
								<div className="group relative">
									<div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r  from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
									<Link href="https://uiclap.bio/taylor">
										<span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
											<span className="flex items-center space-x-5">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 rotate-6 text-amber-400"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
													/>
												</svg>
												<span className="pr-6 whitespace-nowrap text-gray-900 dark:text-gray-100">
													Meus Livros
												</span>
											</span>
											<span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
												Editora&nbsp;&nbsp;&nbsp;&rarr;
											</span>
										</span>
									</Link>
								</div>
							</div>
							<div className="my-2 grid items-start gap-8">
								<div className="group relative">
									<div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
									<Link href="/contato">
										<span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
											<span className="flex items-center space-x-5">
												<svg
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 -rotate-6 text-fuchsia-600"
													fill="none"
													stroke="currentColor"
												>
													<g>
														<path
															fill="none"
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={1.5}
															d="M19.89,3.25H4.11a2,2,0,0,0-2,2v9.06a2,2,0,0,0,2,2H5.75l2.31,4a.85.85,0,0,0,1.48,0l2.32-4h8a2,2,0,0,0,2-2V5.25A2,2,0,0,0,19.89,3.25Z"
														/>

														<line
															fill="none"
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={1.5}
															x1="5.01"
															y1="7.86"
															x2="11.01"
															y2="7.86"
														/>

														<line
															fill="none"
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={1.5}
															x1="5.01"
															y1="11.86"
															x2="18.01"
															y2="11.86"
														/>
													</g>
												</svg>
												<span className="pr-6 whitespace-nowrap text-gray-900 dark:text-gray-100">
													Fale comigo
												</span>
											</span>
											<span className="pl-6 text-fuchsia-600 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
												Contato&nbsp;&rarr;
											</span>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
					Últimos Artigos
				</h2>
				<hr className="border-gray-200 dark:border-gray-700" />
				<ul>
					{!posts.length && "No posts found."}
					{posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
						const { slug, date, title, summary, tags } = frontMatter;
						return (
							<li
								className="py-6 group cursor-pointer flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
								key={slug}
								onClick={() => {
									return push(`/artigos/${slug}`);
								}}
							>
								<article>
									<div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
										<dl>
											<dt className="sr-only">Published on</dt>
											<dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
												<time dateTime={date}>{formatDate(date)}</time>
												{/* Temporarily hiding page view counter */}
												{/* {' • '}
                      <ViewCounter className="mx-1" slug={slug} />
                        views */}
											</dd>
										</dl>
										<div className="space-y-5 xl:col-span-4">
											<div className="space-y-1">
												<div>
													<h2 className="text-2xl font-bold leading-8 tracking-tight">
														<Link
															href={`/artigos/${slug}`}
															className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
														>
															{title}
														</Link>
													</h2>
												</div>
												<div className="flex flex-wrap">
													{tags.map((tag) => (
														<Tag key={tag} text={tag} />
													))}
												</div>
												<div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
													{summary}
												</div>
											</div>
										</div>
									</div>
								</article>
							</li>
						);
					})}
				</ul>
			</div>
			{posts.length > MAX_DISPLAY && (
				<div className="flex justify-end pt-5 text-lg font-normal leading-6">
					<Link
						href="/artigos"
						className=" special-underline-new text-primary-500 hover:text-gray-100 hover:no-underline dark:text-primary-500 hover:dark:text-gray-100"
						aria-label="Todos os Artigos"
					>
						Todas as Publicações &rarr;
					</Link>
				</div>
			)}
			{siteMetadata.newsletter.provider !== "" && (
				<div className="flex items-center justify-center pt-4">
					{/* <NewsletterForm /> */}
				</div>
			)}
		</>
	);
}

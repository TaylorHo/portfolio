import formatDate from "@/lib/utils/formatDate";
import { Disclosure, Transition } from "@headlessui/react";
import { AiOutlineCode } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { FaBlackTie } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import { GoShieldLock } from "react-icons/go";
import { HiChevronDown } from "react-icons/hi";
import { HiMiniSignal } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { LuPartyPopper } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { PiLaptop } from "react-icons/pi";
import { PiMagnifyingGlass } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { SiNike } from "react-icons/si";

export default function Timeline() {
	return (
		<div>
			<ol className="relative mt-6 ml-6 border-l border-zinc-400 dark:border-gray-800 ">
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 ring-8 ring-white dark:bg-yellow-700 dark:ring-gray-900">
						<PiMagnifyingGlass />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Voltei a trabalhar com pesquisa
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Novembro de 2024 (21 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Voltei para a Fundação CERTI para trabalhar diretamente com
						pesquisa, desta vez mais próximos de engenharia e tecnologia para
						visualização 3D, simulações, modelagem de dados, desenvolvimento de
						software e análises físicas.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
						<MdOutlineSecurity />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Me tornei consultor de Segurança
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Maio de 2024 (21 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Comecei a atuar como Consultor de Segurança auxiliando universidades
						brasileiras a melhorarem sua infraestrutura de segurança.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-200 ring-8 ring-white dark:bg-fuchsia-900 dark:ring-gray-900">
						<IoBookOutline />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Primeiro livro publicado
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						{formatDate(new Date("2024-05-14 20:00"))} (21 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Meu primeiro livro sobre segurança de aplicações para
						desenvolvedores. Apenas o primeiro de muitos.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 ring-8 ring-white dark:bg-yellow-700 dark:ring-gray-900">
						<SiNike />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Especialista em segurança na Nike
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Fevereiro de 2024 (20 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Atuei como especialista em segurança na Nike do Brasil e Centauro,
						resolvendo mais de 50k vulnerabilidades de segurança em 3 meses.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-300 ring-8 ring-white dark:bg-blue-700 dark:ring-gray-900">
						<BiWorld />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Fundei a Hotay
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						14 de Abril, 2023 (19 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Aos 19 anos fundei minha primeira empresa no setor de
						Desenvolvimento de Software, com o comprometimento de sempre ser uma
						empresa de Código Livre e Software livre.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-300 ring-8 ring-white dark:bg-green-700 dark:ring-gray-900">
						<PiGraduationCap />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Graduação em Física Iniciada
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Janeiro de 2023 (19 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Iniciei meus estudos em uma área que sempre teve meu coração.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-300 ring-8 ring-white dark:bg-green-700 dark:ring-gray-900">
						<PiGraduationCap />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Graduação em Ciência da Computação Iniciada
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Janeiro de 2023 (19 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Buscando uma melhor compreensão dos fundamentos da computação, baixo
						nível e programação de hardware.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-300 ring-8 ring-white dark:bg-purple-700 dark:ring-gray-900">
						<PiChalkboardTeacher />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Me tornei professor
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Setembro de 2022 (19 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Professor de engenharia de software e segurança de aplicações em
						cursos focados em capacitar novos desenvolvedores em áreas não
						metropolitanas.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 ring-8 ring-white dark:bg-yellow-700 dark:ring-gray-900">
						<PiMagnifyingGlass />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Me tornei pesquisador
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Julho de 2022 (19 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Iniciei em uma Fundação de Pesquisa e Desenvolvimento Científico e
						Tecnológico como pesquisador nas áreas de engenharia de software,
						segurança, criptografia e telecomunicações.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-300 ring-8 ring-white dark:bg-green-700 dark:ring-gray-900">
						<PiGraduationCap />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Graduado em Defesa Cibernética
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Setembro de 2021 (18 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Com o adiantamento de matérias e excelentes notas, finalizei
						rapidamente a graduação em segurança.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 ring-8 ring-white dark:bg-orange-900 dark:ring-gray-900">
						<LuPartyPopper />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Conclusão do Ensino Médio
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Dezembro de 2020 (17 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Concluí o Ensino Médio ainda durante a Pandemia do Covid-19. Não
						houve formatura por conta da Pandemia.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
						<GoShieldLock />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Iniciada graduação de Defesa Cibernética
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Maio de 2020 (17 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Antes mesmo de concluir o Ensino Médio, iniciei na faculdade a fim
						de aprender mais segurança de aplicações.
					</p>
				</li>
				<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-white dark:bg-gray-900 dark:ring-gray-900">
						<BsBuilding />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Primeiro estágio
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Fevereiro de 2018 (14 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Iniciei na área com marketing e criação de sites, mas logo escalei
						até a gestão de tecnologia e segurança da empresa.
					</p>
				</li>
				<li className="mb-2 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
					<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-white dark:bg-red-900 dark:ring-gray-900">
						<AiOutlineCode />
					</span>
					<h3 className="text-base font-semibold text-gray-900 dark:text-white">
						Primeira compilação do Kernel linux
					</h3>
					<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						2018 (14 anos)
					</time>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Primeira vez que compilei o Kernel linux do zero.
					</p>
				</li>
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button>
								<div className="text-small ml-1.5 flex">
									<HiChevronDown
										className={`h-6 w-6 text-gray-600  ${open ? "rotate-180 transform " : ""}`}
									/>
								</div>
							</Disclosure.Button>
							<Transition
								show={open}
								enter="transition duration-400 ease-in-out"
								enterFrom="transform scale-95 opacity-0"
								enterTo="transform scale-400 opacity-100"
								leave="transition duration-75 ease-out"
								leaveFrom="transform scale-100 opacity-100"
								leaveTo="transform scale-95 opacity-0"
							>
								<Disclosure.Panel>
									{" "}
									<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
										<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
											<PiLaptop />
										</span>
										<h3 className="text-base font-semibold text-gray-900 dark:text-white">
											Primeiro Notebook
										</h3>
										<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
											2017 (13 anos)
										</time>
										<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
											Consegui comprar meu primeiro notebook usado e com um
											desempenho fraco, no qual não conseguiria rodar Windows.
											Aí se iniciou uma jornada com o Linux.
										</p>
									</li>
									<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
										<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-200 ring-8 ring-white dark:bg-fuchsia-900 dark:ring-gray-900">
											<HiMiniSignal />
										</span>
										<h3 className="text-base font-semibold text-gray-900 dark:text-white">
											Primeiro contato com a Internet
										</h3>
										<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
											2015 (11 anos)
										</time>
										<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
											Meu primeiro contato com a internet, gerando inúmeras
											perguntas sobre como tudo aquilo funcionava.
										</p>
									</li>
									<li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
										<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
											<FaBaby />
										</span>
										<h3 className="text-base font-semibold text-gray-900 dark:text-white">
											Eu nasci
										</h3>
										<time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
											2003 (0 anos)
										</time>
										<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
											No interior do Rio Grande do Sul, Brasil
										</p>
									</li>
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>
			</ol>
		</div>
	);
}

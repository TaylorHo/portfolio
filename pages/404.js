import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import { useRouter } from "next/router";
import useSound from "use-sound";

export default function FourZeroFour() {
	const [ThemeSound] = useSound("/static/sounds/page-change.mp3");
	const { push } = useRouter();

	return (
		<>
			<PageSEO title={`Página não encontrada - ${siteMetadata.title}`} />
			<div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
				<div className="space-x-2 pt-6 pb-8 md:space-y-5">
					<h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-3 md:text-8xl md:leading-14">
						404
					</h1>
				</div>
				<div className="mx-auto max-w-2xl">
					<div className="md:border-l-2 md:px-6">
						<p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
							Página indisponível por algum motivo misterioso
						</p>
						<p className="mb-4">
							Por que mostrar uma página 404 genérica quando posso fazer isso
							parecer misterioso? Parece que você encontrou algo que existia e
							não existe mais ou você escreveu algo errado. Eu estou supondo que
							você escreveu alguma parte errada. Você pode verificar a URL da
							página?
						</p>
						<p>
							Mas não se preocupe, você pode encontrar muitas coisas legais na
							página inicial.
						</p>
					</div>
				</div>
			</div>
			<div className="mt-16 grid place-items-center">
				<button
					aria-label="Voltar ao início"
					type="button"
					className="pushable"
					onClick={() => {
						ThemeSound();
						push("/");
					}}
				>
					<span className="shadow" />
					<span className="edgeblue" />
					<span className="frontblue">Voltar ao início</span>
				</button>
			</div>
		</>
	);
}

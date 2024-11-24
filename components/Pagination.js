import Link from "@/components/Link";

export default function Pagination({ totalPages, currentPage }) {
	const prevPage = Number.parseInt(currentPage) - 1 > 0;
	const nextPage =
		Number.parseInt(currentPage) + 1 <= Number.parseInt(totalPages);

	return (
		<div className="space-y-2 pt-6 pb-8 md:space-y-5">
			<nav className="flex justify-between">
				{!prevPage && (
					<button
						rel="anterior"
						className="cursor-auto disabled:opacity-50"
						disabled={!prevPage}
					>
						Anterior
					</button>
				)}
				{prevPage && (
					<Link
						href={
							currentPage - 1 === 1
								? `/artigos/`
								: `/artigos/page/${currentPage - 1}`
						}
					>
						<button rel="anterior">Anterior</button>
					</Link>
				)}
				<span>
					{currentPage} de {totalPages}
				</span>
				{!nextPage && (
					<button
						rel="proxima"
						className="cursor-auto disabled:opacity-50"
						disabled={!nextPage}
					>
						Próxima
					</button>
				)}
				{nextPage && (
					<Link href={`/artigos/page/${currentPage + 1}`}>
						<button rel="proxima">Próxima</button>
					</Link>
				)}
			</nav>
		</div>
	);
}

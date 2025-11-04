export function formatAuthors(authors: string[]): string {
	if (authors.length <= 2) {
		return authors.join(' & ');
	}
	return `${authors[0]} et al.`;
}

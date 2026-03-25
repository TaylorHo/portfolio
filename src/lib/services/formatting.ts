export function formatAuthors(authors: string[], showAll: boolean = false): string {
	if (authors.length <= 2 || showAll) {
		return authors.join(', ');
	}
	return `${authors[0]} et al.`;
}

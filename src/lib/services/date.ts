export function formatDate(date: string): string {
	return new Date(date).toLocaleDateString(undefined, {
		timeZone: 'UTC',
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

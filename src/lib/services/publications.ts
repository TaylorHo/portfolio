import type { PublicationType } from '$lib/models/publication';
import { m } from '$lib/paraglide/messages';
import { FileText, BookOpen, Mic } from '@lucide/svelte';
import type { Component } from 'svelte';

export function getTitleForPublicationType(type: PublicationType, plural: boolean = false): string {
	switch (type) {
		case 'article':
			return plural ? m.publication_type_article_plural() : m.publication_type_article();
		case 'book':
			return plural ? m.publication_type_book_plural() : m.publication_type_book();
		case 'conference':
			return plural ? m.publication_type_conference_plural() : m.publication_type_conference();
	}
}

export function getIconForPublicationType(type: PublicationType): Component {
	switch (type) {
		case 'article':
			return FileText;
		case 'book':
			return BookOpen;
		case 'conference':
			return Mic;
		default:
			return FileText;
	}
}

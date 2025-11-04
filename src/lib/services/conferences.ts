import type { ConferenceType } from '$lib/models/conference';
import { m } from '$lib/paraglide/messages';
import { Calendar, User, Video, Wrench } from '@lucide/svelte';
import type { Component } from 'svelte';

export function getIconForConferenceType(type: ConferenceType): Component {
	switch (type) {
		case 'conference':
			return Calendar;
		case 'talk':
			return User;
		case 'workshop':
			return Wrench;
		case 'webinar':
			return Video;
		default:
			return Calendar;
	}
}

export function getTypeLabelForConferenceType(type: ConferenceType): string {
	switch (type) {
		case 'conference':
			return m.conference_type_conference();
		case 'talk':
			return m.conference_type_talk();
		case 'workshop':
			return m.conference_type_workshop();
		case 'webinar':
			return m.conference_type_webinar();
	}
}

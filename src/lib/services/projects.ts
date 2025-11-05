import type { ProjectStatus, ProjectType } from '$lib/models/project';
import { m } from '$lib/paraglide/messages';
import { Globe, Smartphone, Monitor, Package, Microscope, Zap } from '@lucide/svelte';
import type { Component } from 'svelte';

export function getTitleForProjectType(type: ProjectType | 'all'): string {
	switch (type) {
		case 'web':
			return m.project_type_web();
		case 'mobile':
			return m.project_type_mobile();
		case 'desktop':
			return m.project_type_desktop();
		case 'library':
			return m.project_type_library();
		case 'research':
			return m.project_type_research();
		case 'all':
			return m.project_filter_all();
	}
}

export function getIconForProjectType(type: ProjectType): Component {
	switch (type) {
		case 'web':
			return Globe;
		case 'mobile':
			return Smartphone;
		case 'desktop':
			return Monitor;
		case 'library':
			return Package;
		case 'research':
			return Microscope;
		default:
			return Zap;
	}
}

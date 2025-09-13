import { m } from '$lib/paraglide/messages';

export function getTypeTitle(type: string): string {
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
		default:
			return type.charAt(0).toUpperCase() + type.slice(1);
	}
}

export function getStatusTitle(status: string): string {
	switch (status) {
		case 'active':
			return m.project_status_active();
		case 'completed':
			return m.project_status_completed();
		case 'archived':
			return m.project_status_archived();
		case 'all':
			return m.project_filter_all();
		default:
			return status.charAt(0).toUpperCase() + status.slice(1);
	}
}

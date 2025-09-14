export interface Project {
	title: string;
	description: string;
	technologies: string[];
	year: number;
	type: 'web' | 'mobile' | 'desktop' | 'library' | 'research';
	status: 'active' | 'completed' | 'archived';
	githubUrl?: string;
	demoUrl?: string;
	doi?: string;
	featured?: boolean;
}

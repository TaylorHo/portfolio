export type ProjectType = 'web' | 'mobile' | 'desktop' | 'library' | 'research';
export type ProjectStatus = 'maintained' | 'archived';

export interface Project {
	title: string;
	description: string;
	technologies?: string[];
	year: number;
	type: ProjectType;
	status: ProjectStatus;
	githubUrl?: string;
	demoUrl?: string;
	doi?: string;
	featured?: boolean;
	stars?: number;
}

export interface WorkProject {
	title: string;
	description: string[];
	tags?: string[];
}

export interface WorkExperience {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate?: string;
	description?: string[];
	projects: WorkProject[];
	tags?: string[];
}

export interface Education {
	degree: string;
	institution: string;
	location: string;
	startDate: string;
	endDate?: string;
	description?: string;
	thesis?: string;
	gpa?: string;
}

export interface ExtraCapacitation {
	title: string;
	institution: string;
	completionDate: string;
	description?: string;
	credentialUrl?: string;
}

export interface Resume {
	workExperience: WorkExperience[];
	education: Education[];
	extraCapacitation: ExtraCapacitation[];
}

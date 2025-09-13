export interface WorkProject {
	id: string;
	title: string;
	description: string[];
	technologies?: string[];
}

export interface WorkExperience {
	id: string;
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate?: string;
	description?: string[];
	projects: WorkProject[];
}

export interface Education {
	id: string;
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
	id: string;
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

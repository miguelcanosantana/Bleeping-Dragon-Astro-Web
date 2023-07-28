export interface NewsPost {
	title: string;
	client: string;
	description: string;
	publishDate: string;
	tags: string[];
	img: string;
}

export interface PrivacyPolicy {
	name: string;
}

export interface Game {
	title: string;
	extraLogo?: string;
	description: string;
	publishDate: string;
	platforms: string[];
	img: string;
	robloxLink?: string;
}

export interface App {
	title: string;
	description: string;
	publishDate: string;
	platforms: string[];
	img: string;
	googlePlayLink?: string;
}
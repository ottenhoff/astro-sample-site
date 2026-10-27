export const SITE = {
	title: '185 Liberty Street',
	description: 'Historic apartments in downtown Newburgh, NY.',
	defaultLanguage: 'en-US',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: '/images/after/after1.jpeg',
		alt: '185 Liberty Street building exterior in Newburgh, NY',
	},
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'About': [
			{ text: 'Overview', link: 'en/about' },
			{ text: 'Rental Information', link: 'en/rental-info' },
		],
		'Photos': [
			{ text: 'Before', link: 'en/before' },
			{ text: 'After', link: 'en/after' }
		],
		'History': [
			{ text: 'Detailed History', link: 'en/introduction' },
			{ text: 'Previous Owners', link: 'en/owners' },
		],
	},
};

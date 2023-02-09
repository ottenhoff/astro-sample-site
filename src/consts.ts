export const SITE = {
	title: '185 Liberty Street',
	description: 'Historic apartments in downtown Newburgh, NY.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = '';

export const COMMUNITY_INVITE_URL = '';

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
		'History': [
			{ text: 'Detailed History', link: 'en/introduction' },
			{ text: 'Previous Owners', link: 'en/owners' },
		],
		'Photos': [
			{ text: 'Before', link: 'en/before' },
			{ text: 'After', link: 'en/after' }
		],
	},
};

import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	// Preserve spaces around inline elements in the existing templates.
	compressHTML: true,
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact({
			include: ['**/*.tsx'],
			exclude: ['**/Search.tsx', '**/LanguageSelect.tsx'],
		}),
		// Enable React for the Algolia search component.
		react({ include: ['**/Search.tsx', '**/LanguageSelect.tsx'] }),
	],
	site: 'https://www.185libertystreet.com',
	trailingSlash: 'always',
});

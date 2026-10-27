import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { escape } from 'html-escaper';

/** Generate a sitemap from published, indexable content at build time. */
export const GET: APIRoute = async ({ site }) => {
	const pages = await getCollection('docs', ({ data }) => !data.noindex);
	const urls = pages
		.map(({ id }) => new URL(`/${id}/`, site).href)
		.sort()
		.map((url) => `<url><loc>${escape(url)}</loc></url>`)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		{ headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
	);
};

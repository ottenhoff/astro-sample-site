import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

/** Publish a concise site guide, including the current rental scam warning. */
export const GET: APIRoute = async ({ site }) => {
	const pages = await getCollection('docs', ({ data }) => !data.noindex);
	const links = pages
		.sort((a, b) => a.id.localeCompare(b.id))
		.map(({ id, data }) => `- [${data.title}](${new URL(`/${id}/`, site).href}): ${data.description}`)
		.join('\n');

	return new Response(
		`# ${SITE.title}\n\n> Official information about the historic apartment building at 185 Liberty Street in Newburgh, New York.\n\nNo apartments are currently for rent. The current Craigslist rental ad for this property is a scam. Do not send money unless you have visited the apartment in person and signed a lease. Do not send deposits or application fees in response to that ad.\n\n## Building information\n\n${links}\n\n## Contact\n\n- [Email the property owner](mailto:sam@185libertystreet.com): Questions about the building or future availability.\n`,
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
	);
};

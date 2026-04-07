import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

/** Match Starlight's `slugToPathname` so feed links match deployed URLs. */
function docSlugToPathname(slug: string): string {
	const param =
		slug === 'index' || slug === '' || slug === '/'
			? undefined
			: (slug.endsWith('/index') ? slug.slice(0, -6) : slug).normalize();
	return param ? `/${param}/` : '/';
}

export async function GET(context: APIContext) {
	const docs = await getCollection('docs');
	const base = context.site!;

	const items = docs
		.filter((entry) => !entry.data.draft)
		.map((entry) => {
			const link = new URL(docSlugToPathname(entry.id), base).href;
			const pubDate =
				entry.data.lastUpdated instanceof Date ? entry.data.lastUpdated : undefined;
			return {
				link,
				title: entry.data.title,
				description: entry.data.description,
				pubDate,
			};
		})
		.sort((a, b) => (b.pubDate?.getTime() ?? 0) - (a.pubDate?.getTime() ?? 0));

	return rss({
		title: "Roman's notes",
		description: 'Personal notes and wiki — ozzyczech.cz',
		site: base,
		items,
		customData: '<language>en</language>',
	});
}

import {readdir, mkdir, writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';

import {join, dirname} from 'node:path';
import {parse} from 'node:path';


export function isValidPage(dirent) {
	// accept only *.md, *.html files
	if (dirent.isFile() && !dirent.name.startsWith('_')) {
		return dirent.name.endsWith('.md') || dirent.name.endsWith('.html');
	}

	// or not hidden directory
	return dirent.isDirectory() && !dirent.name.startsWith('.');
}

export async function getPages(path, filter = isValidPage, ...extenders) {
	return await Promise.all(
		(await readdir(path, {withFileTypes: true}))
			.filter(dirent => filter(dirent))
			.map(async (dirent) => {
				const page = {name: parse(dirent.name).name, src: join(path, dirent.name)};

				// Read subdirectory recursively
				if (dirent.isDirectory()) {
					page.children = await getPages(page.src, filter, ...extenders);
				}

				// Callbacks
				extenders.filter(f => typeof f === 'function').map(f => f(page, path, dirent));

				// Assign objects
				return Object.assign(page, ...extenders.filter(o => typeof o === 'object'));
			}),
	);
}

/**
 * Write content to the file and create directory if not exists
 * @param file
 * @param content
 * @returns {Promise<*>}
 */
export async function toFile(file, content) {
	if (!existsSync(dirname(file))) {
		await mkdir(dirname(file), {recursive: true});
	}
	return await writeFile(file, content);
}

/**
 *
 * @param pages
 * @returns {any}
 */
export function * allPages(pages) {
	for (const page of pages) {
		if (page?.children) {
			yield * allPages(page.children);
		} else {
			delete page.children;
			yield page;
		}
	}
}
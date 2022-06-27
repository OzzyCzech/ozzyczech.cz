import {createWriteStream, existsSync} from 'node:fs';
import {mkdir, unlink} from 'node:fs/promises';
import {dirname} from 'node:path';

// TODO
export async function createFuse(file = 'public/fuse.json') {

	// Truncate file
	if (existsSync(file)) {
		await unlink(file);
	}

	// Create stream
	const fuse = createWriteStream(file, {flags: 'a'});
	fuse.write('[');

	return {
		add({title, content, link, tags = []} = {}) {
			fuse.write(JSON.stringify({title, content, link, tags}) + ',');
		},

		/**
		 * Save sitemap end
		 */
		end() {
			fuse.write(']');
			fuse.end();
		},
	};
}

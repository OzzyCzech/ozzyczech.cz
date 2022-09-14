import {createWriteStream, existsSync} from 'node:fs';
import {mkdir, unlink} from 'node:fs/promises';
import {dirname} from 'node:path';

// TODO
export async function createFuse(file = 'public/fuse.json') {

	// Truncate file
	if (existsSync(file)) {
		await unlink(file);
	}

	let sep = '';

	// Create stream
	const fuse = createWriteStream(file, {flags: 'a'});
	fuse.write('[\n');

	return {
		add({title, content, url, path, tags = []} = {}) {
			fuse.write(sep + JSON.stringify({title, path, url, content, tags}));
			if (!sep) sep = ',\n';
		},

		/**
		 * Save sitemap end
		 */
		end() {
			fuse.write('\n]');
			fuse.end();
		},
	};
}

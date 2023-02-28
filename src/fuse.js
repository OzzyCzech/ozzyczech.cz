import {createWriteStream, existsSync} from 'node:fs';
import {mkdir, unlink} from 'node:fs/promises';
import {dirname} from 'node:path';

export async function createFuse(file = 'public/fuse.json') {

	// Truncate file
	if (existsSync(file)) {
		await unlink(file);
	}

	let sep = '';

	// Create stream
	const stream = createWriteStream(file, {flags: 'a'});
	stream.write('[\n');

	return {
		add({title, content, url, path, tags = []} = {}) {
			stream.write(sep + JSON.stringify({title, path, url, tags}));
			if (!sep) sep = ',\n';
		},

		/**
		 * Save sitemap end
		 */
		end() {
			stream.write('\n]');
			stream.end();
		},
	};
}
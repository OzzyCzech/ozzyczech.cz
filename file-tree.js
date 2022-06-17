#!/usr/bin/env node --experimental-modules --loader babel-register-esm

// @see https://www.w3schools.com/howto/howto_js_treeview.asp

import {readdir, lstat, readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {basename, dirname, resolve, relative} from 'node:path';
import {outputFile} from 'fs-extra';
import slugify from '@sindresorhus/slugify';

// yeald all pages
// can be faster not waiting to something else
async function * getPagesFiles(dir) {
	for (const dirent of await readdir(dir, {withFileTypes: true})) {
		const res = resolve(dir, dirent.name);
		if (dirent.isDirectory()) {
			yield * getPagesFiles(res);
		} else {
			yield res;
		}
	}
}

for await (const f of getPagesFiles('content')) {
	//console.log(f);
}

//console.log(await dirTreeOne('content'));

export async function getDirTree(filename) {
	const stats = await lstat(filename), info = {
		name: basename(filename), path: filename, isDirectory: stats.isDirectory(), isFile: stats.isFile(),
	};

	if (info.isDirectory) {
		info.children = []; // directory can be empty

		for (const child of await readdir(filename, {withFileTypes: true})) {
			if (child.isDirectory && !child.name.startsWith('.') || child.isFile && child.name.match(/.(md|html)$/)) {
				info.children.push(await getDirTree(filename + '/' + child.name));
			}
		}
	}

	return info;
}

//console.log(await getDirTree('content'));

// another approach

export async function getDirTreeTwo(dirPath) {
	return await Promise.all((await readdir(dirPath)).map(async (entity) => {
		if (!entity.startsWith('.')) {
			const path = join(dirPath, entity);
			return (await lstat(path)).isDirectory() ? await getDirTreeTwo(path) : path;
		}
	}));
}

// console.log(await getDirTreeTwo('content'));

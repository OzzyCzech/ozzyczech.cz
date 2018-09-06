'use strict'

const slugify = require('@sindresorhus/slugify');
const fs = require('fs')
const path = require('path')
const globby = require('globby')
const marked = require('marked')
const yaml = require('js-yaml')
const mkdirp = require('mkdirp')
const defaultOptions = require('./defaultOptions')

const EXTENSIONS = {
	JSON: '.json',
	MD: '.md',
	YML: '.yml'
}


// Main function
function processmd(options, callback) {
	options = Object.assign({}, defaultOptions, options)


	const globs = (options.files || []).concat(options._ || [])
	if (globs.length === 0) {
		throw new Error('You must pass file patterns in to be processed.')
	}

	const p = new Promise(function (resolve, reject) {
		globby(globs).then(function (result) {
			const commonDir = findCommonDir(result)

			options._commonDir = commonDir

			if (options.watch) {
				const d = debounce(
						function () {
							processOutput()
						},
						options.watchDebounce,
						true
				)

				// fs.watch isn't supported on linux.
				try {
					fs.watch(commonDir, {recursive: true}, function (event, filename) {
						d()
					})
				} catch (e) {
					console.log(e);
				}
			}

			function processOutput() {
				const summaryObj = {}
				summaryObj.fileMap = {}
				summaryObj.sourceFileArray = result
				let finishCount = 0
				result.forEach(function (file, i) {

					processYamlAndMarkdown(file, options, function (newFile, content) {
						finishCount++

						// Replace backslashes with forward slashes to keep windows consistent.
						const filename = replaceBackslashes(newFile)

						// Remove body props from summary.
						if (!options.includeBodyProps) {
							content = removeBodyProps(content)
						}

						summaryObj.fileMap[filename] = JSON.parse(content);
						summaryObj.fileMap[filename].omg = slugify(filename);

						if (finishCount === result.length) {
							if (options.summaryOutput) {
								writeFileContent(options.summaryOutput, JSON.stringify(summaryObj, null, 2), function (e, d) {
									resolve(summaryObj)
								})
							} else {
								resolve(summaryObj)
							}
						}
					})
				})
			}

			processOutput()
		})
	})

	// Enable callback support too.
	if (callback) {
		p.then(result => {
			callback(null, result)
		})
	}

	return p
}

function processYamlAndMarkdown(file, options, cb) {
	readFileContent(file, (err, file, fileContent) => {
		if (err) throw (err);

		let content = fileContent.trim();
		let frontmatter = {};
		let jsonData = {};

		if (fileContent.indexOf('---') === 0) {
			const splitContent = fileContent.match(/^-{3}[\s\S]+?-{3}/);
			frontmatter = yaml.safeLoad(splitContent[0].substring(3, splitContent[0].length - 3));
			content = fileContent.substring(splitContent[0].length).trim()
		}

		jsonData = Object.assign({}, frontmatter, {
			html: marked(content)
		});

		// Rename to the new file.
		const baseFilename = file.replace(options._commonDir, '')
		const parsedPath = path.parse(path.join(options.outputDir, baseFilename))
		const sourceExt = parsedPath.ext
		const sourceBase = parsedPath.base

		jsonData.title = jsonData.title || jsonData.html.match(/>(.*?)<\//)[1]
		jsonData.slug = slugify(jsonData.title);

		const newPathObj = Object.assign({}, parsedPath, {
			ext: EXTENSIONS.JSON,
			base: jsonData.slug + EXTENSIONS.JSON
		});
		const newPath = path.format(newPathObj);

		jsonData.dir = replaceBackslashes(path.dirname(newPath));
		jsonData.base = path.basename(newPath);
		jsonData.ext = EXTENSIONS.JSON
		jsonData.sourceBase = sourceBase
		jsonData.sourceExt = sourceExt

		// TODO: make this a default callback
		// 2 spaces indent for stringify.
		writeFileContent(newPath, JSON.stringify(jsonData, null, 2), function (e, d) {
			cb(newPath, JSON.stringify(jsonData))
		})
	})
}


// Read a file making sure that it is not a directory first.
function readFileContent(file, cb) {
	if (!file || fs.lstatSync(file).isDirectory()) {
		return null
	}
	fs.readFile(file, (err, data) => {
		cb(err, file, data && data.toString())
	})
}

// Write a file making sure the directory exists first.
function writeFileContent(file, content, cb) {
	mkdirp(path.dirname(file), function (err) {
		if (err) throw (err)
		fs.writeFile(file, content, (e, data) => {
			cb(e, data)
		})
	})
}

// Replace backslashes for windows paths.
function replaceBackslashes(str) {
	return str.split('\\').join('/')
}

// Determine if its data for a markdown file.
function isMarkdown(data) {
	return Boolean(data.bodyContent && data.bodyHtml)
}

// Find the common parent directory given an array of files.
function findCommonDir(files) {
	const path = files.reduce((path, file, fileIndex) => {
		// If it's a file not in any directory then just skip it
		// by assigning the previous value.
		if (!file.includes('/')) {
			return path
		}

		// No path set yet
		if (!path && fileIndex === 0) {
			return file.substr(0, file.lastIndexOf('/') + 1)
		} else {
			// Get index of last shared character
			let sharedIndex = Array.from(path).findIndex((element, index) => {
				if (file[index] !== element) {
					return index - 1
				}
			})

			// Round to nearest full directory
			if (sharedIndex > -1) {
				sharedIndex = path.substr(0, sharedIndex).lastIndexOf('/')
			}

			// Return shared directory path
			if (sharedIndex > -1) {
				return path.substr(0, sharedIndex + 1)
			} else if (file.startsWith(path)) {
				return path
			}

			// No shared directory path
			return ''
		}
	}, '')

	return path
}

// Remove body props from summary.
function removeBodyProps(content) {
	try {
		const json = JSON.parse(content)
		delete json.bodyContent
		delete json.bodyHtml
		return JSON.stringify(json)
	} catch (e) {
	}
}

// Debounce from: https://davidwalsh.name/function-debounce
function debounce(func, wait, immediate) {
	var timeout
	return function () {
		var context = this
		var args = arguments
		var later = function () {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}

module.exports = {
	default: processmd,
	_readFileContent: readFileContent, // for testing.
	_writeFileContent: writeFileContent, // for testing.
	_findCommonDir: findCommonDir // for testing.
}
#!/usr/bin/env node

const sphido = require('./index.js').default;
const defaultOptions = require('./defaultOptions.js')

// const argv = require('yargs').usage('Usage: $0 <command> [options]').argv
// const options = Object.assign({}, defaultOptions, argv)

const options = defaultOptions;

sphido(options, (err, data) => {

	if (err) {
		process.stderr.write(JSON.stringify(err))
	}

	if (options.stdout) {
		// Indent JSON 2 spaces.
		process.stdout.write(JSON.stringify(data, null, 2))
	}
});
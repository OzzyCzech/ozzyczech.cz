'use strict';

import {outputFile} from "fs-extra";
import React from 'react';
import {renderToStaticMarkup} from "react-dom/server";

module.exports = {
	async render(element, file) {
		await outputFile(file, "<!doctype html>\n" + renderToStaticMarkup(element));
	}
};
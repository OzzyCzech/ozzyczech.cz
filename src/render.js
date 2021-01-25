import {outputFile} from "fs-extra";
import React from 'react';
import {renderToStaticMarkup} from "react-dom/server.js";


export async function renderHTML(element, file) {
	await outputFile(file, "<!doctype html>\n" + renderToStaticMarkup(element));
}

export async function renderXML(element, file) {
	await outputFile(file, `<?xml version="1.0" encoding="UTF-8"?>\n` + renderToStaticMarkup(element))
}
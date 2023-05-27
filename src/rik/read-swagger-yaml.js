// const yaml = require('yaml-js');
const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

/*
yaml-js has been abandoned.

convert to js-yaml.

*/

class FileNotFoundError extends Error {
	constructor(args) {
		super(args);
		// this.name = 'FileNotFoundError';
		this.name = this.constructor.name;
	}
}
function main() {
	var content, fname;

	fname = path.resolve('./target', 'swagger.yaml');
	if (fs.existsSync(fname)) {
		content = fs.readFileSync(
			fname, { encoding: 'utf-8' });
		var test = content.split('\r\n');
		var test2 = content.split('\r');
		var test3 = content.split('\n');
		console.log('found:\r\n' + yaml.dump(content));
	}
	throw new FileNotFoundError('not found: ' + fname);
}

try {
	main();
} catch (anException) {
	console.error(anException.message);
}
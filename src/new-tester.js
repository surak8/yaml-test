// https://www.npmjs.com/package/js-yaml

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path'); // rik

const DEFAULT_FILE = '/home/ixti/example.yml';
const MY_FILE = 'riktest.yaml';

function readAndDump(yamlFilename) {
	var doc;

	if (yamlFilename && fs.existsSync(yamlFilename)) {
		doc = yaml.load(fs.readFileSync(yamlFilename, 'utf8'));
		// console.log(doc);
		console.log(yamlFilename + ':\r\n' + yaml.dump(doc, { indent: 4 }));

	}
}

function readAndDumpFiles(yamlFilenames) {
	if (yamlFilenames && Array.isArray(yamlFilenames))
		yamlFilenames.forEach(aYamlFilename => readAndDump(path.resolve(process.cwd(), aYamlFilename)));
}

// Get document, or throw exception on error
try {
	readAndDumpFiles([
		'riktest.yaml',
		'riks-yaml-files/users.yaml']);
	// readAndDump(path.resolve(process.cwd(), MY_FILE));
	// readAndDump(path.resolve(process.cwd(), 'riks-yaml-files/users.yaml'));
	// const myFile = path.resolve(process.cwd(), MY_FILE);
	// const doc = yaml.load(fs.readFileSync(myFile, 'utf8'));
	// // console.log(doc);
	// console.log(yaml.dump(doc, { indent: 4 }));

} catch (e) {
	console.log(e);
}

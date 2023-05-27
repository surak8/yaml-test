/*
https://www.npmjs.com/package/swagger-yaml

files from:
https://github.com/idlerun/swagger-yaml/tree/master/src
*/

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const YAML = require('yaml-js');
const extendify = require('extendify');

function fromWeb() {
	// const yaml_path = 'src/**/*.yaml';
	// const yaml_path = 'yaml-test/**/*.yaml';
	const yaml_path = './input/**/*.yaml';

	function readFile(afile) {
		if (!afile)
			throw new Error('file-name is null!');
		if (fs.existsSync(afile))
			return fs.readFileSync(afile).toString();
		throw new Error('non-existent: ' + afile);
	}

	glob(yaml_path,
		function (er, files) {
			// const contents = files.map(
			// 	f => {
			// 		return YAML.load(fs.readFileSync(f).toString());
			// 	});
			const contents = files.map(f => YAML.load(readFile(f)));
			// f => {
			// 	return YAML.load(fs.readFileSync(f).toString());
			// });
			const extend = extendify({
				inPlace: false,
				isDeep: true
			});
			const merged = contents.reduce(extend);
			console.log('Generating swagger.yaml, swagger.json');
			const OUT_DIR = path.resolve('./target');
			const YAML_FILE = path.resolve(path.join(OUT_DIR, 'swagger.yaml'));
			const JSON_FILE = path.resolve(path.join(OUT_DIR, 'swagger.json'));
			// try {
			// fs.existsSync('target') || fs.mkdirSync('target');
			// fs.writeFile('target/swagger.yaml', YAML.dump(merged));
			// fs.writeFile('target/swagger.json', JSON.stringify(merged, null, 2));
			fs.existsSync(OUT_DIR) || fs.mkdirSync(OUT_DIR);
			// fs.writeFile(YAML_FILE, YAML.dump(merged));
			// var v = YAML.dump(merged);
			fs.writeFile(
				YAML_FILE,
				YAML.dump(merged),
				{ isOpt: true },
				(err) => {
					if (err) console.error('error:' + err);
					else console.log('wrote: ' + YAML_FILE);
				});
			fs.writeFile(
				JSON_FILE,
				JSON.stringify(merged, null, 2),
				{ isOpt2: true },
				(err2) => {
					if (err2) console.error('error:' + err2);
					else console.log('wrote: ' + JSON_FILE);

				});
			// } catch (anException) {
			// 	console.error(anException.message);
			// }
		});
}

function riktest() {
	var anObj = {}, result;

	anObj['swagger'] = '2.0';
	anObj['basePath'] = '/basePath-API';
	anObj['host'] = 'host-here';

	// result = YAML.dump(anObj);
	// console.log('result (1)=\r\n' + result);

	// try {
	// 	// create a dumper-instance
	// 	const myDumper = function () {
	// 		console.log('here');
	// 	};
	// 	// implement required functions in the dumper-instance.
	// 	Object.assign(
	// 		myDumper.prototype,
	// 		{
	// 			open: function () { console.log('open, here'); return 'open'; },
	// 			close: function () { console.log('close, here'); return 'close'; },
	// 			dispose: function () { console.log('dispose, here'); return 'dispose'; },
	// 			represent: function (adoc) { console.log('represent, here'); return 'represeent'; },
	// 		});
	// 	result = YAML.dump(anObj, null, myDumper, { my_opt: true });
	// 	console.log('result (1)=\r\n' + result);
	// } catch (anException) {
	// 	console.error(anException.message);
	// }

	const THIS_FILE = path.resolve('./riktest.yaml');
	const OUT_DIR = path.dirname(THIS_FILE);

	fs.existsSync(OUT_DIR) || fs.mkdirSync(OUT_DIR);

	// var result0 = YAML.dump(anObj);
	// extendify operates on an Array.
	var tmp = [{
		swagger: '2.0',
		info: {
			version: '1.0.0',
			name: 'some name',
			description: 'some description'
		}
	}];
	result = YAML.dump(tmp.reduce(
		extendify({
			inPlace: false,
			isDeep: true
		})));

	// const extend = extendify({
	// 	inPlace: false,
	// 	isDeep: true
	// });
	// const merged = contents.reduce(extend);

	console.log('result (2)=\r\n' + result);
	fs.writeFile(
		THIS_FILE,
		result,
		{ isOpt: true },
		(err) => {
			if (err) console.error('error:' + err);
			else console.log('wrote: ' + THIS_FILE);
		});

}

try {
	fromWeb();
	riktest();
} catch (anException) {
	console.error(anException.message);
}
const path = require('node:path');
const fs = require('node:fs');
const paraglide = require('../src/lib/paraglide/runtime');

let { locales, baseLocale } = paraglide;

const otherLocales = locales.filter((locale) => locale !== baseLocale);

const svelteConfigFile = path.join(__dirname, '..', 'svelte.config.js');

if (!fs.existsSync(svelteConfigFile)) {
	console.error('Svelte config file not found');
	process.exit(1);
}

const svelteConfigContent = fs.readFileSync(svelteConfigFile, 'utf8');
if (!svelteConfigContent.includes('@sveltejs/adapter-static')) {
	console.error('Not building a static site, skipping ...');
	process.exit(0);
}

const buildFolder = path.join(__dirname, '..', 'build');

if (!fs.existsSync(buildFolder)) {
	console.error('Build folder not found');
	process.exit(1);
}

(async () => {
	for (const locale of otherLocales) {
		const langFolder = path.join(buildFolder, locale);

		if (!fs.existsSync(langFolder)) {
			console.error(`Language folder ${langFolder} not found`);
			continue;
		}

		const files = await fs.promises.readdir(langFolder, { recursive: true });

		for (const file of files) {
			const filePath = path.join(langFolder, file);

			if (file.endsWith('.html')) {
				const fileContent = fs.readFileSync(filePath, 'utf8');
				const newFileContent = fileContent.replace(
					`<html lang="${baseLocale}">`,
					`<html lang="${locale}">`
				);
				fs.writeFileSync(filePath, newFileContent);
			}
		}
	}
})();

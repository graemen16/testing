import { englishCode, spanishCode } from './language-codes';
// above isn't supported by jest default behavior. Jest doesn't support ESM as default.
//const englishCode = 'en-US';
//const spanishCode = 'es-ES';
export function getAboutUsLink(language) {
	switch (language.toLowerCase()) {
		case englishCode.toLowerCase():
			return '/about-us';
		case spanishCode.toLowerCase():
			return '/acerca-de';
	}
	return '';
}
//module.exports = getAboutUsLink;

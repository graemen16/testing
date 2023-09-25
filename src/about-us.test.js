/* Simple unit test
 * from https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/
 */

import { getAboutUsLink } from './about-us.js';
//const getAboutUsLink = require('./about-us');
test('Returns about-us for english language', () => {
	expect(getAboutUsLink('en-US')).toBe('/about-us');
});

test('Returns about-us for spanish language', () => {
	expect(getAboutUsLink('es-ES')).toBe('/acerca-de');
});

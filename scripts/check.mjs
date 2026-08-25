import { readFile } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const css = await readFile('styles.css', 'utf8');
const js = await readFile('app.js', 'utf8');
const required = ['id="about"', 'id="experience"', 'id="work"', 'id="expertise"', 'id="education"', 'id="contact"'];
for (const item of required) if (!html.includes(item)) throw new Error(`Missing required section: ${item}`);
if (!css.includes('@media')) throw new Error('Missing responsive stylesheet rules.');
if (!js.includes('IntersectionObserver')) throw new Error('Missing progressive enhancement for reveal animations.');
if (!html.includes('assets/Parnika-Garg-CV.pdf')) throw new Error('Missing downloadable CV link.');
console.log('Content and responsive implementation checks passed.');

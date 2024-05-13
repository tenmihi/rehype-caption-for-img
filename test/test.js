
import { rehype } from 'rehype';
import rehypeCaptionForImg from '../index.js';

const html = `
<h1>header</h1>
<img src="https://example.com/image.jpg" title="awesome title" alt="alt">
`

const output = rehype()
  .data('settings', { fragment: true })
  .use(rehypeCaptionForImg)
  .processSync(html)
  .toString()

console.log(output)
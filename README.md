# rehype-caption-for-img

## Overview

The values of the alt and title attributes of img tags will be added as figcaption elements.

## Installation

```
npm install rehype-caption-for-img
```

## Usage

```js
import { rehype } from 'rehype';
import rehypeCaptionForImg from 'rehype-caption-for-img';

rehype()
  .use(rehypeCaptionForImg)
```

### Example

```js
import { rehype } from 'rehype';
import rehypeCaptionForImg from 'rehype-caption-for-img';

const html = `
<h1>header</h1>
<img src="https://example.com/image.jpg" title="awesome title" alt="alt">
`

const output = rehype()
  .data('settings', { fragment: true })
  .use(rehypeCaptionForImg)
  .processSync(html)
  .toString();

console.log(output);
```

output:

```html
<h1>header</h1>
<figure>
  <img src="https://example.com/image.jpg" title="awesome title" alt="alt">
  <figcaption>awesome title</figcaption>
</figure>
```

## Options

### removeTitle (default: false)

If true, the title attribute of the img tag will be removed.

## Author

@tenmihi

## Licence

[MIT](./license)
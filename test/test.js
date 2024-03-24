import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { read } from 'to-vfile'
import { unified } from 'unified'
import { reporter } from 'vfile-reporter'

import rehypeCaptionForImg from '../index.js'

const file = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeCaptionForImg, { removeTitle: true })
  .use(rehypeDocument)
  .use(rehypeFormat)
  .use(rehypeStringify)
  .process(await read('./example.md'))

console.error(reporter(file))
console.log(String(file))
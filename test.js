import { rehype } from "rehype";
import test from 'node:test'
import assert from 'node:assert';
import rehypeCaptionForImg from "./lib/index.js";
import { h } from 'hastscript'

test("rehypeCaptionForImg", async (t) => {
  await t.test("If an img tag has a title attribute, title attribute should be copied to a figcaption tag", async (t) => {
    const nodes = rehype()
      .use(rehypeCaptionForImg)
      .runSync(
        h(undefined, [
          h('body', [
            h('img', { src: 'https://example.com/image.jpg', title: 'awesome title', alt: 'alt' })
          ])
        ])
      )
    assert.deepEqual(
      nodes,
      h(undefined, [
        h('body', [
          h('figure', [
            h('img', { src: 'https://example.com/image.jpg', title: 'awesome title', alt: 'alt' }),
            h('figcaption', ['awesome title'])
          ])
        ])
      ])
    );
  });
  await t.test("When the removeTitle option is set to true, title attribute should be removed", async (t) => {
    const nodes = rehype()
      .use(rehypeCaptionForImg, { removeTitle: true })
      .runSync(
        h(undefined, [
          h('body', [
            h('img', { src: 'https://example.com/image.jpg', title: 'awesome title', alt: 'alt' })
          ])
        ])
      )
    assert.deepEqual(
      nodes,
      h(undefined, [
        h('body', [
          h('figure', [
            h('img', { src: 'https://example.com/image.jpg', alt: 'alt' }),
            h('figcaption', ['awesome title'])
          ])
        ])
      ]
      )
    );
  });
});

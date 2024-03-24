import { visit } from 'unist-util-visit'
import { isImgHasTitle } from './util.js'
import { h } from 'hastscript'

const DEFAULT_OPTIONS = {
  removeTitle: false
}

export default function rehypeCaptionForImg(options = {}) {
  const mergedOptions = Object.assign({}, DEFAULT_OPTIONS, options)

  return (tree) => {
    visit(tree, isImgHasTitle, (node, index, parent) => {
      const title = node.properties.title

      const imgProperties = node.properties
      if (mergedOptions.removeTitle) {
        delete imgProperties.title
      }

      parent.children[index] = h("figure", {}, [
        h("img", { ...imgProperties }),
        h("figcaption", title)
      ]);
    })
  }
}
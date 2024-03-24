export function isImgHasTitle({ tagName, properties }) {
  return tagName === 'img' && typeof properties.title === 'string' && properties.title.trim().length > 0
}
function addAfter<T extends Node, N extends Node>(el: T, newNode: N) {
  if (!el?.parentNode) return null
  return el.parentNode.insertBefore(newNode, el?.nextSibling)
}

export default addAfter
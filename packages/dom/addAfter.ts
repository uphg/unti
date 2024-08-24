function addAfter<T extends Node, N extends Node>(el: T, newNode: N) {
  return el?.parentNode?.insertBefore(newNode, el.nextSibling) ?? null
}

export default addAfter
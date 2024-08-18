function getSiblings<T extends Element>(el: T) {
  if (!el) return []

  const children = el.parentNode?.children!
  const length = children.length
  let index = -1
  const result: T[] = []
  while (++index < length) {
    const item = children[index] as T
    if (item === el) continue
    result.push(item)
  }
  return result
}

export default getSiblings
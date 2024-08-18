import { MaybeArrayLike } from "../shared/types"

function prepend(parent: Node, ...nodes: Array<MaybeArrayLike<Node | null>>) {
  const children = nodes.flat() as Array<Node | null>
  children.forEach((el) => {
    if (!el) return
    const { firstChild } = parent
    if (firstChild) {
      parent.insertBefore(el, firstChild)
    } else {
      parent.appendChild(el)
    }
  })
  return parent
}

export default prepend

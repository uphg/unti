import { MaybeArrayLike } from "../shared/types"

function append(parent: Element, ...nodes: Array<MaybeArrayLike<Node | Element | null>>) {
  const children = nodes.flat()
  children.forEach((el) => {
    el && parent.appendChild(el as Node)
  })
  return parent
}

export default append

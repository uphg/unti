import mergeClass from './internal/mergeClass'

function removeClass(el: Element, ...args: string[]) {
  const classNames = mergeClass(args)
  el.classList.remove(...classNames)
}

export default removeClass

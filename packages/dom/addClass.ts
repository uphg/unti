import mergeClass from './internal/mergeClass'

function addClass(el: Element, ...args: (string | string[])[]) {
  const classNames = mergeClass(args)
  el.classList.add(...classNames)
}

export default addClass

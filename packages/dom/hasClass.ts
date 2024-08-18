function hasClass(el: HTMLElement, className: string) {
  if (!el || !className) return false
  return el.classList.contains(className)
}

export default hasClass

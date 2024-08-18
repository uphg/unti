import camelize from "../core/camelize"

function getStyle(el: HTMLElement, styleName: string) {
  if (!el || !styleName) return null
  styleName = camelize(styleName)
  return el['style'][styleName]
}

export default getStyle

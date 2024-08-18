import type { StyleElement } from '../shared/types'
import isObject from '../core/isObject'
import camelize from "../core/camelize";
import each from '../core/each'

function setStyle(
  el: StyleElement,
  styles: Record<string, string> | string,
  value?: string
) {
  if (isObject(styles)) {
    each(styles, (item, key) => {
      setStyle(el, key as string, item)
    })
    return
  }

  const styleName = camelize(styles as string)
  el.style[styleName] = value
}

export default setStyle

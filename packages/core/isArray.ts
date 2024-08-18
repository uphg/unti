import isTag from './isTag'

function isArray(value: unknown): value is Array<unknown> {
  return isTag(value, 'Array')
}

export default Array.isArray ?? isArray

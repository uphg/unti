import { hasOwnProperty } from './common'

function hasOwn<T = any>(object: T, key: string | number | symbol) {
  return object !== null && object !== void 0 && hasOwnProperty.call(object, key)
}

export default hasOwn

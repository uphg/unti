import hasOwn from './hasOwn'
import isArray from './isArray'
import { ArrayIterator, ObjectIterator } from '../shared/types'

function each<T>(
  collection: T[],
  callback: ArrayIterator<T, unknown>
): T[]
function each<T extends object>(
  collection: T,
  callback: ObjectIterator<T, unknown>
): T
function each<T>(
  collection: T[] | T,
  callback: ObjectIterator<any, unknown> | ArrayIterator<T, unknown>,
): T[] | T {
  if (isArray(collection)) {
    let index = -1
    const length = collection.length
    while (++index < length) {
      callback(collection[index], index, collection)
    }
  } else {
    for (const key in collection) {
      if (hasOwn(collection, key)) {
        (callback as ObjectIterator<any, unknown>)(collection[key], key, collection)
      }
    }
  }
  return collection
}

export default each

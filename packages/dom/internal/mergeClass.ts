import splitClass from './splitClass'
import isArray from '../../core/isArray'

function mergeClass(args: (string | string[])[]) {
  const result = args.flatMap((item) => {
    return isArray(item) ? item.flatMap((names: string) => splitClass(names)) : splitClass(item)
  })
  return result
}

export default mergeClass
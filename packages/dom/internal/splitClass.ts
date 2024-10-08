import trim from '../../core/trim'

function splitClass(string: string) {
  return string && string.split(' ').filter(item => !!trim(item))
}

export default splitClass

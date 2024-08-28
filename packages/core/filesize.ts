export function getFileSize(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let index = 0
  let currentBytes = bytes
  while ( currentBytes >= 1024 && index < units.length - 1) {
    currentBytes = currentBytes / 1024
    index++
  }
  return `${currentBytes.toFixed(2)} ${units[index]}`
}
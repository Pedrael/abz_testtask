export const truncateString = (text: string, maxLength: number): string => {
  return text.length <= maxLength
    ? text
    : text.slice(0, maxLength).concat('...')
}

export const parseRegExp = (text: string, regexp: RegExp): string => {
  let match,
    result = ''
  while ((match = regexp.exec(text)) !== null) {
    result += match[0]
  }
  return result
}

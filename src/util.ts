export function truncateString(text: string, maxLength: number): string {
  return text.length <= maxLength
    ? text
    : text.slice(0, maxLength).concat('...')
}

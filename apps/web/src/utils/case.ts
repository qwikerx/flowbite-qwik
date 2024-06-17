export function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper)
}

function clearAndUpper(text: string) {
  return text.replace(/-/, '').toUpperCase()
}

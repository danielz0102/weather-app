export const parseHtml = (str) => {
  const parser = DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  return doc.firstChild
}

export const parseHtml = (str) => {
  const parser = new window.DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  return doc.firstChild
}

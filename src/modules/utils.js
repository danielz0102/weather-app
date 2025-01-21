export const parseHtml = (str) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  return doc.firstChild
}

export const getCelcius = (fahrenheit) => {
  const degrees = ((fahrenheit - 32) * 5) / 9
  return degrees.toFixed(1)
}

export const getFarhenheit = (celcius) => {
  const degrees = (celcius * 9) / 5 + 32
  return degrees.toFixed(1)
}

export const parseHtml = (str) => {
  const container = document.createElement('div')
  container.innerHTML = str

  return container.firstElementChild
}

export const getCelcius = (fahrenheit) => {
  const degrees = ((fahrenheit - 32) * 5) / 9
  return degrees.toFixed(1)
}

export const getFarhenheit = (celcius) => {
  const degrees = (celcius * 9) / 5 + 32
  return degrees.toFixed(1)
}

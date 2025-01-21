import './cityCard.css'
import cityCard from './cityCard.html'
import { parseHtml, getCelcius, getFarhenheit } from '@/modules/utils.js'
import { getWeather } from '@/api/weather.js'

const CityCard = parseHtml(cityCard)
const Temp = CityCard.querySelector('.temp')
const DEFAULT_CITY = 'London'
const UNITS = {
  C: 'C',
  F: 'F',
}
const weather = await getWeather(DEFAULT_CITY)

CityCard.set = (city, weather) => {
  const title = CityCard.querySelector('h2')
  if (title.classList.contains('error')) {
    title.classList.remove('error')
  }

  CityCard.querySelector('h2').textContent = city

  if (Temp.unit === UNITS.C) {
    weather = getCelcius(weather)
  }

  Temp.set(weather, Temp.unit)
}

CityCard.showError = (msg) => {
  const title = CityCard.querySelector('h2')
  title.textContent = msg
  title.classList.add('error')

  CityCard.querySelector('.weather').textContent = ''
}

Temp.unit = UNITS.F

Temp.set = (degrees, unit) => {
  Temp.textContent = `${degrees}°${unit}`
  Temp.degrees = Number(degrees)
  Temp.unit = unit
}

if (weather instanceof Error) {
  const status = weather.status
  CityCard.showError(
    status === 400 ? 'Location not found' : 'Sorry, something went wrong',
  )
} else {
  CityCard.set(weather.address, weather.temp)
}

Temp.addEventListener('click', () => {
  if (Temp.unit === UNITS.F) {
    Temp.unit = UNITS.C
    Temp.set(getCelcius(Temp.degrees), Temp.unit)
    return
  }

  Temp.unit = UNITS.F
  Temp.set(getFarhenheit(Temp.degrees), Temp.unit)
})

export { CityCard }

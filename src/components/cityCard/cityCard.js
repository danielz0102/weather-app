import './cityCard.css'
import cityCard from './cityCard.html'
import { parseHtml } from '@/modules/utils.js'
import { getWeather } from '@/api/weather.js'

const CityCard = parseHtml(cityCard)
const DEFAULT_CITY = 'London'
const weather = await getWeather(DEFAULT_CITY)

CityCard.set = (city, weather) => {
  const title = CityCard.querySelector('h2')
  if (title.classList.contains('error')) {
    title.classList.remove('error')
  }

  CityCard.querySelector('h2').textContent = city
  CityCard.querySelector('.weather').textContent = `${weather}°`
}

CityCard.showError = (msg) => {
  const title = CityCard.querySelector('h2')
  title.textContent = msg
  title.classList.add('error')

  CityCard.querySelector('.weather').textContent = ''
}

if (weather instanceof Error) {
  const status = weather.status
  CityCard.showError(
    status === 400 ? 'Location not found' : 'Sorry, something went wrong',
  )
} else {
  CityCard.set(weather.address, weather.temp)
}

export { CityCard }

import './cityCard.css'
import cityCard from './cityCard.html'
import { parseHtml } from '@/modules/utils.js'
import { getWeather } from '@/api/weather.js'

const CityCard = parseHtml(cityCard)
const DEFAULT_CITY = 'London'
const weather = await getWeather(DEFAULT_CITY)

CityCard.set = (city, weather) => {
  CityCard.querySelector('h2').textContent = city
  CityCard.querySelector('.weather').textContent = `${weather}°`
}

CityCard.set(weather.address, weather.temp)

export { CityCard }

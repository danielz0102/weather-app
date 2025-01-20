import './cityCard.css'
import cityCard from './cityCard.html'
import { parseHtml } from '@/modules/utils.js'
import { getWeather } from '@/api/weather.js'

const CityCard = parseHtml(cityCard)
const DEFAULT_CITY = 'London'
const weather = await getWeather(DEFAULT_CITY)

CityCard.setInfo = (city, weather) => {
  CityCard.querySelector('h2').textContent = city
  CityCard.querySelector('.weather').textContent = `${weather}°`
}

CityCard.setInfo(DEFAULT_CITY, weather)

export { CityCard }

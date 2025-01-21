import './form.css'
import formHTML from './form.html'
import { getWeather } from '@/api/weather.js'
import { parseHtml } from '@/modules/utils.js'
import { CityCard } from '@/components/cityCard/cityCard.js'

const Form = parseHtml(formHTML)
const searchBtn = Form.querySelector('#searchBtn')
const locationInput = Form.querySelector('#locationInput')

searchBtn.addEventListener('click', () => searchLocation(locationInput.value))

locationInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchLocation(locationInput.value)
  }
})

async function searchLocation(location) {
  if (location) {
    const weather = await getWeather(location)
    CityCard.set(location, weather)
  }
}

export { Form }

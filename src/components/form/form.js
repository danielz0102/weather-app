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
    const Temp = CityCard.querySelector('.temp')
    Temp.textContent = ''
    Temp.classList.add('loading')
    Temp.classList.remove('temp')

    const weather = await getWeather(location)

    if (weather instanceof Error) {
      const status = weather.status
      CityCard.showError(
        status === 400 ? 'Location not found' : 'Sorry, something went wrong',
      )
      return
    }

    CityCard.set(weather.address, weather.temp)
  }
}

export { Form }

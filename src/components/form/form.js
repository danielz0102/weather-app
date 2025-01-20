import './form.css'
import formHTML from './form.html'
import { getWeather } from '@/api/weather.js'

const container = document.createElement('div')
container.innerHTML = formHTML

const form = container.firstChild
const searchBtn = form.querySelector('#searchBtn')
const locationInput = form.querySelector('#locationInput')

searchBtn.addEventListener('click', () => searchLocation(locationInput.value))

locationInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchLocation(locationInput.value)
  }
})

async function searchLocation(location) {
  if (location) {
    const weather = await getWeather(location)
    console.log(weather)
  }
}

export { form }

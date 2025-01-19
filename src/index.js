import '@/index.css'
import { getWeatherData, processData } from './api/weather.js'

const data = await getWeatherData('Nuevo Leon,Mexico')
const weather = processData(data)
console.log({ weather })

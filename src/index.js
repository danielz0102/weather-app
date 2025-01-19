import '@fontsource/oxygen'
import '@/index.css'
import { getWeather } from './api/weather.js'

const weather = await getWeather('Nuevo Leon,Mexico')
console.log({ weather })

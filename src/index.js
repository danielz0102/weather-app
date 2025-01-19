import '@/index.css'

const data = await getWeatherData('Nuevo Leon,Mexico')
const weather = processData(data)
console.log({ weather })

async function getWeatherData(location) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=K3PYDAWZMZ3FRD6XP4PSXRW6S`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(response.status)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

function processData(data) {
  const { resolvedAddress, description, currentConditions, days } = data
  return { resolvedAddress, description, currentConditions, days }
}

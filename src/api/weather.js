export async function getWeather(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=K3PYDAWZMZ3FRD6XP4PSXRW6S`
  const data = await getData(url)

  if (data instanceof Error) return data

  return { address: data.resolvedAddress, temp: data.currentConditions.temp }
}

async function getData(url) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      const error = new Error(`HTTP ${response.status}`)
      error.status = response.status
      throw error
    }

    return await response.json()
  } catch (error) {
    console.error(error)
    return error
  }
}

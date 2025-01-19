export async function getWeather(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=K3PYDAWZMZ3FRD6XP4PSXRW6S`
  const data = await getData(url)

  console.log({ data })

  const { resolvedAddress, description, currentConditions, days } = data

  return { resolvedAddress, description, currentConditions, days }
}

async function getData(url) {
  try {
    const response = await fetch(url)
    console.log(response)

    if (!response.ok) {
      throw new Error(response.status)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

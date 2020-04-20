import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  const route = country ? `countries/${country}` : ''

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${url}/${route}`)

    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {
    return error
  }
}

export const fetchDailySummary = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)

    const modifiedData = data.map(({ confirmed, deaths, reportDate }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date: reportDate,
    }))

    return modifiedData
  } catch (error) {
    return error
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`)

    return countries.map((country) => country.name)
  } catch (error) {
    return error
  }
}
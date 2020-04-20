import React, { useState, useEffect, useCallback } from 'react'
import { fetchData } from './api'

import styles from './App.module.css'
import { InfoCards, Chart, CountryPicker } from './components'
import covidImg from './images/covid.webp'

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData(country))
    }

    fetchAPI()
  }, [country])

  const handleCountryChange = useCallback(country => {
    setCountry(country)
  }, [])

  return (
    <div className={styles.container}>
      <img src={covidImg} className={styles.image} alt="COVID-19" />
      <InfoCards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  )
}

export default App

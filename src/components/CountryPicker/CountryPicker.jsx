import React, { useState, useEffect, memo } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([])

  const fetchAPI = async () => {
    setCountries(await fetchCountries())
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  const renderCountries = () => {
    return countries.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
    ))
  }

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {renderCountries()}
      </NativeSelect>
    </FormControl>
  )
}

export default memo(CountryPicker)

import React, { useState, useEffect, memo } from 'react'
import { fetchDailySummary } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailySummary, setDailySummary] = useState([])

  const fetchAPI = async () => {
    setDailySummary(await fetchDailySummary())
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  const lineChart = dailySummary.length ? (
    <Line
      data={{
        labels: dailySummary.map(({ date }) =>
          date.split('-').reverse().join('-')
        ),
        datasets: [
          {
            data: dailySummary.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#e9a927',
            fill: true,
          },
          {
            data: dailySummary.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: '#db0300',
            fill: true,
          },
        ],
      }}
    />
  ) : null

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            data: [confirmed.value, recovered.value, deaths.value],
            label: 'People',
            backgroundColor: ['#e9a927', '#487f1e', '#db0300'],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: country },
      }}
    />
  ) : null

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  )
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.data === nextProps.data
}

export default memo(Chart, areEqual)

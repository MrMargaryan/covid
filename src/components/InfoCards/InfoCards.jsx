import React, { memo } from 'react'
import { Grid } from '@material-ui/core'

import styles from './InfoCards.module.css'
import InfoCard from '../InfoCard/InfoCard'

const InfoCards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const renderCards = () => {
    const data = [
      {
        title: 'Confirmed',
        counter: confirmed.value,
        description: 'Number of active cases of COVID-19',
      },
      {
        title: 'Recovered',
        counter: recovered.value,
        description: 'Number of recoveries from COVID-19',
      },
      {
        title: 'Deaths',
        counter: deaths.value,
        description: 'Number of deaths caused by COVID-19',
      },
    ]

    return data.map((item, index) => {
      const { title, counter, description } = item
      return (
        <InfoCard
          key={index}
          title={title}
          counter={counter}
          date={lastUpdate}
          description={description}
        />
      )
    })
  }

  return confirmed ? (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {renderCards()}
      </Grid>
    </div>
  ) : (
    'Loading...'
  )
}

export default memo(InfoCards)

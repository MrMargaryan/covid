import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'

import styles from './InfoCard.module.css'

const InfoCard = ({ title, counter, date, description }) => {
  return (
    <Grid item xs={12} md={3} component={Card} className={styles.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={counter} duration={1.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(date).toDateString()}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Grid>
  )
}

export default InfoCard

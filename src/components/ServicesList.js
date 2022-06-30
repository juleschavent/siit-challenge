import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StoreContext } from '../context/store'
import Service from './Service'

const makeClass = makeStyles((theme) => ({
  section: {
    padding: '50px 0 150px',
    backgroundColor: theme.palette.background.light,
  },
  serviceContainer: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    gap: '20px',
  },
}))

const ServicesList = () => {
  const classes = makeClass()
  const {
    services, serviceLoading,
  } = useContext(StoreContext)

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" color="textPrimary" gutterBottom>Services</Typography>
        <div className={classes.serviceContainer}>
          {serviceLoading ? 'loading' : services && services.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesList

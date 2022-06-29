import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import { StoreContext } from '../context/store'
import { usePrice } from '../utils/UsePrice'
import Service from './Service'

const makeClass = makeStyles(() => ({
  serviceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
}))

const ServicesList = () => {
  const classes = makeClass()
  const {
    services, serviceLoading, currService,
  } = useContext(StoreContext)

  return (
    <div>
      <h2>services list</h2>
      <p>
        {currService}
      </p>
      <div className={classes.serviceContainer}>
        {serviceLoading ? 'loading' : services && services.map((service) => (
          <div key={service.id}>
            <Service service={service} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesList

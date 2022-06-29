import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import { StoreContext } from '../context/store'
import { useFetch } from '../utils/UseQuerry'

const makeClass = makeStyles(() => ({
  serviceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
}))

const ServicesList = () => {
  const classes = makeClass()
  const { services, serviceLoading } = useContext(StoreContext)

  return (
    <div>
      <h2>services list</h2>
      <div className={classes.serviceContainer}>
        {serviceLoading ? 'loading' : services && services.map((service) => (
          <div key={service.id}>
            <img src={service.logo_url} alt="" />
            <p>{service.name}</p>
            <a href={service.website_url} alt="" target="_blank" rel="noreferrer">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesList

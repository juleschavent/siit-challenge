import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import { StoreContext } from '../context/store'

const makeClass = makeStyles(() => ({
  serviceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  logo: {
    width: 40,
  },
}))

const ServicesList = () => {
  const classes = makeClass()
  const {
    services, serviceLoading, currService, handleService,
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
            <div onClick={() => handleService(service.id)}>
              <img src={service.logo_url} alt="" className={classes.logo} />
              <p>{service.name}</p>
            </div>
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

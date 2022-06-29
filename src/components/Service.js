import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import { StoreContext } from '../context/store'
import { usePrice } from '../utils/UsePrice'

const makeClass = makeStyles(() => ({
  logo: {
    width: 40,
  },
}))

const Service = ({ service }) => {
  const classes = makeClass()
  const monthlyCost = usePrice(service)
  const { handleService } = useContext(StoreContext)

  return (
    <>
      <div onClick={() => handleService(service.id)}>
        <img src={service.logo_url} alt="" className={classes.logo} />
        <p>{service.name}</p>
        <p>{monthlyCost}</p>
      </div>
      <a href={service.website_url} alt="" target="_blank" rel="noreferrer">
        Learn more
      </a>
    </>
  )
}

export default Service

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog'
import { Typography } from '@mui/material'
import { StoreContext } from '../context/store'
import { usePrice } from '../utils/UsePrice'

const makeClass = makeStyles((theme) => ({
  container: {
    padding: 16,
    '& > *': {
      marginBottom: '16px !important',
    },
  },
  logo: {
    height: 40,
  },
  link: {
    color: theme.palette.text.link,
  },
}))

const ServiceModal = ({ open, handleClose, service }) => {
  const classes = makeClass()
  const monthlyCost = usePrice(service)

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className={classes.container}>
        <img
          src={service.logo_url}
          alt={`logo ${service.name}`}
          className={classes.logo}
        />
        <Typography color="textPrimary" variant="body2">
          Company: {service.name}
        </Typography>
        <Typography variant="body2">
          Website: {' '}
          <a href={service.website_url} alt={`link to ${service.name} website`} target="_blank" rel="noreferrer" className={classes.link}>
            {service.website_url}
          </a>
        </Typography>
        <Typography variant="body2">
          Cost: {monthlyCost}
        </Typography>
      </div>
    </Dialog>
  )
}

export default ServiceModal

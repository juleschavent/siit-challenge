/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import InfoIcon from '@mui/icons-material/Info'
import Tooltip from '@mui/material/Tooltip'
import { StoreContext } from '../context/store'
import { usePrice } from '../utils/UsePrice'
import ServiceModal from './ServiceModal'

const makeClass = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    padding: 16,
    width: 'fit-content',
    boxShadow: '0 2px 2px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      maxWidth: 277,
      margin: '0 auto',
    },
  },
  logo: {
    height: 40,
    marginRight: 26,
  },
  iconContainer: {
    display: 'flex',
  },
  infoIcon: {
    marginRight: 8,
  },
  exitIcon: {
    display: 'inline-flex',
  },
}))

const Service = ({ service }) => {
  const classes = makeClass()
  const monthlyCost = usePrice(service)
  const { handleService } = useContext(StoreContext)

  const userList = document.getElementById('users')

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div
      className={classes.container}
    >
      <Tooltip title="Click to see who's using this service" placement="bottom">
        <img
          src={service.logo_url}
          alt={`logo ${service.name}`}
          className={classes.logo}
          onClick={() => {
            userList.scrollIntoView({ behavior: 'smooth' })
            handleService(service.id)
          }}
        />
      </Tooltip>
      <div className={classes.iconContainer}>
        <Tooltip title="Informations" placement="bottom">
          <InfoIcon color="primary" fontSize="small" className={classes.infoIcon} onClick={handleClickOpen} />
        </Tooltip>
        <Tooltip title={`Go to ${service.name}'s website`} placement="bottom">
          <a href={service.website_url} alt={`link to ${service.name} website`} target="_blank" rel="noreferrer" className={classes.exitIcon}>
            <ExitToAppIcon color="secondary" fontSize="small" />
          </a>
        </Tooltip>
      </div>
      <ServiceModal open={open} handleClose={handleClose} service={service} />
    </div>
  )
}

export default Service

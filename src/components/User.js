import { makeStyles } from '@mui/styles'
import React from 'react'
import Typography from '@mui/material/Typography'

const makeClass = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    backgroundColor: theme.palette.background.light,
    borderRadius: 8,
    padding: 16,
    flexBasis: '30%',
    boxShadow: '0 2px 2px rgba(0,0,0,0.2)',
    [theme.breakpoints.down('md')]: {
      flexBasis: '44%',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
    },
  },
  avatar: {
    maxWidth: 64,
  },
  role: {
    backgroundColor: theme.palette.background.btn,
    color: 'white',
    width: 'fit-content',
    padding: '3px 6px',
    borderRadius: 100,
  },
}))

const User = ({ user }) => {
  const classes = makeClass()
  return (
    <div className={classes.container}>
      <img src={user.avatar_url} alt={`${user.name} avatar`} className={classes.avatar} />
      <div>
        <Typography variant="body1" color="textPrimary">{user.name}</Typography>
        <Typography variant="caption" className={classes.role}>{user.position}</Typography>
      </div>
    </div>
  )
}

export default User

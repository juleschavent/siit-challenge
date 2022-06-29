import { makeStyles } from '@mui/styles'
import React from 'react'
import Container from '@mui/material/Container'
import siitLogo from '../assets/siit-logo.svg'

const makeClass = makeStyles((theme) => ({
  section: {
    padding: '70px 0',
    backgroundColor: theme.palette.background.primary,
    borderRadius: '0 0 100px 0',
  },
}))

const Header = () => {
  const classes = makeClass()
  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <img src={siitLogo} alt="" />
      </Container>
    </section>
  )
}

export default Header

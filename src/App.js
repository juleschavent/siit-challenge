import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import ServicesList from './components/ServicesList'
import UsersList from './components/UsersList'
import StoreContextProvider from './context/store'
import theme from './theme'
import Header from './components/Header'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreContextProvider>
        <Header />
        <UsersList />
        <ServicesList />
      </StoreContextProvider>
    </ThemeProvider>
  )
}

import React, { useEffect, useState } from 'react'
import ServicesList from './components/ServicesList'
import UsersList from './components/UsersList'
import StoreContextProvider from './context/store'
import { useFetch } from './utils/UseQuerry'

export function App() {
  return (
    <StoreContextProvider>
      <UsersList />
      <ServicesList />
    </StoreContextProvider>
  )
}

import React, {
  createContext, useEffect, useMemo, useState,
} from 'react'
import { useFetch } from '../utils/UseQuerry'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const [users, setUsers] = useState()
  const { data: userData, loading: userLoading, error: userError } = useFetch('users.json')

  const [services, setServices] = useState()
  const { data: serviceData, loading: serviceLoading, error: serviceError } = useFetch('services.json')

  useEffect(() => {
    setUsers(userData)
  }, [userData])

  useEffect(() => {
    setServices(serviceData)
  }, [serviceData])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StoreContext.Provider value={{
      users,
      setUsers,
      userLoading,
      userError,
      services,
      setServices,
      serviceLoading,
      serviceError,
    }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider

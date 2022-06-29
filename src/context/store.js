import React, { createContext, useEffect, useState } from 'react'
import { useFetch } from '../utils/UseQuerry'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const [users, setUsers] = useState()
  const { data: userData, loading: userLoading, error: userError } = useFetch('users.json')

  const [services, setServices] = useState()
  const { data: serviceData, loading: serviceLoading, error: serviceError } = useFetch('services.json')

  const [currService, setCurrService] = useState(0)
  const handleService = (value) => {
    setCurrService(value)
  }

  const { data: userPerService, loading: userPerServiceLoading, error: userPerServiceError } = useFetch(`users.json?service_id=${currService}`)

  useEffect(() => {
    let tempUser
    if (currService >= 1) {
      tempUser = userPerService
    } else {
      tempUser = userData
    }
    setUsers(tempUser)
  }, [userData, userPerService, currService])

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
      currService,
      setCurrService,
      handleService,
    }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider

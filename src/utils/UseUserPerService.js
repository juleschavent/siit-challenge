import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/store'

export const useUserPerService = (id) => {
  const { userData, userLoading } = useContext(StoreContext)
  const [nbUser, setNbUser] = useState(0)

  useEffect(() => {
    let tempUser = 0
    if (userLoading) {
      setNbUser(0)
    } else if (userData) {
      userData.forEach((user) => {
        if (user.service_ids.includes(id)) {
          tempUser += 1
        }
      })
    }
    setNbUser(tempUser)
  }, [userData, userLoading])

  return nbUser
}

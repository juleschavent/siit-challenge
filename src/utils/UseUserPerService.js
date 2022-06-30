import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/store'

export const useUserPerService = (id) => {
  const { userData } = useContext(StoreContext)
  const [nbUser, setNbUser] = useState(0)

  useEffect(() => {
    let tempUser = 0
    userData.forEach((user) => {
      if (user.service_ids.includes(id)) {
        tempUser += 1
      }
    })
    setNbUser(tempUser)
  }, [userData])
  return nbUser
}

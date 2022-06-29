import { useContext } from 'react'
import { StoreContext } from '../context/store'
import { useFetch } from './UseQuerry'

export const useUserPerService = (id) => {
  const { userData } = useContext(StoreContext)
  let nbUser = 0

  userData.forEach((user) => {
    if (user.service_ids.includes(id)) {
      nbUser += 1
    }
  })
  return nbUser
}

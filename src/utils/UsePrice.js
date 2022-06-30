import React from 'react'
import { useUserPerService } from './UseUserPerService'

export const usePrice = (service) => {
  const nb_user_using_service = useUserPerService(service.id)
  const { flat_cost, cost_per_user, nb_users_included } = service.price
  const pricePerActualUser = nb_user_using_service - nb_users_included >= 0 ? nb_user_using_service - nb_users_included : 0
  const monthlyCost = flat_cost + cost_per_user * pricePerActualUser
  return (
    <span>
      {monthlyCost}
      $ per month
    </span>
  )
}

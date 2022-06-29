import {
  useCallback, useEffect, useMemo, useState,
} from 'react'
import axios from 'axios'

export const useFetch = (value) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    // axios.get(`https://obscure-bastion-81944.herokuapp.com/http://localhost:3001/${value}`).then((response) => {
    axios.get(`http://localhost:3001/${value}`).then((response) => {
      setData(response.data)
      setLoading(false)
    })
      .catch((err) => setError(err))
  }, [value])

  return { data, loading, error }
}

// export const GetOrgane = () => {
//   axios.get('http://localhost:3001/organe').then((response) => response.data)
//     .catch((error) => error)
// }

import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = (value) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:3001/${value}`).then((response) => {
      setData(response.data)
      setLoading(false)
    })
      .catch((err) => setError(err))
  }, [value])

  return { data, loading, error }
}

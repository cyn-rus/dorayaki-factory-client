import { useState } from 'react'

interface IData {
  token?: string
}

export default function useContext() {
  const getToken = () => {
    const token = localStorage.getItem('token')
    if (token) return JSON.parse(token)
    return ''
  }

  const [token, setToken] = useState(getToken())

  const saveToken = (token: string) => {
    if (token !== undefined) {
      localStorage.setItem('token', JSON.stringify(token))
      setToken(token)
    }
  }

  const removeToken = () => {
    localStorage.removeItem('token')  
  }

  return {
    setToken: saveToken,
    removeToken,
    token,
  }
}
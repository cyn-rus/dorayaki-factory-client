import { useState } from 'react'

interface IData {
  token?: string
}

export default function useContext() {
  const getData = () => {
    const data = localStorage.getItem('token')
    if (data) return JSON.parse(data)
    return ''
  }

  const [data, setData] = useState(getData())

  const saveData = (data: IData) => {
    if (data.token !== undefined) {
      localStorage.setItem('token', JSON.stringify(data.token))
      setData(data.token)
    }
  }

  const removeData = () => {
    localStorage.removeItem('token')  
  }

  return {
    setData: saveData,
    removeData,
    data
  }
}
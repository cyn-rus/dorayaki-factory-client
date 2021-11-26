import useContext from './context/storageManager'
import { useApp } from './context/stateManager'
import { axios } from './api'

export function IsAuth() {
  const { token, removeToken, setToken } = useContext()
  const { username, setUsername } = useApp()

  if (!username && token) {
    axios.post('/authenticate', {
      token: token
    }).then(function (res) {
      const data = res.data

      if (data !== 'Token Invalid') {
        setToken(token)
        setUsername(data)
        return true
      } else {
        removeToken()
        return false
      }
    }).catch ((_) => {
      removeToken()
      return false
    })
  } else if (!token) {
    return false
  } else {
    return true
  }
}

export function capitalize(str: string) {
  if (str) {
    const splitStr = str.toLowerCase().split(' ')
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    return splitStr.join(' ')
  }
}
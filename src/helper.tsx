import useContext from './context'

export const IsAuth = () => {
  const { data } = useContext()
  if (data) return true
  return false
}
import axios from 'axios'

export async function getGeolocation() {
  const res = await axios.get('https://geolocation-db.com/json/')
  return res.data.IPv4
}
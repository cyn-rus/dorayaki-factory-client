import axios from "axios"
import { BACKEND_URL } from "../const"
const instance = axios.create({
  baseURL: `${BACKEND_URL}`,
  headers: {'Access-Control-Allow-Origin': '*'}
})
export default instance
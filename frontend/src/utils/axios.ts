import axios from "axios"

const baseURL = "http://localhost:3333"

export default axios.create({
  baseURL,
})

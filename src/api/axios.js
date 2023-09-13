import axios from "axios";

const instance = axios.create({
  baseURL: "https://fortnite-api.com/v2/",
  headers: {'Content-Type': 'application/json'},
  timeout: 10000
})

export { instance };
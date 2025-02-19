import axios, { InternalAxiosRequestConfig } from "axios"
import store from "store"

const baseURL = "https://artistic-insights-alley-api.onrender.com/"

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    channel: "WEB",
  },
})


axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = store.get("atk")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // if (error.response?.status === 401 ) {
    //   store.clearAll()
    //   toast.error("Session expired, please login again")
      
    // }
    return Promise.reject(error)

  },
)


export default axiosInstance

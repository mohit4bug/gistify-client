import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: import.meta.env.VITE_REACT_BACKEND_URL,
    withCredentials: true
})
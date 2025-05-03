import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/';

const api = axios.create({
    baseURL: API_URL,

})

api.interceptors.request.use(async (config) => {
    const token = '123';
    config.headers.Authorization = token
    
    return config
})

api.interceptors.request.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // redirect to login
        }

        return Promise.reject(error)
    }
)

export default api;
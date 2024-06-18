import axios from 'axios'

const instance = axios.create({
    baseURL: ' http://localhost:3000/',
    headers:{
        "Content-Type": 'application/json',
    },
    timeout: 1000,
})
instance.defaults.withCredentials = true

export default instance
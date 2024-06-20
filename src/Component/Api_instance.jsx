import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://node-server-54gputhz8-fahiz-mavoors-projects.vercel.app/',
    headers:{
        "Content-Type": 'application/json',
    },
    timeout: 1000,
})
instance.defaults.withCredentials = true

export default instance
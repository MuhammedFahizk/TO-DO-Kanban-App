import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://flavorfusion-lollp2hoh-fahiz-mavoors-projects.vercel.app/',
    headers:{
        "Content-Type": 'application/json',
    },
    timeout: 1000,
})
instance.defaults.withCredentials = true

export default instance
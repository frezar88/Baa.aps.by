import axios from "axios";



const $host = axios.create({
    baseURL:'http://stat.auto-baa.by/'
    // baseURL:'/'
})

const $authHost = axios.create({
    baseURL:'http://stat.auto-baa.by/'
    // baseURL:'/'
})

const authInterceptor = config =>{
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
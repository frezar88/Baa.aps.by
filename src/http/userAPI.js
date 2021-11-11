import {$host} from "./index";
import jwtDecode from "jwt-decode";

export const registration =async (name,email,password,phone,dealer,brands)=>{
    const response = await $host.post('/server/auth/sign-up',{name,password,phone,email,dealer,brands})
    return response
}

export const login =async (email,password)=>{
    const {data} = await $host.post('/server/auth/sign-in',{email,password})
    localStorage.setItem('token',data.access)
    localStorage.setItem('refresh',data.refresh)
    localStorage.setItem('exp',data.exp)
    return jwtDecode(data.access)

}

export const check =async (token)=>{
    const {data} = await $host.post('/server/auth/refresh',{token:token})
    localStorage.setItem('token',data.access)
    return jwtDecode(data.access)

}


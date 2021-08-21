import request from './axiosBox'

export const getA = (params:{[name:string]:any})=> request('Hello',params)

export const TestJWT = (params:{name:string,password:string})=> request('/hello',params)

export const refreshToken = (params:{token:string})=> request('/refreshToken',params)
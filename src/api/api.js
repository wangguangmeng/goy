import http from './apiMethods'

export const getData = (params) =>{
	return http.Get('http://172.16.9.80:8080/static/data.json',params)
}
import { ENDPOINTS } from "@/config/config"
import { client } from "./Axious"

let headers = {
    headers: {
        "content-type": "application/json",
    }
}

 interface IPropsDelete{
id:string
}


export const addHotelsInfo = (data: any) => {
    let url = `${ENDPOINTS.addHotels}`
    return client.post(url, data, headers)

}

export const getHotel=()=>{
    let url=`${ENDPOINTS.getHotels}`
    return client.post(url,headers)
}

export const hotelsById = (data: any) => {
    let url = `${ENDPOINTS.getHotelById}`
    return client.post(url, data, headers)
}

export const updateHotelIfo = (data: any) => {
    debugger
    let url = `${ENDPOINTS.updateHotel}`
    return client.post(url, data, headers)
}

export const deleteHotel=(data:IPropsDelete)=>{
    let url =`${ENDPOINTS.deleteHotel}`
    return client.post(url,data,headers)
}


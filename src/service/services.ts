import { ENDPOINTS } from "@/config/config";
import { client } from "./Axios";

let headers = {
  headers: {
    "content-type": "application/json",
  },
};

interface IPropsDelete {
  id: string;
}

export const addHotelsInfo = (data: any) => {
  let url = `${ENDPOINTS.addHotels}`;
  return client.post(url, data, headers);
};

export const getHotel = () => {
  let url = `${ENDPOINTS.getHotels}`;
  return client.post(url, headers);
};

export const hotelsById = (data: any) => {
  let url = `${ENDPOINTS.getHotelById}`;
  return client.post(url, data, headers);
};

export const updateHotelInfo = (data: any) => {
  //debugger;
  let url = `${ENDPOINTS.updateHotel}`;
  return client.post(url, data, headers);
};

export const deleteHotel = (data: IPropsDelete) => {
  let url = `${ENDPOINTS.deleteHotel}`;
  return client.post(url, data, headers);
};


export const deleteTrain = (data: any) => {
  let url = `${ENDPOINTS.deleteTrain}`;
  return client.post(url, data, headers);
};


export const addtrainInfo = (data: any) => {
  let url = `${ENDPOINTS.addTrain}`;
  return client.post(url, data, headers);
};

export const getAllTrains = (page: any) => {
  let url = `${ENDPOINTS.getTrain}`;
  return client.post(url, page, headers);
};

export const trainById = (data: any) => {
  let url = `${ENDPOINTS.getTrainById}`;
  return client.post(url, data, headers);
};

export const updateTrainInfo = (data: any) => {
  //debugger;
  let url = `${ENDPOINTS.updateTrain}`;
  return client.post(url, data, headers);
};

//bus servicess//
export const addBus = (data: any) => {
  let url = `${ENDPOINTS.addBus}`
  return client.post(url, data, headers)

}
export const updateBus = (data: any) => {
  let url = `${ENDPOINTS.updateBus}`
  return client.post(url, data, headers)

}
export const getBusById = (data: any) => {
  let url = `${ENDPOINTS.getBusById}`
  return client.post(url, data, headers)

}
export const deleteBus = (data: any) => {
  let url = `${ENDPOINTS.deleteBus}`
  return client.post(url, data, headers)

}
export const getAllBuses = (page: any) => {
  let url = `${ENDPOINTS.getAllBuses}`
  return client.post(url, page, headers)

}

export const search = (page: any) => {
  let url = `${ENDPOINTS.search}`
  return client.post(url, page, headers)

}


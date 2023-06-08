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

import { ENDPOINTS } from "@/config/config";
import { client } from "./Axios";

let headers = {
  headers: {
    "content-type": "application/json",
  },
};

let formDataHeader = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};


interface IPropsDelete {
  id: string;
}

export const loginDetails = (data: any) => {
  console.log("service in login details...");
  let url = `${ENDPOINTS.loginDetails}`;
  return client.post(url, data, headers);
};

export const getEmailId = (data: any) => {
  let url = `${ENDPOINTS.resetPwd}`;
  return client.post(url, data, headers);
};

export const updatePwd = (data: any) => {
  //debugger;
  let url = `${ENDPOINTS.updatePwd}`;
  return client.post(url, data, headers);
};

export const addHotelsInfo = (data: any) => {
  let url = `${ENDPOINTS.addHotels}`;
  return client.post(url, data, formDataHeader);
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
  return client.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAllTrains = (page: any) => {
  let url = `${ENDPOINTS.getTrain}`;
  return client.post(url, page, headers);
};

export const deleteTrain = (_id: any) => {
  console.log("service in delete train..", _id);
  let url = `${ENDPOINTS.deleteTrain}`;
  return client.post(url, _id, headers);
};

export const trainById = (data: any) => {
  let url = `${ENDPOINTS.getTrainById}`;
  return client.post(url, data, headers);
};
export const TrainSearch = (data: any) => {
  let url = `${ENDPOINTS.searchTrain}`;
  return client.post(url, data, headers);
};

export const updateTrainInfo = (data: any) => {
  //debugger;
  let url = `${ENDPOINTS.updateTrain}`;
  return client.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-rapidapi-host": "file-upload8.p.rapidapi.com",
      "x-rapidapi-key": "your-rapidapi-key-here",
    },
  });
};

//bus servicess//
export const addBus = (data: any) => {
  console.log("add bus service called");
  let url = `${ENDPOINTS.addBus}`;
  return client.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const updateBus = (data: any) => {
  let url = `${ENDPOINTS.updateBus}`;
  return client.post(url, data, headers);
};
export const getBusById = (data: any) => {
  let url = `${ENDPOINTS.getBusById}`;
  return client.post(url, data, headers);
};
export const deleteBus = (data: any) => {
  let url = `${ENDPOINTS.deleteBus}`;
  return client.post(url, data, headers);
};
export const getAllBuses = (page: any) => {
  let url = `${ENDPOINTS.getAllBuses}`;
  return client.post(url, page, headers);
};

export const busSearch = (data: any) => {
  let url = `${ENDPOINTS.busSearch}`;
  return client.post(url, data, headers);
};

export const searchHotel = (hotelname: any) => {
  let url = `${ENDPOINTS.searchHotel}`;
  return client.post(url, hotelname, headers);
};

export const sortHotelBy = (data: any) => {
  let url = `${ENDPOINTS.sortHotelBy}`;
  return client.post(url, data, headers);
};

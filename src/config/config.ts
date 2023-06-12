export const Config = {
  BASE_URL: "http://localhost:3000/api/",
  // Image_URL:'http://localhost:8080/api/v1/displayImage/'
};

export const ENDPOINTS = {
  loginDetails: "user/auth?action=LOGIN",
  addHotels: "hotelsapi/hotelsapi?action=addHotels",
  getHotels: "hotelsapi/hotelsapi?action=getHotels",
  getHotelById: "hotelsapi/hotelsapi?action=getHotelDetails",
  deleteHotel: "hotelsapi/hotelsapi?action=delete",
  updateHotel: "hotelsapi/hotelsapi?action=updateHotels",

  addTrain: "trainApi/trainApi?action=ADD_TRAIN",
  updateTrain: "trainApi/trainApi?action=UPDATE_TRAIN",
  deleteTrain: "trainApi/trainApi?action=DELETE_TRAIN",
  getTrain: "trainApi/trainApi?action=GET_TRAINS",
  getTrainById: "trainApi/trainApi?action=GET_TRAIN_BY_ID",
  searchTrain: 'trainApi/trainApi?action=SEARCH_TRAINS',

  addBus: 'busapi/busapi?action=ADD_BUS',
  getAllBuses: 'busapi/busapi?action=GET_ALL_BUSES',
  getBusById: 'busapi/busapi?action=GET_BUS_BY_ID',
  updateBus: 'busapi/busapi?action=UPDATE_BUS',
  deleteBus: 'busapi/busapi?action=DELETE_BUS',
  busSearch: 'busapi/busapi?action=SEARCH',

};

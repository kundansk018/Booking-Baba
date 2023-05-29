import {
    ADD_HOTELS,
    ADD_HOTELS_FAIL,
    ADD_HOTELS_SUCCESS,
   
  } from "../constant";
  export const initialState = {
    loading: false,
    hotelDetails: undefined,
  
  };
  
  export const HotelReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case ADD_HOTELS:
        return {
          ...state,
          loading: true,
          hotelDetails: undefined,
        };
  
      case ADD_HOTELS_SUCCESS: {
        console.log("data in typereducer: ", action.payload);
        return {
          ...state,
          loading: false,
          hotelDetails: action.payload,
        };
      }
  
      case ADD_HOTELS_FAIL:
        return {
          ...state,
          loading: false,
        };
  
      default: {
        return state;
      }
    }
  };
  
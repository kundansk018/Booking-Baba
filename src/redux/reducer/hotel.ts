import {
  ADD_HOTELS,
  ADD_HOTELS_FAIL,
  ADD_HOTELS_SUCCESS,
  PREVIOUS_HOTEL_DATA,
  ADD_HOTELS_DATA,
  UPDATE_HOTEL_DETAILS,
  SAVE_HOTEL_DETAILS,
  DELETE_HOTEL,

} from "../constant";
export const initialState = {
  loading: false,
  hotelDetails: undefined,
  previousHotelData: null,
  updateHotelDetails: null,
  updateHotelData: null,


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

    case ADD_HOTELS_DATA:
      return {
        ...state,
        loading: false,
        hotelDetails: action.payload,

      };

    case PREVIOUS_HOTEL_DATA: {
      return {
        ...state,
        previousHotelData: action.payload,

      }
    };
    case SAVE_HOTEL_DETAILS: {
      console.log("data in typereducer: ", action.payload);
      return {
        ...state,
        loading: false,
        updateHotelDetails: action.payload,

      }
    };
    case UPDATE_HOTEL_DETAILS: {
      return {
        ...state,
        loading: false,
        updateHotelData: action.payload,

      }
    };
    case DELETE_HOTEL: {
      return {
        ...state,
        loading: false,
        deletedStatus: action.payload,

      }
    };

    default: {
      return state;
    }
  }
};

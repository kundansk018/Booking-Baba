import {
  ADD_BUS_REQUEST_FAIL,
  ADD_BUS_REQUEST_SUCCESS,
  DELETE_BUS_REQUEST_SUCCESS,
  UPDATE_BUS_DETAILS,
} from "../constant";

export const initialState = {
  busDetails: null,
  updateBusDetails: null
};

export const BusReducer = (state = initialState, action: any) => {
  switch (action.type) {


    case UPDATE_BUS_DETAILS:
      return {
        ...state,
        loading: false,
        updateBusDetails: action.payload,
      };



    case ADD_BUS_REQUEST_SUCCESS: {
      console.log("data in bus reducer: ", action.payload);
      return {
        ...state,
        loading: false,
        busDetails: action.payload,
      };
    }

    case DELETE_BUS_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        busDetails: action.payload,
      };
    }

    case ADD_BUS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
      };

    default: {
      return state;
    }
  }
};

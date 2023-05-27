import { ADD_BUS_REQUEST, ADD_BUS_REQUEST_FAIL, ADD_BUS_REQUEST_SUCCESS } from "../constant";

export const initialState = {
    busDetails:null,
  }; 

  export const BusReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case ADD_BUS_REQUEST:
        return {
          ...state,
          loading: true,
          busDetails: undefined,
        };
  
      case ADD_BUS_REQUEST_SUCCESS: {
        console.log("data in bus reducer: ", action.payload);
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
  
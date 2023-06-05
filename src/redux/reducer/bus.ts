import {
  BUS_BY_ID_REQUEST_SUCCESS,
  BUS_REQUEST_FAIL,
  BUS_REQUEST_SUCCESS,
} from "../constant";

export const initialState = {
  busDetails: null,
  getBusById: null,
};

export const BusReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BUS_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        busDetails: action.payload,
      };
    }

    case BUS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
      };

    case BUS_BY_ID_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        getBusById: action.payload,
      };

    default: {
      return state;
    }
  }
};

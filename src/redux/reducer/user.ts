import {
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_FAIL,
  SIGNUP_REQUEST_SUCCESS,
} from "../constant";
export const initialState = {
  loading: false,
  userDetails: undefined,
  createdUser: null,
  
};

export const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // case SIGNUP_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //     createdUser: undefined,
    //   };

    case SIGNUP_REQUEST_SUCCESS: {
      console.log("data in typereducer: ", action.payload);
      return {
        ...state,
        loading: false,
        createdUser: action.payload,
      };
    }

    // case SIGNUP_REQUEST_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //   };

    default: {
      return state;
    }
  }
};

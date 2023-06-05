import {
  TRAIN_BY_ID_REQUEST_SUCCESS,
  TRAIN_REQUEST_FAIL,
  TRAIN_REQUEST_SUCCESS,
} from "../constant";

export const initialState = {
  trainDetails: null,
  getTrainById: null,
};

export const TrainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TRAIN_REQUEST_SUCCESS: {
      console.log("data in bus reducer: ", action.payload);
      return {
        ...state,
        loading: false,
        trainDetails: action.payload,
      };
    }

    case TRAIN_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
      };

    case TRAIN_BY_ID_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        getTrainById: action.payload,
      };

    default: {
      return state;
    }
  }
};

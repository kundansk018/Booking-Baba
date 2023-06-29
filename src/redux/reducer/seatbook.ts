import { BUS_SEATS_BOOK_SUCCESS } from "../constant";

export const initialState = {
  bookSeats: undefined,
};

export const seatBookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BUS_SEATS_BOOK_SUCCESS:
      console.log("seat books reducer ::::::::::::::", action.payload);
      return {
        ...state,
        loading: false,
        bookSeats: action.payload,
      };

    default: {
      return state;
    }
  }
};

import {
  BOOK_SEAT_SUCCESS,
  BUS_SEATS_BOOK_SUCCESS,
  REQUEST_BOOKED_SEATS,
} from "../constant";

export const initialState = {
  bookSeats: undefined,
  seats: undefined,
  bookedSeats: undefined,
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

    case BOOK_SEAT_SUCCESS:
      console.log("seat books reducer ::::::::::::::", action.payload);
      return {
        ...state,
        loading: false,
        seats: action.payload,
      };

    case REQUEST_BOOKED_SEATS:
      console.log("REQUEST_BOOKED_SEATS_DATA::::::::::::::", action.payload);
      return {
        ...state,
        loading: false,
        bookedSeats: action.payload,
      };

    default: {
      return state;
    }
  }
};

import { seatBook } from "@/service/services";
import {
  BUS_REQUEST_FAIL,
  BUS_SEATS_BOOK_SUCCESS,
  REQUEST_COMPLETED,
  REQUEST_STARTED,
} from "../constant";
import { AppDispatch } from "../store";

export const book_seats = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action book_seats: ", data);
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });

    // const res = await seatBook(data);

    if (data) {
      console.log("inside if:::::::::", data);

      dispatch({ type: BUS_SEATS_BOOK_SUCCESS, payload: data });
    } else {
      dispatch({ type: BUS_REQUEST_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

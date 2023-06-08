import React from "react";
import {
  ADD_HOTELS,
  ADD_HOTELS_DATA,
  ADD_HOTELS_FAIL,
  ADD_HOTELS_SUCCESS,
  DELETE_HOTEL,
  PREVIOUS_HOTEL_DATA,
  REQUEST_COMPLETED,
  REQUEST_STARTED,
  SAVE_HOTEL_DETAILS,
  UPDATE_HOTEL_DETAILS,
} from "../constant";
import { AppDispatch } from "../store";
import { ENDPOINTS } from "@/config/config";
import {
  addHotelsInfo,
  deleteHotel,
  getHotel,
  hotelsById,
  updateHotelInfo,
} from "@/service/services";

/*.................Add hotels..........*/
export const addHotels = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    const res = await addHotelsInfo(data);
    if (res && res.status === 200) {
      dispatch({ type: ADD_HOTELS_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: ADD_HOTELS_FAIL, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const savePreviousData =
  (data: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: PREVIOUS_HOTEL_DATA, payload: data });
  };

/*..................get Hotels...............*/

export const getHotels = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    const res = await getHotel();
    if (res && res.status == 200) {
      dispatch({ type: ADD_HOTELS_DATA, payload: res.data?.data });
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

/*................. get Hotel By Id..........*/
export const getHotelById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    let data = { id: id };
    const res = await hotelsById(data);
    if (res && res.status === 200) {
      dispatch({ type: SAVE_HOTEL_DETAILS, payload: res.data });
      dispatch({ type: REQUEST_COMPLETED, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
};

/*................. update Hotel By Id..........*/
export const updateHotel = (data: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REQUEST_STARTED, payload: null });
    let param = { id: data._id, data: data };
    delete data._id;
    const res = await updateHotelInfo(param);
    if (res && res.status === 200) {
      dispatch({ type: UPDATE_HOTEL_DETAILS, payload: res.data });
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

/*....................delete hotel...................*/

export const deleteHotelById =
  (id: string) => async (dispatch: AppDispatch) => {
    debugger;
    let param = { id: id };
    const res = await deleteHotel(param);
    if (res && res.status == 200) {
      console.log(res);
      dispatch({ type: DELETE_HOTEL, payload: res.data });
    }
  };

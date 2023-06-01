import React from "react";
import {
  ADD_BUS_REQUEST,
  ADD_BUS_REQUEST_FAIL,
  ADD_BUS_REQUEST_SUCCESS,
  REQUEST_COMPLETED,
  REQUEST_STARTED,
} from "../constant";
import { AppDispatch } from "../store";


export const addBuses = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  dispatch({ type: REQUEST_STARTED, payload: null });

  //api call
  const res = await fetch(
    "http://localhost:3000/api/busapi/busapi?action=ADD_BUS",
    {
      method: "POST",

      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  if (res.ok === true) {
    console.log("inside if:::::::::", res);

    dispatch({ type: ADD_BUS_REQUEST_SUCCESS, payload: data });
    alert("bus data add Successfully")
  } else {
    dispatch({ type: ADD_BUS_REQUEST_FAIL, payload: null });
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

import React from "react";
import {
  ADD_BUS_REQUEST,
  ADD_BUS_REQUEST_FAIL,
  ADD_BUS_REQUEST_SUCCESS,
} from "../constant";
import { AppDispatch } from "../store";


export const addBuses = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  dispatch({ type: ADD_BUS_REQUEST, payload: null });

  //api call
  const res = await fetch(
    "http://localhost:3000/api/demo/demo?action=ADD_BUS",
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
  } else {
    dispatch({ type: ADD_BUS_REQUEST_FAIL, payload: null });
  }
};

import React from "react";
import {
  REQUEST_STARTED,
  REQUEST_COMPLETED,
  TRAIN_REQUEST_SUCCESS,
  TRAIN_REQUEST_FAIL,
} from "../constant";
import { AppDispatch } from "../store";

export const addTrain = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  dispatch({ type: REQUEST_STARTED, payload: null });

  const res = await fetch(
    "http://localhost:3000/api/trainApi/trainApi?action=ADD_TRAIN",
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
    dispatch({ type: TRAIN_REQUEST_SUCCESS, payload: data });
    alert("Train Added Successfully.");
  } else {
    alert("Fail to add Train Or Train is already added.");
    dispatch({ type: TRAIN_REQUEST_FAIL, payload: null });
  }

  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const getTrains = (data: any) => async (dispatch: AppDispatch) => {
  //api call
  dispatch({ type: REQUEST_STARTED, payload: null });

  const res = await fetch(
    "http://localhost:3000/api/trainApi/trainApi?action=GET_ALL_TRAINS",
    {
      method: "POST",

      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  if (res.ok === true) {
    console.log("response is..", res);
    dispatch({ type: TRAIN_REQUEST_SUCCESS, payload: "data" });
  } else {
    alert("Email Not Registered. Please Sign Up ...");
    dispatch({ type: TRAIN_REQUEST_FAIL, payload: null });
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

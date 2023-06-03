import React from "react";
import {
  ADD_BUS_REQUEST_FAIL,
  ADD_BUS_REQUEST_SUCCESS,
  DELETE_BUS_REQUEST_SUCCESS,
  REQUEST_COMPLETED,
  REQUEST_STARTED,
  UPDATE_BUS_DETAILS,
} from "../constant";
import { AppDispatch } from "../store";
// import axios from "axios";

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
    alert("bus data add Successfully");
  } else {
    dispatch({ type: ADD_BUS_REQUEST_FAIL, payload: null });
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};

export const deleteBusAction = (id: any) => async (dispatch: AppDispatch) => {
  console.log("id in action: ", id);
  alert(id);
  dispatch({ type: REQUEST_STARTED, payload: null });

  // api call
  const res = await fetch(
    "http://localhost:3000/api/busapi/busapi?action=DELETE_BUS",
    {
      method: "POST",

      body: id.toString(),
      headers: {},
    }
  );

  if (res.ok === true) {
    console.log("inside if:::::::::", JSON.stringify(res.body));
    dispatch({ type: DELETE_BUS_REQUEST_SUCCESS, payload: res });
    alert("bus data Deleted Successfully");
  } else {
    dispatch({ type: ADD_BUS_REQUEST_FAIL, payload: null });
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};


export const updateBusAction = (id: any) => async (dispatch: AppDispatch) => {
  console.log("id in action: ", id);
  alert(id);
  dispatch({ type: REQUEST_STARTED, payload: null });

  // api call
  const res = await fetch(
    "http://localhost:3000/api/busapi/busapi?action=UPDATE_BUS",
    {
      method: "POST",

      body: id.toString(),
      headers: {},
    }
  );

  if (res.ok === true) {
    console.log("inside if:::::::::", JSON.stringify(res.body));
    dispatch({ type: ADD_BUS_REQUEST_SUCCESS, payload: res });
    alert("bus data Updated Successfully");
  } else {
    dispatch({ type: ADD_BUS_REQUEST_FAIL, payload: null });
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });
};


export const getBusById = (id: any) => async (dispatch: AppDispatch) => {

  dispatch({ type: REQUEST_STARTED, payload: null });
  let data = { "_id": id }
  const res = await fetch(

    "http://localhost:3000/api/busapi/busapi?action=GET_BUS_BY_ID",
    {
      method: "POST",

      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  if (res.ok === true) {
    console.log("updtae response", res)
    let bus_records = await res.json()
    dispatch({ type: UPDATE_BUS_DETAILS, payload: bus_records })
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });

}
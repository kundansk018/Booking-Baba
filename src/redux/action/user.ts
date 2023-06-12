import React from "react";
import {
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  SIGNUP_REQUEST_FAIL,
  SIGNUP_REQUEST_SUCCESS,
  REQUEST_STARTED,
  REQUEST_COMPLETED,
  RESET_REQUEST_FAIL,
  RESET_REQUEST_SUCCESS,
} from "../constant";
import { AppDispatch } from "../store";
import { loginDetails } from "@/service/services";

export const signup = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  dispatch({ type: REQUEST_STARTED, payload: null });

  const res = await fetch(
    "http://localhost:3000/api/user/auth?action=createUser",
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

    dispatch({ type: SIGNUP_REQUEST_SUCCESS, payload: data });
  } else {
    alert("Email is already Registered. Please log in...");
    dispatch({ type: SIGNUP_REQUEST_FAIL, payload: null });
  }

  dispatch({ type: REQUEST_COMPLETED, payload: null });
  //dispatch({ type: SIGNUP_REQUEST_FAIL, payload: null });

  //fail
};

export const login = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action LOGIN: ", data);
  dispatch({ type: REQUEST_STARTED, payload: null });

  //api call
  // const res = await fetch("http://localhost:3000/api/user/auth?action=LOGIN", {
  //   method: "POST",

  //   body: JSON.stringify(data),
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // });

  const res = await loginDetails(data);

  if (res && res.status === 200) {
    console.log("inside if:::::::::", res);
    dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res });
  } else {
    alert("Email Not Registered. Please Sign Up ...");
    dispatch({ type: LOGIN_REQUEST_FAIL, payload: null });
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });

  //fail
};

export const reset = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action RESET: ", data);
  dispatch({ type: REQUEST_STARTED, payload: null });

  //api call
  const res = await fetch("http://localhost:3000/api/user/auth?action=RESET", {
    method: "POST",

    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  if (res.ok === true) {
    console.log("inside if:::::::::", res);
    dispatch({ type: RESET_REQUEST_SUCCESS, payload: res });
  } else {
    alert("Email Not Registered. Please Sign Up ...");
    dispatch({ type: RESET_REQUEST_FAIL, payload: null });
  }
  dispatch({ type: REQUEST_COMPLETED, payload: null });

  //fail
};

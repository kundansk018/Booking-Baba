import React from "react";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_FAIL,
  SIGNUP_REQUEST_SUCCESS,
} from "../constant";
import { AppDispatch } from "../store";

export const signup = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  dispatch({ type: SIGNUP_REQUEST, payload: null });

  //api call
  const res = await fetch(
    "http://localhost:3000/api/auth/user?action=createUser",
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
    dispatch({ type: SIGNUP_REQUEST_FAIL, payload: null });
  }

  //fail
};

export const login =
  (email: any, password: any) => async (dispatch: AppDispatch) => {
    console.log("data in action LOGIN: ", email);
    dispatch({ type: LOGIN_REQUEST, payload: null });

    //api call
    const res = await fetch(
      "http://localhost:3000/api/auth/user?action=LOGIN",
      {
        method: "POST",

        body: JSON.stringify(email, password),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (res.ok === true) {
      console.log("inside if:::::::::", res);

      dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res });
    } else {
      dispatch({ type: LOGIN_REQUEST_FAIL, payload: null });
    }

    //fail
  };

import React, { Dispatch } from "react";
import { SIGNUP_REQUEST, SIGNUP_REQUEST_SUCCESS } from "../constant";
import { AppDispatch } from "../store";

export const signup = () => (dispatch: AppDispatch) => {
  console.log("data in action: ");
  dispatch({ type: SIGNUP_REQUEST_SUCCESS, payload: { firstname: "Sanket" } });
};

//dispatch: Dispatch<IGetAllAssets | ISetAllAssets>

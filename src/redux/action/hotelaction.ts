import React from "react";
import { ADD_HOTELS, ADD_HOTELS_FAIL, ADD_HOTELS_SUCCESS, PREVIOUS_HOTEL_DATA } from "../constant";
import { AppDispatch } from "../store";

export const addHotels = (data: any) => async (dispatch: AppDispatch) => {
  console.log("data in action: ", data);
  dispatch({ type: ADD_HOTELS, payload: null });

  //api call
  const res = await fetch(
   
    "http://localhost:3000/api/hotelsapi/hotelsapi?action=addHotels",
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
    

    dispatch({ type: ADD_HOTELS_SUCCESS, payload: data });
  } else {
    dispatch({ type: ADD_HOTELS_FAIL, payload: null });
  }

 
};

export const savePreviousData = (data: any) => async (dispatch: AppDispatch) => {

  dispatch({ type: PREVIOUS_HOTEL_DATA, payload: data });



 
};

// export const getHotel = (data: any) => async (dispatch: AppDispatch) => {
//   //api call
//   dispatch({ type: ADD_HOTELS, payload: null });

//   const res = await fetch(
//     "http://localhost:3000/api/user/auth?action=getHotels",
//     {
//       method: "POST",

//       body: JSON.stringify(data),
//       headers: {
//         "content-type": "application/json",
//       },
//     }
//   );
//   if (res.ok === true) {
//     console.log("response is..", res);
// dispatch({ type: ADD_HOTELS_DATA, payload: "data" });
//   }
// };

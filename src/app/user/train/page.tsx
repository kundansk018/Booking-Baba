"use client";
import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import { getTrainBySearch } from "@/redux/action/trainAction";
import { useAppDispatch } from "@/redux/store";
import React from "react";

import { useState } from "react";

export default function BookTrain() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(getDefaultDate());
  const dispatch = useAppDispatch();

  function getDefaultDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month: any = today.getMonth() + 1;
    let day: any = today.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  }

  if (from && to) {
    let data = { from, to };
    dispatch(getTrainBySearch);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("123");
    if (from && to) {
      let data = { from_Stn: from, to_Stn: to };
      console.log("Searching for trains:", data);
      dispatch(getTrainBySearch(data));
    }
  };

  return (
   
    <div className="card pt-4 pr-96 pl-96 ">
      <div className="card width-[50%] bg-white flex flex-col items-center justify-center h-[550px] ">
        <h1 className="text-3xl font-Signika mb-4">Train Ticket Booking</h1>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="mr-2 flex-1">
              <BBInput
                containerProps={{ className: "mb-3" }}
                type="text"
                label="From"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="ml-2 flex-1">
              <BBInput
                containerProps={{ className: "mb-3" }}
                type="text"
                label="To"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
          </div>
          <div className="flex mb-4">
            {/* <div className="flex-1">
              <BBInput
                containerProps={{ className: "mb-3" }}
                type="Date"
                label="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div> */}
          </div>

          <BBButton
            color=""
            label="Search Trains"
            size="lg"
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="h-10 bg-blackblue w-[500px] "
          />
        </form>
      </div>
    </div>
  );
}

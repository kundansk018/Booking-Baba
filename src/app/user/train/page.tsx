"use client";
import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import { getTrainBySearch } from "@/redux/action/trainAction";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import React from "react";

import { useState } from "react";
import Select from "react-select";

export default function BookTrain() {
  const [fromStation, setFromStation] = useState<any>("");
  const [toStation, setToStation] = useState<any>("");
  const [date, setDate] = useState(getDefaultDate());
  const dispatch = useAppDispatch();
  const router = useRouter();

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

  const optionList = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Nashik", label: "Nashik" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Hydrabad", label: "Hydrabad" },
  ];

  // function handleSelect(data: any) {
  //   setSelectedOptions(data);
  // }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (fromStation || toStation) {
      let data = { from_Stn: fromStation.value, to_Stn: toStation.value };
      console.log("Searching for trains:", data);
      dispatch(getTrainBySearch(data));
      router.push("/user/train/list");
    }
  };

  return (
    <div className="card pt-4 pr-96 pl-96 ">
      <div className="card width-[50%] bg-white flex flex-col items-center justify-center h-[550px] ">
        <h1 className="text-3xl font-Signika mb-4">Train Ticket Booking</h1>
        <form className="">
          <div className="flex mb-4">
            <div className="dropdown-container ml-2 flex-1">
              <Select
                options={optionList}
                placeholder="From Station"
                value={fromStation}
                onChange={(value) => setFromStation(value)}
                isSearchable={true}
                // isMulti
              />
            </div>
            {/* <div className="mr-2 flex-1">
              <BBInput
                containerProps={{ className: "mb-3" }}
                type="text"
                label="From Station"
                value={fromStation}
                onChange={(e) => setFromStation(e.target.value)}
              />
            </div> */}
            {/* <div className="ml-2 flex-1">
              <BBInput
                containerProps={{ className: "mb-3" }}
                type="text"
                label="To Station"
                value={toStation}
                onChange={(e) => setToStation(e.target.value)}
              />
            </div> */}
            <div className="dropdown-container ml-2 flex-1">
              <Select
                options={optionList}
                placeholder="To Station"
                value={toStation}
                onChange={(value) => setToStation(value)}
                isSearchable={true}
                // isMulti
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

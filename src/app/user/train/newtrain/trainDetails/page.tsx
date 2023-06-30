"use client";
import BBButton from "@/app/components/BBButton";
import BBTypography from "@/app/components/BBTypography";
import { Typography } from "@material-tailwind/react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function TrainData() {
  const trainData: any = useSelector((state: any) => state.train.getTrainById);
  console.log("Train data is in update page ..", trainData);

  const [selectedOption, setSelectedOption] = useState(
    trainData?.data?.classType
  );
  const [selectedRadioB, setSelectedRadioB] = useState("");
  const router = useRouter();

  const handleRadioButton = (event: any) => {
    setSelectedRadioB(event.target.value);
  };

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="pt-7">
      <table className="mx-auto  w-[60%]  table-auto text-left">
        <tbody>
          <tr>
            <td className="p-4 border-b border-blue-gray-50">
              <BBTypography variant="small">
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  {trainData?.data?.trainName}
                </span>
                <br />
                <span style={{ color: "#8e9a9d !important" }}>
                  {" "}
                  {trainData?.data?.trainNo}
                </span>
              </BBTypography>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <BBTypography variant="small">
                <span
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {trainData?.data?.depTime}
                </span>
                <br />
                <span style={{ fontSize: "12px" }}>
                  {trainData?.data?.from_Stn} <br />
                  {trainData?.data?.departDate}
                </span>
              </BBTypography>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <BBTypography variant="small">
                <span style={{ fontSize: "13px", color: "#535B61 " }}>
                  {trainData?.data?.duration}
                </span>
                <br />
                <span style={{ fontSize: "12px", color: "#535B61" }}>
                  {trainData?.data?.stops} Stops
                </span>
              </BBTypography>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <BBTypography variant="small">
                <span style={{ fontSize: "18px" }}>
                  {" "}
                  {trainData?.data?.arrivalTime}
                </span>
                <br />
                <span style={{ fontSize: "12px", color: "#535B61" }}>
                  {trainData?.data?.to_Stn}
                  <br />
                  {trainData?.data?.arrDate}
                </span>
              </BBTypography>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex pt-5 pb-10 place-content-center">
        <label className="inline-flex items-center mr-6">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          <span className="ml-2">First Class</span>
        </label>

        <label className="inline-flex items-center mr-6">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="radio"
            value="Economy"
            checked={selectedOption === "Economy"}
            onChange={handleOptionChange}
          />
          <span className="ml-2">Second Class</span>
        </label>

        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          <span className="ml-2">First Class Sleeper</span>
        </label>
      </div>

      <div>
        <table className="mx-auto border border-black w-[60%]  table-auto text-left pt-20">
          <tbody>
            <tr>
              <td className="pl-8 pt-3 pb-3">
                15 June,Sat <br />
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    value="date1"
                    checked={selectedRadioB === "date1"}
                    onChange={handleRadioButton}
                  />
                  <span className="ml-2">Avilable</span>
                </label>
              </td>
              <td>
                16 June
                <br />
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    value="date2"
                    checked={selectedRadioB === "date2"}
                    onChange={handleRadioButton}
                  />
                  <span className="ml-2">Avilable</span>
                </label>
              </td>
              <td>
                17 June <br />
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    value="date3"
                    checked={selectedRadioB === "date3"}
                    onChange={handleRadioButton}
                  />
                  <span className="ml-2">Avilable</span>
                </label>
              </td>
              <td>
                18 June <br />
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    value="date4"
                    checked={selectedRadioB === "date4"}
                    onChange={handleRadioButton}
                  />
                  <span className="ml-2">Avilable</span>
                </label>
              </td>
              <td>
                19 June <br />
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    value="date5"
                    checked={selectedRadioB === "date5"}
                    onChange={handleRadioButton}
                  />
                  <span className="ml-2">Avilable</span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="flex items-center pl-72 pt-10 justify-between pr-72"
        style={{ color: "#535B61" }}
      >
        <div className="flex flex-col ">
          <span>Total Fare : </span>
          <b>{trainData?.data?.fare}</b>
        </div>
        <div className=" ">
          <BBButton
            className=""
            color="#0071"
            label="Book Now"
            onClick={() => router.push("user/train/newtrain/confirm")}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}

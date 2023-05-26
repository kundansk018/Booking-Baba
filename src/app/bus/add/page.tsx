"use client";

import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import "../../styles/hotel.css";

import {
  Card,
  Typography,
  Select,
  Option,
  Checkbox,
  List,
} from "@material-tailwind/react";
import { Input } from "postcss";
import { useState } from "react";
import BBCheckbox from "@/app/components/BBCheckbox";
import BBDropdown from "@/app/components/BBDropdown";
import { type } from "os";
import BBErrorDialog from "@/app/components/BBErrorDialog";

export default function AddBus() {
  const [busname, setBusname] = useState<String>("");
  const [from, setFrom] = useState<String>("");
  const [to, setTo] = useState<String>("");
  const [busnumber, setBusnumber] = useState<String>("");
  const [time, setTime] = useState<String>("");
  const [seats, setSeats] = useState<String>("");
  const [ticketprice, setTicketPrice] = useState<String>("");
  const [operator, setOperator] = useState<String>("");
  // const [status, setStatus] = useState("");
  const [file, setFile] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [busType, setBusType] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");

  const [wifi, setWifi] = useState<boolean>(true);
  const [cpoint, setCpoint] = useState<boolean>(true);
  const [system, setSystem] = useState<boolean>(true);
  const [lights, setLights] = useState<boolean>(true);

  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const [errorDialogMessage, setErrorDialogMessage] = useState([]);

  const addBus = (e: any) => {
    console.log("called add bus");
    console.log(
      "add bus data",
      busname,
      busnumber,
      from,
      to,
      arrivalTime,
      arrivalDate,
      pickUpPoint,
      departureTime,
      seats,
      ticketprice,
      operator,
      currentStatus,
      busType
    );

    let isErrorFound = false;
    let error: any = [];
    if (!busname || !busname.trim()) {
      isErrorFound = true;
      error.push("plz add bus..");
    }

    if (!busnumber || !busnumber.trim()) {
      isErrorFound = true;
      error.push("Please add bus no..");
    }
    if (!from || !from.trim()) {
      isErrorFound = true;
      error.push("Please add route ");
    }
    if (!to || !to.trim()) {
      isErrorFound = true;
      error.push("Please add route ");
    }
    if (!arrivalDate || !arrivalDate.trim()) {
      isErrorFound = true;
      error.push("Please enter arrival date ");
    }
    if (!departureTime || !departureTime.trim()) {
      isErrorFound = true;
      error.push("Please enter departure time ");
    }
    if (!arrivalTime || !arrivalTime.trim()) {
      isErrorFound = true;
      error.push("Please enter arrival time");
    }
    if (!seats || !seats.trim()) {
      isErrorFound = true;
      error.push("Please enter total seats");
    }
    if (!ticketprice || !ticketprice.trim()) {
      isErrorFound = true;
      error.push("Please enter ticket price ");
    }
    if (!operator || !operator.trim()) {
      isErrorFound = true;
      error.push("Please enter bus operator name ");
    }
    if (!pickUpPoint || !pickUpPoint.trim()) {
      isErrorFound = true;
      error.push("Please enter pickup point");
    }
    if (!busType || !busType.trim()) {
      isErrorFound = true;
      error.push("Please enter bus type ");
    }
    if (!currentStatus || !currentStatus.trim()) {
      isErrorFound = true;
      error.push("Please enter current status");
    }
    if (!file || !file.trim()) {
      isErrorFound = true;
      error.push("Please upload file");
    }

    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    }
  };

  return (
    <div className="bg-white h-full mt-5 p-5 m-auto w-full justify-center rounded-lg">
      <div className="flex justify-center  text-3xl">
        <h1>
          <b>Add Bus</b>
        </h1>
      </div>
      <div className="flex flex-row justify-center m-6">
        <div className="flex  flex-col mx-5 w-[300px] ">
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Bus Name"
            value={busname + ""}
            onChange={(e) => setBusname(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Bus Number"
            value={busnumber + ""}
            onChange={(e) => setBusnumber(e.target.value)}
          />

          <BBDropdown
            options={[{ label: "Nashik" }, { label: "Pune" }]}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            label="From"
          />

          <BBDropdown
            options={[{ label: "Nashik" }, { label: "Pune" }]}
            value={to}
            onChange={(e) => setTo(e.target.value)}
            label="To"
          />
          <br />

          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Arrival Date"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            type="date"
          />
        </div>

        <div className="flex  flex-col mx-5 w-[300px]">
          <BBInput
            containerProps={{ className: "mb-4" }}
            type="time"
            label="Departure Time"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
          />

          <BBInput
            containerProps={{ className: "mb-4" }}
            type="time"
            label="Arrival Time"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
          />

          <BBInput
            containerProps={{ className: "mb-4" }}
            type="text"
            label="Total Seats"
            value={seats + ""}
            onChange={(e) => setSeats(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Ticket Price"
            value={ticketprice + ""}
            onChange={(e) => setTicketPrice(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Bus Operator"
            value={operator + ""}
            onChange={(e) => setOperator(e.target.value)}
          />
        </div>

        <div className="flex  flex-col mx-5 w-[300px]">
          <BBDropdown
            options={[
              { label: "CBS" },
              { label: "New CBS" },
              { label: "mahamarg" },
            ]}
            value={pickUpPoint}
            onChange={(e) => setPickUpPoint(e.target.value)}
            label="Pickup Point"
          />
          <br />

          <BBDropdown
            options={[{ label: "Non-Sleeper" }, { label: "Sleeper" }]}
            value={busType}
            onChange={(e) => setBusType(e.target.value)}
            label="Bus Type"
          />
          <br />

          <BBDropdown
            options={[{ label: "Available" }, { label: "Not-Availabel" }]}
            value={currentStatus}
            onChange={(e) => setCurrentStatus(e.target.value)}
            label="Current Status"
          />
          <br />

          <BBInput
            containerProps={{ className: "w-[300px]" }}
            type="file"
            label=""
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
        </div>
      </div>

      <List className=" flex flex-row justify-center">
        <h3> Facilities:</h3>

        <BBCheckbox
          containerProps={{ className: "hover:before:opacity-0" }}
          ripple={false}
          id="1"
          onChange={(e) => setCpoint(!cpoint)}
          checked={cpoint}
          label="Charging Point"
        />

        <BBCheckbox
          containerProps={{ className: "hover:before:opacity-0" }}
          ripple={false}
          id="2"
          onChange={(e) => setSystem(!system)}
          checked={system}
          label="Entertainment Systems"
        />

        <BBCheckbox
          containerProps={{ className: "hover:before:opacity-0" }}
          ripple={false}
          id="3"
          onChange={(e) => setLights(!lights)}
          checked={system}
          label="Reading Lights"
        />

        <BBCheckbox
          containerProps={{ className: "hover:before:opacity-0" }}
          ripple={false}
          id="5"
          onChange={(e) => setWifi(!wifi)}
          checked={wifi}
          label="WiFi"
        />
      </List>
      <div className="flex justify-center mt-4">
        <BBButton
          color=""
          label="Add "
          size="lg"
          onClick={(e) => addBus(e)}
          className="h-12 bg-blackblue w-[500px] "
        />
      </div>
      <BBErrorDialog
        dialogHeader="Error"
        dialogMessage={errorDialogMessage}
        open={showErrorDialog}
        onOkClick={() => setShowErrorDialog(false)}
      />
    </div>
  );
}

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
import { useAppDispatch } from "@/redux/store";
import { addBuses } from "@/redux/action/busaction";

export default function AddBus() {
  const dispatch = useAppDispatch();
  const [busname, setBusname] = useState<String>("");
  const [from, setFrom] = useState<String>("");
  const [to, setTo] = useState<String>("");
  const [busnumber, setBusnumber] = useState<String>("");
  const [time, setTime] = useState<String>("");
  const [seats, setSeats] = useState<String>("");
  const [ticketprice, setTicketPrice] = useState<String>("");
  const [operator, setOperator] = useState<String>("");
  const [busstops, setBusStops] = useState<String>("");
  const [noofstop, setNoOfStop] = useState("");
  const [bookingseats, setBookingSeats] = useState("");
  const [travelagencyname, setTravelAgencyName] = useState("");
  // const [status, setStatus] = useState("");
  // const [file, setFile] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [busType, setBusType] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  // const [photos, setPhotos] = useState<String>("");
  const [wifi, setWifi] = useState<boolean>(true);
  const [cpoint, setCpoint] = useState<boolean>(true);
  const [system, setSystem] = useState<boolean>(true);
  const [lights, setLights] = useState<boolean>(true);

  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const [errorDialogMessage, setErrorDialogMessage] = useState([]);

  const addBus = (e: any) => {
    console.log("called add bus");
    let data = {
      // file,
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
      busType,
      busstops,
      noofstop,
      bookingseats,
      travelagencyname,

    };

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

    if (!busstops || !busstops.trim()) {
      isErrorFound = true;
      error.push("Please enter busstops point");
    }

    if (!busType || !busType.trim()) {
      isErrorFound = true;
      error.push("Please enter bus type ");
    }
    if (!currentStatus || !currentStatus.trim()) {
      isErrorFound = true;
      error.push("Please enter current status");
    }
    // if (!file || !file.trim()) {
    //   isErrorFound = true;
    //   error.push("Please upload file");
    // }

    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    } else {
      dispatch(addBuses(data));
      console.log("else called");
    }
  };

  return (
    <div className="bg-white h-full mt-5 p-5 m-auto w-full justify-center rounded-lg">
      <div className="flex items-center justify-center">
        <Typography className="px-4 font-castoro" variant="h3" color="black">
          Add Bus
        </Typography>
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
          {/* <BBInput
            containerProps={{ className: "mb-4" }}
            type="file"
            label="file"
            value={file + ""}
            onChange={(e) => setFile(e.target.value)}
          /> */}

          <BBDropdown
          
            options={[{ label: "Window-Seats" }, { label: "Non_Window-Seats" }]}
            value={bookingseats}
            onPress={(value: any) => {
              setBookingSeats(value);
            }}
            label="Booking Seats"
          />


          <BBDropdown
            options={[{ label: "Nashik" }, { label: "Pune" }]}
            value={from}
            onPress={(value: any) => {
              setFrom(value);
            }}
            label="From"
          />

          <BBDropdown
            options={[{ label: "Nashik" }, { label: "Pune" }]}
            value={to}
            onPress={(value: any) => {
              setTo(value);
            }}
            label="To"
          />
     

          <BBDropdown
            options={[
              { label: "Sai-Travel-Agency" },
              { label: "Chhatrapati-Travel-Agency" },
            ]}
            value={travelagencyname}
            onPress={(value: any) => {
              setTravelAgencyName(value);
            }}
            label="Travel Agency Name"
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
            label="Arrival Date"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            type="date"
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
            onPress={(value: any) => {
              setPickUpPoint(value);
            }}
            label="PickUp Point"
          />
          <br />
          <BBDropdown
            options={[
              { label: "Nashik New CBS" },
              { label: "Sinner" },
              { label: "Shirdi" },
              { label: "Nimgoan" },
              { label: "Shirdi Local" },
              { label: "New Pune Mahamarge" },
              { label: "Devpure" },
              { label: "Pune Shivaji Nager" },
            ]}
            value={busstops}
            onPress={(value: any) => {
              setBusStops(value);
            }}
            label=" View Bus Stops"
          />
          <br />

          <BBDropdown
            options={[
              { label: "Ac-Shivneri" },
              { label: "Semi-Luxury" },
              { label: "Night Express" },
              { label: "Ordinary-Express" },
              { label: "Day Ordinary" },
              { label: "Ac-Volvo" },
              { label: "Non-Ac-Shivneri" },
            ]}
            value={busType}
            onPress={(value: any) => {
              setBusType(value);
            }}
            label="BusType"
          />
          <br />

          <BBDropdown
            options={[{ label: "Available" }, { label: "Not-Availabel" }]}
            value={currentStatus}
            onPress={(value: any) => {
              setCurrentStatus(value);
            }}
            label="CurrentStatus"
          />
          <br />
          <BBDropdown
            options={[
              { label: "1" },
              { label: "2" },
              { label: "3" },
              { label: "4" },
              { label: "5" },
            ]}
            value={noofstop}
            onPress={(value: any) => {
              setNoOfStop(value);
            }}
            label="No Of Bus Stop"
          />
          <br />
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

        {/* <BBCheckbox
          containerProps={{ className: "hover:before:opacity-0" }}
          ripple={false}
          id="2"
          onChange={(e) => setSystem(!system)}
          checked={system}
          label="Entertainment Systems"
        /> */}

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

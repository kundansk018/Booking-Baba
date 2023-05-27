"use client";

import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import { useCountries } from "use-react-countries";
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
import { useEffect, useState } from "react";
import BBCheckbox from "@/app/components/BBCheckbox";

export default function AddHotels() {
  const [hotelname, setHotelname] = useState<String>("");
  const [adress, setAdress] = useState<String>("");
  const [street, setStreet] = useState<String>("");
  const [contactno, setContactNo] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [ownerName, setOwnerName] = useState<String>("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [file, setFile] = useState("");
  const [pool, setPool] = useState<boolean>(true);
  const [wifi, setWifi] = useState<boolean>(true);
  const [kids, setKids] = useState<boolean>(true);
  const [lunch, setLunch] = useState<boolean>(true);
  const [dinner, setDinner] = useState<boolean>(true);
  const [price, setPrice] = useState("");
  const { countries } = useCountries();
  const [location, setLocation] = useState("");
  const [room, setRoom] = useState("");

  //name type adress location  services wifi dinner kunch swiimmingparling gym kids

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords.latitude + ", " + position.coords.longitude);
    });
  }, []);

  return (
    <div className="bg-white h-full mt-5 p-5 m-auto w-[55%] justify-center rounded-lg">
      <div className="flex justify-center  text-3xl">
        <h1>Add Hotel</h1>
      </div>
      <div className="flex flex-row justify-center m-6">
        <div className="flex  flex-col mx-5 w-[300px] ">
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Hotel Name"
            value={hotelname + ""}
            onChange={(e) => setHotelname(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Hotel Owner"
            value={ownerName + ""}
            onChange={(e) => setOwnerName(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            type="number"
            label="Contact No"
            value={contactno + ""}
            onChange={(e) => setContactNo(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            type="email"
            label="Email"
            value={email + ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "w-[300px]" }}
            type="file"
            label="Hotel Photos"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
        </div>
        <div className="flex  flex-col mx-5 w-[300px]">
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Adress Line1"
            value={adress + ""}
            onChange={(e) => setAdress(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Adress Line2 & Street"
            value={street + ""}
            onChange={(e) => setStreet(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="PinCode"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <Select
            containerProps={{ className: "mb-4" }}
            label="Country"
            menuProps={{ className: "h-48" }}
          >
            {countries.map(({ name }: any) => (
              <Option key={name} value={name}>
                {name}
              </Option>
            ))}
          </Select>
        </div>

        {/* <div className="flex  flex-col mx-5 w-[300px] ">
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Price"
            value={price + ""}
            onChange={(e) => setPrice(e.target.value)}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            label="Latitude & Longitude"
            value={location}
          />
          <BBInput
            containerProps={{ className: "mb-4" }}
            type="number"
            label="Room"
            value={room + ""}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div> */}
      </div>

      {/* <List className=" flex flex-row justify-center">
        <h3> Services:</h3>

        <BBCheckbox
          containerProps={{ className: "hover:before:opacity-0" }}
          ripple={false}
          id="1"
          onChange={(e) => setDinner(!dinner)}
          checked={dinner}
          label="Dinner"
        />

        <BBCheckbox
          containerProps={{ className: "hover:before:opacity-0" }}
          ripple={false}
          id="2"
          onChange={(e) => setLunch(!lunch)}
          checked={lunch}
          label="Lunch"
        />

        <BBCheckbox
          containerProps={{ className: "hover:before:opacity-0" }}
          ripple={false}
          id="3"
          onChange={(e) => setPool(!pool)}
          checked={pool}
          label="Swimming Pool"
        />

        <BBCheckbox
          containerProps={{ className: "hover:before:opacity-0" }}
          ripple={false}
          id="4"
          onChange={(e) => setKids(!kids)}
          checked={kids}
          label="kids"
        />

        <BBCheckbox
          containerProps={{ className: "hover:before:opacity-0" }}
          ripple={false}
          id="5"
          onChange={(e) => setWifi(!wifi)}
          checked={wifi}
          label="WiFi"
        />
      </List> */}
      <div className="flex justify-center mt-4">
        <BBButton
          color=""
          label="Next "
          size="lg"
          onClick={() => alert("Submit btn")}
          className="h-12 bg-blackblue w-[500px] "
        />
      </div>
    </div>
  );
}

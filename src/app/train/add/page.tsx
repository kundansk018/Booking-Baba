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
import { useAppDispatch } from "@/redux/store";
import { addHotels } from "@/redux/action/hotelaction";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import BBErrorDialog from "@/app/components/BBErrorDialog";

export default function AddTrain() {
  const [trainname, settrainname] = useState<String>("");
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

  const dispatch = useAppDispatch();
  const [errorDialogMessage, setErrorDialogMessage] = useState([]);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const router = useRouter();

  //name type adress location  services wifi dinner kunch swiimmingparling gym kids
  const hotelData: any = useSelector((state: any) => state.hotel.hotelDetails);
  console.log("hotel data is ..", hotelData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords.latitude + ", " + position.coords.longitude);
      if (hotelData) {
        router.push("/train");
      }
    });
  }, [hotelData]);

  const addHotelDetails = () => {
    let data = {
      trainname: trainname,
      ownerName: ownerName,
      contactno: contactno,
      email: email,
      file: file,
      adress: adress,
      street: street,
      city: city,
      pin: pin,
      countries: countries,
      price: price,
      location: location,
      room: room,
      dinner: dinner,
      lunch: lunch,
      pool: pool,
      kids: kids,
      wifi: wifi,
    };

    let isErrorFound = false;
    let error: any = [];
    if (!trainname || !trainname.trim()) {
      isErrorFound = true;
      error.push("Please enter Hotel Name");
    }
    if (!ownerName || !ownerName.trim()) {
      isErrorFound = true;
      error.push("Please enter Owner Name");
    }

    if (!contactno || !contactno.trim()) {
      isErrorFound = true;
      error.push("Please enter Contact No");
    }

    if (!email || !email.trim()) {
      isErrorFound = true;
      error.push("Please enter valid email address");
    }

    if (!file || !file.trim()) {
      isErrorFound = true;
      error.push("Please Select File");
    }

    if (!pin || !pin.trim()) {
      isErrorFound = true;
      error.push("Please enter Address");
    }

    if (!room || !room.trim()) {
      isErrorFound = true;
      error.push("Please enter Address");
    }
    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    } else {
      dispatch(addHotels(data));
    }
  };

  return (
    <>
      <div className="bg-white h-full mt-5 p-5 m-auto w-[70%] justify-center rounded-lg">
        <div className="flex justify-center  text-3xl">
          <h1>Add Train</h1>
        </div>
        <div className="flex flex-row justify-center m-6">
          <div className="flex  flex-col mx-5 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Train Name"
              value={trainname + ""}
              onChange={(e) => settrainname(e.target.value)}
            />
            {/* <BBInput
              containerProps={{ className: "mb-4" }}
              label="Hotel Owner"
              value={ownerName + ""}
              onChange={(e) => setOwnerName(e.target.value)}
            /> */}
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

          <div className="flex  flex-col mx-5 w-[300px] ">
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
              onChange={(e) => setLocation}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="Room"
              value={room + ""}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
        </div>

        <List className=" flex flex-row justify-center">
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
        </List>
        <div className="flex justify-center mt-4">
          <BBButton
            color=""
            label="ADD "
            size="lg"
            onClick={addHotelDetails}
            className="h-12 bg-blackblue w-[500px] "
          />
        </div>
      </div>

      <BBErrorDialog
        dialogHeader="Error"
        dialogMessage={errorDialogMessage}
        open={showErrorDialog}
        onOkClick={() => setShowErrorDialog(false)}
      />
    </>
  );
}

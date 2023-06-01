"use client";

import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";

import "../../../styles/hotel.css";

import {

  List,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import BBCheckbox from "@/app/components/BBCheckbox";
import { useAppDispatch } from "@/redux/store";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getHotelById } from "@/redux/action/hotelaction";


export default function UpdateHotel({ params }: any) {
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
  const [update, setUpdate] = useState("")

  const [country, setCountry] = useState("")

  // const [location, setLocation] = useState("");


  const dispatch = useAppDispatch();
  const [errorDialogMessage, setErrorDialogMessage] = useState([]);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const router = useRouter();
  const hotelState = useSelector((state: any) => state.hotel);


  // console.log("hotel data is ..", hotelState);


  useEffect(() => {
    dispatch(getHotelById(params.id))
  }, [])


  useEffect(() => {
   let hotel_data=hotelState.updateHotelDetails?.data
   if(hotel_data){
    const{adress,hotelname,ownerName,contactno,email,city,pin,file}=hotel_data
    setAdress(adress)
    setHotelname(hotelname)
    setOwnerName(ownerName)
    setContactNo(contactno)
    setEmail(email)
    setStreet(city)
    setCity(pin)
    setPin(pin)
    // setFile(file)
   }
 
    
  }, [])



  console.log(hotelState.updateHotelDetails)



  const updateHotelDetails = () => {

    router.push("/hotels/update/1")
  }

  return (
    <>
      <div className="bg-white h-[40%] pb-4 mt-5 m-auto w-[60%] justify-center rounded-lg">
        <div className="flex justify-center h-12 bg-[#4fb291] text-white px-5  text-2xl">
          <h1>Update Hotel Details</h1>
        </div>
        <div className="flex flex-row justify-center m-6">
          <div className="flex  flex-col mx-4 w-[300px] ">
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
              containerProps={{ className: "w-[300px] mb-4" }}
              type="file"
              label="Hotel Photos"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
            {/* <BBInput
              containerProps={{ className: "" }}
              label="Latitude & Longitude"
              value={location} onChange={(e) => setLocation(location)}
            /> */}
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
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
            label="NEXT"
            size="lg"
            onClick={updateHotelDetails}
            className="h-12 bg-blackblue w-[500px] "
          />

        </div>
      </div>

      {/* <BBErrorDialog
        dialogHeader="Error"
        dialogMessage={errorDialogMessage}
        open={showErrorDialog}
        onOkClick={() => setShowErrorDialog(false)}
      /> */}
    </>
  );
}

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
import { useEffect, useState } from "react";
import BBCheckbox from "@/app/components/BBCheckbox";
import { useAppDispatch } from "@/redux/store";
import { addHotels, savePreviousData } from "@/redux/action/hotelaction";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import BBErrorDialog from "@/app/components/BBErrorDialog";
import Multiselect from "multiselect-react-dropdown";

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
  // const [price, setPrice] = useState("");
  const [country, setCountry] = useState("")
  const [date, setDate] = useState("")

  const [location, setLocation] = useState("");
  // const [room, setRoom] = useState("");

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
      // if (hotelData) {
      //   router.push("/hotels/add-step2")
      // }
    });
  }, []);



  const addHotelDetails = () => {
    let data = {
      hotelname: hotelname,
      ownerName: ownerName,
      contactno: contactno,
      email: email,
      file: file,
      adress: adress,
      street: street,
      city: city,
      pin: pin,
      country: country,
      date: date,
      location: location,
      // room: room,
      dinner: dinner,
      lunch: lunch,
      pool: pool,
      kids: kids,
      wifi: wifi
    };

    let isErrorFound = false;
    let error: any = [];
    if (!hotelname || !hotelname.trim()) {
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

    // if (!room || !room.trim()) {
    //   isErrorFound = true;
    //   error.push("Please enter Address");
    // }
    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    } else {

      dispatch(savePreviousData(data));
      router.push("/hotels/add-step2")
    }

  }

  const food_facilities = [

    { name: 'Pure Veg', id: 1 },
    { name: 'Veg & Non-Veg', id: 2 },
    { name: 'Kids Meals', id: 3 },
    { name: '24-hour Coffe Shop', id: 4 },
    { name: 'Dinning Area', id: 5 },
    { name: 'Bar', id: 6 },
  
]
const select_food_facilities= (selectedList: any, selectedItem: any) => {
  console.log(selectedList)
  console.log(selectedItem)
}
const remove_food_facilities = (selectedList: any, removedItem: any) => {

}

  const Basic_Facilities = [

    { name: '24-hour Room Service', id: 1 },
    { name: 'Free Parking', id: 2 },
    { name: 'Air Conditioning', id: 3 },
    { name: 'Elevator/Lift', id: 4 },
    { name: 'Power Backup', id: 5 },
    { name: 'Laundry Service', id: 6 },
    { name: 'Express check-in/check-out', id: 6 },
    { name: 'Smoking Rooms', id: 7 },
    { name: 'Newspaper', id: 8 },
    { name: 'Free Wi-Fi', id: 9 },
     { name: 'HouseKeeping', id: 10 },
     { name: 'Emergency Exits', id: 10 },
]

  const selectBasic_Facilities = (selectedList: any, selectedItem: any) => {
    console.log(selectedList)
    console.log(selectedItem)
  }
  const removeBasic_Facilities = (selectedList: any, removedItem: any) => {

  }

  const general_services = [

    { name: 'Doctor on Call', id: 1 },
    { name: 'Luggage Storage', id: 2 },
    { name: 'Wheechair Accessible', id: 3 },
    { name: 'Multilingual Staff', id: 4 },
    { name: 'Wake-Up Call', id: 5 },
  ]

  const select_general_services = (selectedList: any, selectedItem: any) => {
    console.log(selectedList)
    console.log(selectedItem)
  }
  const remove_general_services = (selectedList: any, removedItem: any) => {

  }
  const safety = [

    { name: 'CCTV', id: 1 },
    { name: 'Fire Extinguishers', id: 2 },
    { name: 'Security Alarms', id: 3 },
    { name: 'First-aid Services', id: 4 },
  
   
]

  const select_safety = (selectedList: any, selectedItem: any) => {
    console.log(selectedList)
    console.log(selectedItem)
  }
  const remove_safety = (selectedList: any, removedItem: any) => {

  }

  return (
    <>
      <div className="bg-white h-[40%] pb-4 mt-5 m-auto w-[65%] justify-center rounded-lg">
        <div className="flex justify-center h-12 bg-[#1B6CA8] text-white px-5  text-2xl">
          <h1 className="mt-2">Add Hotel</h1>
        </div>
        <div className="flex  flex-row justify-center m-6">
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
            <BBInput
              containerProps={{ className: "" }}
              label="Latitude & Longitude"
              value={location} onChange={(e) => setLocation(location)}
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
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Established Date"
              value={date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />

          </div>

          <div className="flex  flex-col mx-4 w-[300px] ">
            <div className="my-2 w-60">
              <Multiselect
                placeholder="Select Basic Facilities"
                options={Basic_Facilities}
                onSelect={selectBasic_Facilities}
                onRemove={removeBasic_Facilities}
                displayValue="name"
              />
            </div>

            <div className="my-2 w-60">
              <Multiselect
                placeholder="Select FooD & Drinks"
                options={food_facilities}
                onSelect={select_food_facilities}
                onRemove={remove_food_facilities}
                displayValue="name"
              />
            </div>
            <div className="my-2 w-60">
              <Multiselect
                placeholder="Select General Services"
                options={general_services}
                onSelect={select_general_services}
                onRemove={remove_general_services}
                displayValue="name"
              />
            </div>
            <div className="my-2 w-60">
              <Multiselect
                placeholder="Select FooD & Drinks"
                options={food_facilities}
                onSelect={select_food_facilities}
                onRemove={remove_food_facilities}
                displayValue="name"
              />
            </div>
            <div className="my-2 w-60">
              <Multiselect
                placeholder="Select Safety & Security"
                options={safety}
                onSelect={select_safety}
                onRemove={remove_safety}
                displayValue="name"
              />
            </div>
           
            
          </div>
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
            label="NEXT"
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

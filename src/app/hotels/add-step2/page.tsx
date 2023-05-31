"use client";
import BBButton from "@/app/components/BBButton";
import { addHotels } from "@/redux/action/hotelaction";
import { useAppDispatch } from "@/redux/store";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button, Input, Option, Radio, Select } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const previoushotelData: any = useSelector((state: any) => state.hotel.previousHotelData);
  // console.log("hotel data is ..", previoushotelData);
  const router = useRouter();
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (previoushotelData) {
  //     // router.push('/hotels')
  //   }
  // }, [previoushotelData]);

  const [roomDetails, setRoomDetails] = useState([
    { id: 1, no_of_bed: 0, price: "", isAC: false },
  ]);

  const setOptionValue = (index: number, value: number) => {
    let data = [...roomDetails];
    data[index].no_of_bed = value;
    setRoomDetails(data);
  };

  const setPriceValue = (index: number, value: string) => {
    let data = [...roomDetails];
    data[index].price = value;
    setRoomDetails(data);
  };

  const setAcStatus = (index: number, value: boolean) => {
    console.log(value)
    let data = [...roomDetails];
    data[index].isAC = value;
    setRoomDetails(data);
  };

  const addMore = () => {
    let data = [...roomDetails];
    data.push({ id: data.length + 1, no_of_bed: 0, price: "", isAC: false });
    setRoomDetails(data);
    console.log(data);
  };

  const addHotelsDetails = () => {
    let data = { ...previoushotelData }
    data.rooms = roomDetails
    // data["rooms"]=roomDetails
    console.log(data)
    dispatch(addHotels(data));
    router.push("/hotels")
  }

  const deleteRoom =(index:number) =>{
    let data = [ ...roomDetails ]
    data.splice(index,1)
    setRoomDetails(data)

  }



  return (
    <div className="bg-white h-full  mt-5 m-auto w-[40%] justify-center pb-1">
      <div className="flex flex-row h-12  bg-[#4fb291] text-white px-5  text-xl  justify-between">
        <p className="mt-2">Add Hotel Rooms</p>
        <PlusIcon className=" w-6" onClick={addMore} />

      </div>
      <div className="flex flex-col justify-center mt-5 align-middle">

        {roomDetails.map((element: any, index: number) => (
          <div className="m-auto">
            <div className=" flex flex-row  justify-between">
              <p className="font-medium ">  Add Room {element.id} </p>
              <TrashIcon className=" w-5 text-red-500" onClick={() =>deleteRoom(index)}/>
            </div>

            <div className="my-2 w-72">
              <Select label="Select Bed">
                <Option value="1" onClick={() => setOptionValue(index, 1)}>
                  Single Bed
                </Option>
                <Option value="2" onClick={() => setOptionValue(index, 2)}>
                  Double Bed
                </Option>
                <Option value="3" onClick={() => setOptionValue(index, 3)}>
                  Triple Bed
                </Option>
              </Select>
              <div className="my-2 w-72">
                <Input
                  label="Price"
                  value={element.price}
                  onChange={(e) => setPriceValue(index, e.target.value)}
                />
              </div>
              <div className="flex gap-10">
                <Radio
                  checked={element.isAC}
                  name={"air-condition" + element.id}
                  label="AC"
                  onClick={(e) => setAcStatus(index, true)}
                />
                <Radio
                  checked={element.isAC}
                  name={"air-condition" + element.id}
                  label="Non AC"
                  onClick={(e) => setAcStatus(index, false)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <></>
      <BBButton
        color=""
        label="ADD"
        size="lg"
        onClick={addHotelsDetails}
        className="h-12 bg-blackblue w-[300px]  flex justify-center m-auto mb-5"
      />
    </div>
  );
}

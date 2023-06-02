"use client";
import BBButton from "@/app/components/BBButton";
import BBCheckbox from "@/app/components/BBCheckbox";
import { addHotels, getHotelById, updateHotel } from "@/redux/action/hotelaction";
import { useAppDispatch } from "@/redux/store";
import { essential_Kit, options_view, room_amenities } from "@/utils/Data";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button, Input, Option, Radio, Select, Spinner } from "@material-tailwind/react";
import Multiselect from "multiselect-react-dropdown";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function UpdateRoom({params}:any) {

    const { previousHotelData, loading }: any = useSelector((state: any) => state.hotel);
  // console.log("hotel data is ..", previoushotelData);
  const router = useRouter();
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (previoushotelData) {
  //     // router.push('/hotels')
  //   }
  // }, [previoushotelData]);
  const [view, setView] = useState([])
  const [amenities, setAmenities] = useState([])
  const [essentialKit, setEssentialKit] = useState([])

  let data = [
    { lable: 'Single Bed', value: 1 },
    { lable: 'Double Bed', value: 2 },
    { lable: 'Triple Bed', value: 3 },
    { lable: 'King Bed', value: 4 },
    { lable: 'Queen Bed', value: 5 },

  ]

  const [selectOptionview, setselectOptionview] = useState("Select Room View")
  const selectOption_view = (selectedList: any, selectedItem?: any) => {
    setView(selectedList)
    let names = selectedList.map((element: any) => element.name)
    setselectOptionview(names.toString())
  }
  const removeOption_view = (selectedList: any, removedItem: any) => {
    setView(selectedList)
    let names = selectedList.map((element: any) => element.name)
    setselectOptionview(names.toString())
  }


  const [selectRoom_Amenities, setselectRoomAmenities] = useState("Select BedRoom Amenities")
  const selectRoomAmenities = (selectedList: any, selectedItem?: any) => {
    setAmenities(selectedList)
    let names = selectedList.map((element: any) => element.name)
    setselectRoomAmenities(names.toString())
  }
  const removeRoomAmenities = (selectedList: any, removedItem: any) => {
    setAmenities(selectedList)
    let names = selectedList.map((element: any) => element.name)
    setselectRoomAmenities(names.toString())
  }

  const [selectEssentialKit, setselectEssentialKit] = useState("Select Essential Kit")
  const selectEssential_Kit = (selectedList: any, selectedItem?: any) => {
    setEssentialKit(selectedList)
    let names = selectedList.map((element: any) => element.name)
    setselectEssentialKit(names.toString())
  }
  const removeEssential_Kit = (selectedList: any, removedItem: any) => {
    setEssentialKit(selectedList)
    let names = selectedList.map((element: any) => element.name)
    setselectEssentialKit(names.toString())
  }



  const [roomDetails, setRoomDetails] = useState([
    { id: 1, no_of_bed: 0, price: "", isAC: false, no_rooms: "" },
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

  const setRoomsCount = (index: number, value: string) => {
    let data = [...roomDetails];
    data[index].no_rooms = value;
    setRoomDetails(data);
  };


  const addMore = () => {
    let data = [...roomDetails];
    data.push({ id: data.length + 1, no_of_bed: 0, price: "", isAC: false, no_rooms: "" });
    setRoomDetails(data);
    console.log(data);
  };

  const updateHotelsDetails = () => {
    let data = { ...previousHotelData }
    data.rooms= roomDetails
    data.view = view
    data.amenities = amenities
    data.essentialKit = essentialKit
    // data["rooms"]=roomDetails
    console.log(data)
    dispatch(updateHotel(data));
    router.push("/hotels")
  }
console.log(previousHotelData)
  const deleteRoom = (index: number) => {
    let data = [...roomDetails]
    data.splice(index, 1)
    setRoomDetails(data)

  }

  useEffect(() => {
    let hotel_data = previousHotelData
   
    if (hotel_data) {
      const {roomDetails,view,amenities,essentialKit} = hotel_data
      setRoomDetails(roomDetails)
      selectOption_view(view || [])
      selectRoomAmenities(amenities || [])
      selectEssential_Kit(essentialKit || [])

    }
  }, [])
  useEffect(() => {
    dispatch(getHotelById(params.id))
  }, [])
 return (
    loading ? <Spinner /> :
      <div className="bg-white h-full  mt-5 m-auto w-[60%] justify-center pb-1">
        <div className="flex flex-row h-12  bg-[#1B6CA8] text-white px-5  text-xl  justify-between">
          <p className="mt-4">Update Hotel Rooms</p>
          <PlusIcon className=" w-6" onClick={addMore} />

        </div>
        <div className="flex flex-col justify-center mt-5 align-middle">

          {roomDetails&& roomDetails.length>0&&roomDetails.map((element: any, index: number) => (
            <div className="m-auto">

              <div className=" flex flex-row  justify-between">
                <p className="font-medium ">  Add Room {element.id} </p>
                <TrashIcon className=" w-5 text-red-500" onClick={() => deleteRoom(index)} />
              </div>
              <div className=" flex flex-row  justify-center">

                <div className="flex  flex-col mx-4 w-[300px]">
                  <div className="my-2 w-72">
                    <Select label="Select Bed">
                      {data.map((item: any) => (
                        <Option value={item.value} onClick={() => setOptionValue(index, item.value)}>
                          {item.lable}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div className="my-2 w-72">
                    <Input
                      label="Price"
                      value={element.price}
                      onChange={(e) => setPriceValue(index, e.target.value)}
                    />
                  </div>

                  <div className="my-2 w-72">
                    <Input
                      label="No of Rooms Available"
                      value={element.no_rooms}
                      onChange={(e) => setRoomsCount(index, e.target.value)}
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

                <div className="flex  flex-col mx-4 w-[300px]">
                  <div className="my-2 w-72">
                    <Multiselect
                      placeholder={selectOptionview ||"Select Room View"}
                      options={options_view}
                      onSelect={selectOption_view}
                      onRemove={removeOption_view}
                      displayValue="name"
                      avoidHighlightFirstOption={true}
                      showCheckbox={true}
                      hideSelectedList={true}
                    />
                  </div>
                  <div className="my-2 w-72">
                    <Multiselect
                      placeholder={selectRoom_Amenities || "Select BedRoom Amenities"}
                      options={room_amenities}
                      onSelect={selectRoomAmenities}
                      onRemove={removeRoomAmenities}
                      displayValue="name"
                      avoidHighlightFirstOption={true}
                      showCheckbox={true}
                      hideSelectedList={true}
                    />
                  </div>
                  <div className="my-2 w-72">
                    <Multiselect
                      placeholder={selectEssentialKit ||"Select Essential Kit"}
                      options={essential_Kit}
                      onSelect={selectEssential_Kit}
                      onRemove={removeEssential_Kit}
                      displayValue="name"
                      avoidHighlightFirstOption={true}
                      showCheckbox={true}
                      hideSelectedList={true}
                    />
                  </div>
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
          onClick={updateHotelsDetails}
          className="h-12 bg-blackblue w-[300px]  flex justify-center m-auto mb-5"
        />
      </div>
  );
}

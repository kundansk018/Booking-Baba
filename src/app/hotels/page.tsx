"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Tabs,
  TabsHeader,
  Tab,
  Tooltip,
  IconButton,
  Avatar,
} from "@material-tailwind/react";

import { useAppDispatch } from "@/redux/store";
import { ADD_HOTELS_DATA } from "@/redux/constant";
import { useSelector } from "react-redux";
import { getHotelById } from "@/redux/action/hotelaction";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

export default function Hotels() {
  const hotelData: any = useSelector((state: any) => state.hotel.hotelDetails);
  console.log("hotel data is ..==>>>>", hotelData?.data);
  const dispatch = useAppDispatch();

  const [hotel, setHotel] = useState<any>("");
  console.log(" using usestate hotel data is ..", hotelData);

  useEffect(() => {
    const getHotel = async () => {
      const response: any = await fetch(
        `http://localhost:3000/api/hotelsapi/hotelsapi?action=getHotels`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const hotelData = await response.json();

      dispatch({ type: ADD_HOTELS_DATA, payload: hotelData });

      console.log("get hotels api.. ", hotelData);
      setHotel(hotelData);
    };

    getHotel();
  }, []);

  const router = useRouter();
  return (
    <div className="tracking-wide">
      <Card className="w-full">
        <div className="flex p-1 px-2 items-center justify-between rounded-none">
          <div className="flex items-center justify-center">
            <Typography
              className="px-4 font-castoro"
              variant="h3"
              color="black"
            >
              Hotels List
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* <Tabs
            value="all"
            className="w-full sm:w-max text-black   font-castoro"
          >
            <TabsHeader
              className=" z-0"
              indicatorProps={{
                className: "bg-[#4fb291] shadow-none ",
              }}
            >
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs> */}
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button
              className="flex items-center gap-3 bg-blackblue"
              size="md"
              onClick={() => router.push("/hotels/add-step1")}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New
              Hotels
            </Button>
          </div>
        </div>
      </Card>

      {/* <Card className="mx-3 h-[500px] w-[98%] mt-[2%]"> */}
      {/* <CardBody className="relative overflow-scroll px-1 mt-0"> */}
      <div className="mx-3 h-[500px] w-[98%] mt-[1%] bg-white relative overflow-scroll px-1 mt-0">
        <table className="relative font-roboto w-full min-w-max table-auto text-left text-sm text-black">
          <thead className="z-10 bg-blue-gray-100 font-bold flex-col">
            <tr className="z-10 sticky top-0 bg-GreenBlue text-white w-full ">
              <th className="w-[5px] p-2">Hotel Photos</th>
              <th className="w-[5px] p-2">Hotel Name /Email</th>
              <th className="w-[5px] p-2">Hotel Owner</th>
              <th className="w-[5px] p-2">Contact No</th>
              <th className="w-[5px] p-2">Address/Street</th>
              <th className="w-[5px] p-2">City </th>
              <th className="w-[5px] p-2">Country</th>
              <th className="w-[5px] p-2">PinCode</th>
              <th className="w-[5px] p-2">Admin Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotel
              ? hotel.data.map((element: any) => (
          <tbody className="-z-50">
            {hotel
              ? hotel.data.map((element: any) => (
                  <>
                    <tr className="border-b">
                      <td className="w-[5px] p-2">
                        <Avatar
                          src="data:image/jpeg;base64,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"
                          alt="imagee"
                          size="md"
                        />
                      </td>

                      <td className="w-[5px] p-2">
                        <tr className="font-semibold">{element.hotelname}</tr>
                        {element.email}
                      </td>
                      <td className="w-[5px] p-2">{element.ownerName}</td>
                      <td className="w-[5px] p-2">{element.contactno}</td>
                      <td className="w-[5px] p-2">
                        <tr>{element.adress}</tr>
                        {element.street}
                      </td>
                      <td className="w-[5px] p-2">{element.city}</td>
                      <td className="w-[5px] p-2">{element.country}</td>
                      <td className="w-[5px] p-2">{element.pin}</td>
                      <td className="w-[5px] p-2">{"contries"}</td>
                      <td className="w-[5px] p-2">
                        <Tooltip content="Update Hotel Details" >
                          <IconButton onClick={()=>router.push('/hotels/update/'+element._id)} variant="text" color="blue-gray">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete Hotels">
                          <IconButton variant="text" color="blue-gray">
                            <TrashIcon
                              className=" w-4 text-red-500"
                              onClick={() => alert("Hotel Deleted")}
                            />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  </>
                ))
              : "Data Not Found.."}
          </tbody>
        </table>
      </div>
      {/* </CardBody> */}
      {/* </Card> */}
    </div>
  );
}

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
} from "@material-tailwind/react";

import { useAppDispatch } from "@/redux/store";
import { ADD_HOTELS_DATA } from "@/redux/constant";
import { useSelector } from "react-redux";

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
    <div>
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
          <thead className="z-1 bg-blue-gray-100 font-bold flex-col">
            <tr className="z-1 sticky top-0 bg-blue-gray-100 w-full">
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
            {hotelData
              ? hotelData.data.map((element: any) => (
                  <>
                    <tr className="border-b">
                      <td className="w-[5px] p-2">{"Photo"}</td>
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
                      <td className="w-[5px] p-2 z-0">
                        <Tooltip content="Edit Hotel">
                          <IconButton variant="text" color="blue-gray">
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

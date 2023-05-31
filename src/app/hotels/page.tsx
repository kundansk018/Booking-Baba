"use client";
import React, { useEffect, useState } from "react";
// import { Button, Card, IconButton, Typography } from "@material-tailwind/react";

import { useRouter } from "next/navigation";

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  PencilIcon,
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
  IconButton,
  Tooltip,
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
    <Card className="mx-3 h-[500px] w-[98%] mt-[2%]">
      <CardHeader
        floated={false}
        shadow={false}
        className=" rounded-none"
        // h-[370px]
      >
        <div className="flex items-center justify-center">
          <Typography variant="h4" color="blue-gray">
            Hotels list
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          <Button
            className="flex items-center gap-3"
            color="blue"
            size="md"
            onClick={() => router.push("/hotels/add")}
          >
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Hotels
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-1 mt-0">
        <table className="mt-1 w-full min-w-max table-auto text-left">
          <thead className="bg-blue-gray-100 py-2 font-bold text-black flex-col">
            <tr>
              <th className="w-[5px]">Hotel Photos</th>
              <th className="w-[5px]">Hotel Name/Owner</th>
              {/* <th className="w-[5px]">Hotel Owner</th> */}
              <th className="w-[5px]">Contact No</th>
              <th className="w-[5px]">Email</th>
              <th className="w-[5px]">Adress Line1</th>
              <th className="w-[5px]">Adress Line2 & Street</th>
              <th className="w-[5px]">City </th>
              <th className="w-[5px]">PinCode</th>
              <th className="w-[5px]">Country</th>
              <th className="w-[5px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotelData
              ? hotelData.data.map((element: any) => (
                  <tr>
                    <td className="w-[5px]">{"Photo"}</td>
                    <td className="w-[5px] grid-cols">
                      <p className="font-bold">{element.hotelname}</p>
                      <p>{element.ownerName}</p>
                    </td>
                    {/* <td className="w-[5px]">{element.ownerName}</td> */}
                    <td className="w-[5px]">{element.contactno}</td>
                    <td className="w-[5px]">{element.email}</td>
                    <td className="w-[5px]">{element.adress}</td>
                    <td className="w-[5px]">{element.street}</td>
                    <td className="w-[5px]">{element.city}</td>
                    <td className="w-[5px]">{element.pin}</td>
                    <td className="w-[5px]">{"contries"}</td>
                    <td className="">
                      <Tooltip content="Edit User">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                    
                  </tr>
                ))
              : "Data Not Found.."}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

{
  /* <td className="">
  <Tooltip content="Edit User">
    <IconButton variant="text" color="blue-gray">
      <PencilIcon className="h-4 w-4" />
    </IconButton>
  </Tooltip>
</td>; */
}

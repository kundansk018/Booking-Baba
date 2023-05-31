"use client";
import React, { useEffect, useState } from "react";

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
    <Card className="mx-3 h-[500px] w-[98%] mt-[2%]">
      <CardHeader
        floated={false}
        shadow={false}
        className=" rounded-none"
      >
        <div className="flex items-center justify-center">
          <Typography className="font-castoro" variant="h5" color="black">
            Hotels List
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs
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
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          <Button
            className="flex items-center gap-3 bg-[#4fb291]"
            size="md"
            onClick={() => router.push("/hotels/add-step1")}
          >
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Hotels
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-1 mt-0">
        <table className="mt-1 w-full min-w-max table-auto text-left text-sm text-black   font-signika">
          <thead className="bg-blue-gray-100 py-2 font-bold flex-col">
            <tr>
              <th className="w-[5px] p-2">Hotel Photos</th>
              <th className="w-[5px] p-2">Hotel Name</th>
              <th className="w-[5px] p-2">Hotel Owner</th>
              <th className="w-[5px] p-2">Contact No</th>
              <th className="w-[5px] p-2">Email</th>
              <th className="w-[5px] p-2">Address </th>
              <th className="w-[5px] p-2">Address Street</th>
              <th className="w-[5px] p-2">City </th>
              <th className="w-[5px] p-2">PinCode</th>
              <th className="w-[5px] p-2">Country</th>
              <th className="w-[5px] p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotelData
              ? hotelData.data.map((element: any) => (
                  <>
                    <tr className="border-b">
                      <td className="w-[5px] p-2">{"Photo"}</td>
                      <td className="w-[5px] p-2">{element.hotelname}</td>
                      <td className="w-[5px] p-2">{element.ownerName}</td>
                      <td className="w-[5px] p-2">{element.contactno}</td>
                      <td className="w-[5px] p-2">{element.email}</td>
                      <td className="w-[5px] p-2">{element.adress}</td>
                      <td className="w-[5px] p-2">{element.street}</td>
                      <td className="w-[5px] p-2">{element.city}</td>
                      <td className="w-[5px] p-2">{element.pin}</td>
                      <td className="w-[5px] p-2">{"contries"}</td>
                      <td className="w-[5px] p-2">
                        <Tooltip content="Edit User">
                          <IconButton variant="text" color="blue-gray">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  </>
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

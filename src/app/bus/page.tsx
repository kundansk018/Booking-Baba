"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

//import axios from "axios";

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
import { useSelector } from "react-redux";
import { ADD_BUS_REQUEST_SUCCESS } from "@/redux/constant";
import { deleteBusAction, updateBusAction } from "@/redux/action/busaction";

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

export default function Bus() {
  const busData: any = useSelector((state: any) => state.bus.busDetails);
  console.log("bus data is ..==>>>>", busData?.data);
  const dispatch = useAppDispatch();
  const [bus, setBus] = useState<any>("");
  console.log(" using usestate bus data is ..", busData);

  useEffect(() => {
    const getBus = async () => {
      const response: any = await fetch(
        `http://localhost:3000/api/busapi/busapi?action=GET_ALL_BUSES`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const busData = await response.json();

      dispatch({ type: ADD_BUS_REQUEST_SUCCESS, payload: busData });

      console.log("get bus api.. ", busData);
      setBus(busData);
    };

    getBus();
  }, []);

  const deleteBus = (id: string) => {
    dispatch(deleteBusAction(id))
  }

  const updateBus = (id: string) => {
    router.push("/bus/updatebus/" + id)

  }


  const router = useRouter();
  return (
    <div className="tracking-wide	">
      <Card className="w-full">
        <div className="flex p-1 px-2 items-center justify-between rounded-none">
          <div className="flex items-center justify-center">
            <Typography
              className="px-4 font-castoro"
              variant="h3"
              color="black"
            >
              Bus List
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
              onClick={() => router.push("/bus/add")}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Bus
            </Button>
          </div>
        </div>
      </Card>

      {/* <Card className="mx-3 h-[500px] w-[98%] mt-[2%]"> */}
      {/* <CardBody className="relative overflow-scroll px-1 mt-0"> */}
      <div className="mx-3 h-[500px] w-[98%] mt-[1%]  bg-white relative overflow-scroll px-1 mt-0">
        <table className="relative font-roboto w-full min-w-max table-auto text-left text-sm text-black">
          <thead className="z-10 font-semibold flex-col">
            <tr className="z-10 bg-GreenBlue text-white sticky top-0  w-full">
              <th className="w-[5px] p-2">Bus Photos</th>
              {/* <th className="w-[5px]">file</th> */}
              <th className="w-[5px] p-2">Bus Number</th>
              <th className="w-[5px] p-2">Bus Name</th>
              <th className="w-[5px] p-2">From</th>
              <th className="w-[5px] p-2">To</th>
              <th className="w-[5px] p-2 ">Available Date</th>
              <th className="w-[5px] p-2">Arrival Time</th>
              <th className="w-[5px] p-2">Rest Point</th>
              <th className="w-[5px] p-2">Seats</th>
              <th className="w-[5px] p-2">Ticket Price</th>
              <th className="w-[5px] p-2">Operator</th>
              <th className="w-[5px] p-2">Current Status</th>
              <td className="w-[5px] p-2">Bus Type</td>
              <th className="w-[5px] p-2">Bus Stops</th>
              <td className="w-[5px] p-2">No. of Stops</td>
              <td className="w-[5px] p-2">Booking Seats</td>
              <td className="w-[5px] p-2">Travel Agency</td>
              <th className="w-[5px] p-2">Admin Action</th>
            </tr>
          </thead>
          <tbody>
            {bus
              ? bus.data.map((element: any) => (
                <>
                  <tr className="border-b">
                    <td className="w-[5px] p-2">
                      <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5KPcBp9vKBWRnMlYxr8AXUbQO6GiHvrBQZ5FJiVx6w9kmarHbNLCGzgnMqHkrjl7-zE&usqp=CAU"
                        alt="imagee"
                        size="md"
                      />
                    </td>
                    <td className="w-[5px] p-2">{element.busnumber}</td>
                    <td className="w-[5px] p-2 font-semibold">
                      {element.busname}
                    </td>
                    <td className="w-[5px] p-2">{element.from}</td>
                    <td className="w-[5px] p-2">{element.to}</td>
                    <td className="w-[5px] p-2">{element.arrivalDate}</td>
                    <td className="w-[5px] p-2">{element.arrivalTime}</td>
                    <td className="w-[5px] p-2">{element.pickUpPoint}</td>
                    <td className="w-[5px] p-2">{element.seats}</td>
                    <td className="w-[5px] p-2">{element.ticketprice}</td>
                    <td className="w-[5px] p-2">{element.operator}</td>
                    <td className="w-[5px] p-2">{element.currentStatus}</td>
                    <td className="w-[5px] p-2">{element.busType}</td>
                    <td className="w-[5px] p-2">{element.busstops}</td>
                    <td className="w-[5px] p-2">{element.noofstop}</td>
                    <td className="w-[5px] p-2">{element.bookingseats}</td>
                    <td className="w-[5px] p-2">
                      {element.travelagencyname}
                    </td>
                    <td className="w-[5px] p-2 ">
                      <Tooltip content="Update Bus">
                        <IconButton onClick={() => updateBus(element._id)} variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete Bus">
                        <IconButton onClick={() => deleteBus(element._id)} variant="text" color="blue-gray">
                          <TrashIcon
                            className=" w-4 text-red-500"
                            onClick={() => alert("Bus Deleted")}
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

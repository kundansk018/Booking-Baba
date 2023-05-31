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
import { ADD_BUS_DATA } from "@/redux/constant";
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

            dispatch({ type: ADD_BUS_DATA, payload: busData });

            console.log("get bus api.. ", busData);
            setBus(busData);
        };

        getBus();
    }, []);

    const router = useRouter();
    return (
      <Card className="mx-3 h-[500px] w-[98%] mt-[2%]">
        <CardHeader floated={false} shadow={false} className=" rounded-none">
          <div className="flex items-center justify-center">
            <Typography className="font-castoro" variant="h5" color="black">
              Bus list
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
              onClick={() => router.push("/bus/add")}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Buses
            </Button>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-1 mt-0">
          <table className="mt-1 w-full min-w-max table-auto text-left text-sm text-black   font-signika">
            <thead className="bg-blue-gray-100 py-2 font-bold flex-col">
              <tr>
                {/* <th className="w-[5px]">Bus Photos</th> */}
                {/* <th className="w-[5px]">file</th> */}
                <th className="w-[5px] p-2">Bus Name</th>
                <th className="w-[5px] p-2">Bus Number</th>
                <th className="w-[5px] p-2">From</th>
                <th className="w-[5px] p-2">To</th>
                <th className="w-[5px] p-2">Arrival Time</th>
                <th className="w-[5px] p-2">Available Date</th>
                <th className="w-[5px] p-2">PickUpPoint</th>
                <th className="w-[5px] p-2">Seats</th>
                <th className="w-[5px] p-2">Ticket Price</th>
                <th className="w-[5px] p-2">Operator</th>
                <th className="w-[5px] p-2">Bus Type</th>
              </tr>
            </thead>
            <tbody>
              {bus
                ? bus.data.map((element: any) => (
                    <tr className="border-b">
                      {/* <td className="w-[5px]">{element.file}</td> */}
                      <td className="w-[5px] p-2">{element.busname}</td>
                      <td className="w-[5px] p-2">{element.busnumber}</td>
                      <td className="w-[5px] p-2">{element.from}</td>
                      <td className="w-[5px] p-2">{element.to}</td>
                      <td className="w-[5px] p-2">{element.arrivalTime}</td>
                      <td className="w-[5px] p-2">{element.arrivalDate}</td>
                      <td className="w-[5px] p-2">{element.pickUpPoint}</td>
                      <td className="w-[5px] p-2">{element.seats}</td>
                      <td className="w-[5px] p-2">{element.ticketprice}</td>
                      <td className="w-[5px] p-2">{element.operator}</td>
                      <td className="w-[5px] p-2">{element.busType}</td>
                      <td className="w-[5px] p-2">
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

"use client";
import React from "react";

import { useRouter } from "next/navigation";


import {
    Card,
    Typography,
    Avatar,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";

import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { PencilIcon } from "@heroicons/react/24/outline";
import BBButton from "@/app/components/BBButton";



export default function Bus() {
    const busData: any = useSelector((state: any) => state.bus.userBusDetails);
    console.log("bus data is ..==>>>>", busData);
    const router = useRouter();

    return (
        <div className="tracking-wide	">

            <Card className="w-full mt-[0.5%]">
                <div className="flex p-1 px-2 items-center justify-between rounded-none">
                    <div className="flex items-center justify-center">
                        <Typography
                            className="px-4 font-castoro"
                            variant="h3"
                            color="black"  >
                            Bus List
                        </Typography>
                    </div>
                </div>
            </Card>
            <div className="mx-3 h-[500px] w-[98%] mt-[1%]  bg-white relative overflow-scroll px-1 mt-0">
                <table className="relative font-roboto w-full min-w-max table-auto text-left text-sm text-black">
                    <thead className="z-10 font-semibold flex-col">
                        <tr className="z-10 bg-GreenBlue text-white sticky top-0  w-full">
                            <th className="w-[5px] p-2">Bus Photos</th>
                            <th className="w-[5px] p-2">Bus Number</th>
                            <th className="w-[5px] p-2">Bus Name</th>
                            <th className="w-[5px] p-2">From</th>
                            <th className="w-[5px] p-2">To</th>
                            <th className="w-[5px] p-2 ">Available Date</th>
                            <th className="w-[5px] p-2">Arrival Time</th>
                            <th className="w-[5px] p-2">Rest Point</th>
                            <th className="w-[5px] p-2">Seats</th>
                            <th className="w-[5px] p-2">Ticket Price</th>
                            <th className="w-[5px] p-2">Current Status</th>
                            <td className="w-[5px] p-2">Bus Type</td>
                            <th className="w-[5px] p-2">Bus Stops</th>
                            <td className="w-[5px] p-2">No. of Stops</td>
                            <td className="w-[5px] p-2">Booking Seats</td>
                            {/* <td className="w-[5px] p-2">Travel Agency</td> */}
                            <th className="w-[5px] p-2"> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {busData
                            ? busData?.data?.map((element: any) => (
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
                                        <td className="w-[5px] p-2 font-semibold"> {element.busname}</td>
                                        <td className="w-[5px] p-2">{element.from}</td>
                                        <td className="w-[5px] p-2">{element.to}</td>
                                        <td className="w-[5px] p-2">{element.arrivalDate}</td>
                                        <td className="w-[5px] p-2">{element.arrivalTime}</td>
                                        <td className="w-[5px] p-2">{element.pickUpPoint}</td>
                                        <td className="w-[5px] p-2">{element.seats}</td>
                                        <td className="w-[5px] p-2">{element.ticketprice}</td>
                                        <td className="w-[5px] p-2">{element.currentStatus}</td>
                                        <td className="w-[5px] p-2">{element.busType}</td>
                                        <td className="w-[5px] p-2">{element.busstops}</td>
                                        <td className="w-[5px] p-2">{element.noofstop}</td>
                                        <td className="w-[5px] p-2">{element.bookingseats}</td>
                                        {/* <td className="w-[5px] p-2"> {element.travelagencyname}</td> */}
                                        <td className="w-[5px]  p-2">
                                            <BBButton
                                                label="Book Ticket"
                                                onClick={() => router.push("/user/bus/ticket")}
                                                size="sm"
                                                className=""
                                                color=""

                                            />
                                        </td>

                                    </tr>
                                </>
                            ))

                            : "Data not found"}
                    </tbody>
                </table>
            </div>


        </div>
    );
}

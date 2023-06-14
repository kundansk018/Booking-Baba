"use client";
import updateTrain from "@/app/train/update/[id]/page";
import {
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";

import React from "react";
import { Pagination, Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import { deleteTrain } from "../../../../../pages/api/trainApi/trainApi";
import BBButton from "@/app/components/BBButton";
import { useRouter } from "next/navigation";

export default function page() {
  const trainData: any = useSelector(
    (state: any) => state.train.userTrainDetails
  );
  console.log("Train data is in update page ..", trainData);
  const router = useRouter();

  return (
    <div className="tracking-wide	">
      <Card className="w-full mt-[0.5%]">
        <div className="flex items-center justify-center">
          <Typography className="px-4 font-castoro" variant="h3" color="black">
            Available Trains
          </Typography>
        </div>
      </Card>

      <div className="mx-3 h-[500px] w-[98%] mt-[0.5%] bg-white relative overflow-scroll px-1">
        <table className="relative font-roboto w-full min-w-max table-auto text-left text-sm text-black">
          <thead className="z-10 bg- font-bold flex-col">
            <tr className="z-10 sticky top-0 bg-GreenBlue text-white w-full">
              <th className="w-[5px] p-2">Train photo</th>
              <th className="w-[5px] p-2">Train Number</th>
              <th className="w-[5px] p-2">Train Name</th>
              <th className="w-[5px] p-2">From Station</th>
              <th className="w-[5px] p-2">To Station</th>
              <th className="w-[5px] p-2">Arrival Time</th>
              <th className="w-[5px] p-2">Departure Time</th>
              <th className="w-[5px] p-2">Fare </th>
              <th className="w-[5px] p-2">Seats</th>
              <th className="w-[5px] p-2">Coach</th>
              <th className="w-[5px] p-2">Availalbility</th>
              <th className="w-[5px] p-2">Action</th>
            </tr>
          </thead>
          <tbody className="-z-10">
            {trainData
              ? trainData?.data?.map((element: any) => (
                  <tr key={element._id}>
                    <td className="w-[5px] p-2">
                      <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Rb78i6mV3XF1VxsVX_f6FvUggBNCIw4-xw&usqp=CAU"
                        alt="imagee"
                        size="md"
                      />
                    </td>
                    <td className="w-[5px]  p-2">{element.trainNo}</td>
                    <td className="w-[5px]  p-2">{element.trainName}</td>
                    <td className="w-[5px]  p-2">{element.from_Stn}</td>
                    <td className="w-[5px]  p-2">{element.to_Stn}</td>
                    <td className="w-[5px]  p-2">{element.arrivalTime}</td>
                    <td className="w-[5px]  p-2">{element.depTime}</td>
                    <td className="w-[5px]  p-2">{element.fare}</td>
                    <td className="w-[5px]  p-2">{element.seats}</td>
                    <td className="w-[5px]  p-2">{element.coach}</td>
                    <td className="w-[5px]  p-2">{element.operationDays}</td>

                    <td className="w-[5px]  p-2">
                      <BBButton
                        label="Book Ticket"
                        onClick={() => router.push("/user/train/ticket")}
                        size="sm"
                        className=""
                        color=""
                      />
                    </td>
                  </tr>
                ))
              : "Data Not Found.."}
          </tbody>
        </table>
      </div>
    </div>
  );
}

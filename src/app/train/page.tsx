"use client";
import React, { useEffect, useState } from "react";
// import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import BBButton from "../components/BBButton";
import { useRouter } from "next/navigation";

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  Tabs,
  TabsHeader,
  Tab,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { TRAIN_REQUEST_SUCCESS } from "@/redux/constant";
import { useAppDispatch } from "@/redux/store";

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

export default function Train() {
  const trainData: any = useSelector((state: any) => state.train.trainDetails);
  console.log("Train data is ..", trainData);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [train, setTrain] = useState<any>("");

  useEffect(() => {
    const getHotel = async () => {
      const response: any = await fetch(
        `http://localhost:3000/api/trainApi/trainApi?action=GET_TRAINS`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const trainData = await response.json();

      dispatch({ type: TRAIN_REQUEST_SUCCESS, payload: trainData });

      console.log("get trains api.. ", trainData);
      setTrain(trainData);
    };

    getHotel();
  }, []);

  console.log("Train data is dhdrt..", train);

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
              Train List
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
              onClick={() => router.push("/train/add")}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Train
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
              <th className="w-[5px] p-2">Train Number</th>
              <th className="w-[5px] p-2">Train Name</th>
              <th className="w-[5px] p-2">From Station</th>
              <th className="w-[5px] p-2">To Station</th>
              <th className="w-[5px] p-2">Fare </th>
              <th className="w-[5px] p-2">Seats</th>
              <th className="w-[5px] p-2">Coach</th>
              <th className="w-[5px] p-2">Admin Action</th>
            </tr>
          </thead>
          <tbody>
            {train
              ? train.data.map((element: any) => (
                  <>
                    <tr className="border-b">
                      <td className="w-[5px] p-2">{element.trainNo}</td>
                      <td className="w-[5px] p-2 font-semibold">
                        {element.trainname}
                      </td>
                      <td className="w-[5px] p-2">{element.from_Stn}</td>
                      <td className="w-[5px] p-2">{element.to_Stn}</td>
                      <td className="w-[5px] p-2">{element.fare}</td>
                      <td className="w-[5px] p-2">{element.seats}</td>
                      <td className="w-[5px] p-2">{element.coach}</td>
                      <td className="w-[5px] p-2 z-0">
                        <Tooltip content="Edit Train">
                          <IconButton variant="text" color="blue-gray">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete Train">
                          <IconButton variant="text" color="blue-gray">
                            <TrashIcon
                              className=" w-4 text-red-500"
                              onClick={() => alert("Train Deleted")}
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
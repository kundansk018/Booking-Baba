"use client";
import React, { useEffect, useState } from "react";
// import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import BBButton from "../components/BBButton";
import { useRouter } from "next/navigation";

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
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
  Avatar,
  IconButton,
  Tooltip,
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
    <Card className="mx-3 h-[500px] w-[98%] mt-[2%]">
      <CardHeader floated={false} shadow={false} className=" rounded-none">
        <div className="flex items-center justify-center">
          <Typography className="font-castoro" variant="h5" color="black">
            Trains list
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
            onClick={() => router.push("/train/add")}
          >
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Trains
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-1 mt-0">
        <table className="mt-1 w-full min-w-max table-auto text-left text-sm text-black   font-signika">
          <thead className="bg-blue-gray-100 py-2 font-bold flex-col">
            <tr>
              <th>Train Number</th>
              <th>Train Name</th>
              <th>From Station</th>
              <th>To Station</th>
              <th>Fare </th>
              <th>Seats</th>
              <th>Coach</th>
            </tr>
          </thead>
          <tbody>
            {train
              ? train.data.map((element: any) => (
                  <tr>
                    <td className="w-[5px]">{element.trainNo}</td>
                    <td className="w-[5px]">{element.trainname}</td>
                    <td className="w-[5px]">{element.from_Stn}</td>
                    <td className="w-[5px]">{element.to_Stn}</td>
                    <td className="w-[5px]">{element.fare}</td>
                    <td className="w-[5px]">{element.seats}</td>
                    <td className="w-[5px]">{element.coach}</td>
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

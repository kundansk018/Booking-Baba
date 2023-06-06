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
  Avatar,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { TRAIN_REQUEST_SUCCESS } from "@/redux/constant";
import { useAppDispatch } from "@/redux/store";
import { deleteTrainAction } from "@/redux/action/trainAction";

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
  const [counter, setCounter] = useState<any>(0);

  const [train, setTrain] = useState<any>("");

  useEffect(() => {
    getHotel();
  }, [counter]);

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

  const addTrain = () => {
    router.push("/train/add");
    getHotel();
    setCounter(counter + 1);
  };

  const deleteTrain = (id: any) => {
    dispatch(deleteTrainAction(id));
    getHotel();
    setCounter(counter + 1);
  };

  const updateTrain = (id: any) => {
    console.log("id:::::::::)", id);
    router.push("/train/update/" + id);
    getHotel();
    setCounter(counter + 1);
  };

  console.log("Train data is dhdrt..", train);

  return (
    <div className="tracking-wide	">
      <Card className="w-full mt-[0.5%]">
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
              onClick={() => addTrain()}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Train
            </Button>
          </div>
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
              <th className="w-[5px] p-2">Fare </th>
              <th className="w-[5px] p-2">Seats</th>
              <th className="w-[5px] p-2">Coach</th>
              <th className="w-[5px] p-2">Admin Action</th>
            </tr>
          </thead>
          <tbody className="-z-10">
            {train
              ? train.data.map((element: any) => (
                  <tr key={element._id}>
                    <td className="w-[5px] p-2">
                      <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Rb78i6mV3XF1VxsVX_f6FvUggBNCIw4-xw&usqp=CAU"
                        alt="imagee"
                        size="md"
                      />
                    </td>
                    <td className="w-[5px]">{element.trainNo}</td>
                    <td className="w-[5px]">{element.trainName}</td>
                    <td className="w-[5px]">{element.from_Stn}</td>
                    <td className="w-[5px]">{element.to_Stn}</td>
                    <td className="w-[5px]">{element.fare}</td>
                    <td className="w-[5px]">{element.seats}</td>
                    <td className="w-[5px]">{element.coach}</td>
                    <td className="w-[5px]">
                      <Tooltip content="Edit Train Details">
                        <IconButton
                          onClick={() => updateTrain(element._id)}
                          variant="text"
                          color="blue-gray"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete">
                        <IconButton
                          onClick={() => deleteTrain(element._id)}
                          variant="text"
                          color="blue-gray"
                        >
                          <TrashIcon className=" w-5 text-red-500" />{" "}
                        </IconButton>
                      </Tooltip>
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

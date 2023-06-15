"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Pagination } from "react-bootstrap";

import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Input,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";
import { deleteTrainAction, getTrains } from "@/redux/action/trainAction";

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
  console.log("trainData", trainData);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState<any>(1);
  const [train, setTrain] = useState([]);

  const [page, setPage] = useState<any>(1);
  const [totalItems, setTotalItems] = useState<any>();
  const [items, setItems] = useState<any>([]);
  const [totalPages, setTotalPages] = useState<any>();

  useEffect(() => {
    getAllTrains();
  }, [counter, page]);

  useEffect(() => {
    if (trainData) {
      const { page, totalItems, totalPages, items } = trainData;
      setPage(page);
      setTotalItems(totalItems);
      setTotalPages(totalPages);
      setItems(items);
    }
  }, []);
  console.log("totalPages => ", totalPages);

  const getAllTrains = () => {
    dispatch(getTrains(page));
  };

  const handlePageChange = (newPage: any) => {
    setPage(newPage);
  };

  const addTrain = () => {
    router.push("/train/add");
    setCounter(counter + 1);
    getAllTrains();
  };

  const deleteTrain = (id: any) => {
    dispatch(deleteTrainAction(id));
    getAllTrains();
    setCounter(counter + 1);
  };

  const updateTrain = (id: any) => {
    console.log("id:::::::::)", id);
    router.push("/train/update/" + id);
    getAllTrains();
    setCounter(counter + 1);
  };

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

      <div className="mx-3 h-[450px] w-[98%] mt-[0.5%] bg-white relative overflow-scroll px-1">
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
            {trainData
              ? trainData?.items?.map((element: any) => (
                  <tr key={element._id}>
                    <td className="w-[5px] p-2">
                      {/* <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Rb78i6mV3XF1VxsVX_f6FvUggBNCIw4-xw&usqp=CAU"
                        alt="imagee"
                        size="md"
                      /> */}
                      {element.imageUrl}
                    </td>
                    <td className="w-[5px]  p-2">{element.trainNo}</td>
                    <td className="w-[5px]  p-2">{element.trainName}</td>
                    <td className="w-[5px]  p-2">{element.from_Stn}</td>
                    <td className="w-[5px]  p-2">{element.to_Stn}</td>
                    <td className="w-[5px]  p-2">{element.fare}</td>
                    <td className="w-[5px]  p-2">{element.seats}</td>
                    <td className="w-[5px]  p-2">{element.coach}</td>
                    <td className="w-[5px]  p-2">
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
      <div className="bg-white ">
        <Pagination className="flex justify-center gap-5 p-3 text-gray-700">
          <div className="hover:text-black">
            <Pagination.First
              onClick={() => handlePageChange(1)}
              disabled={page === 1}
            />
          </div>
          <div className="hover:text-black">
            <Pagination.Prev
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            />
          </div>
          <div className="flex hover:text-black">
            {Array.from(Array(totalPages).keys()).map((pageIndex, index) => (
              <Pagination.Item
                key={index}
                active={pageIndex === page}
                onClick={() => handlePageChange(pageIndex)}
                disabled={page === 1}
              >
                {pageIndex}
              </Pagination.Item>
            ))}
          </div>

          <div className="hover:text-black">
            <Pagination.Next
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages - 1}
            />
          </div>
          <div className="hover:text-black">
            <Pagination.Last
              onClick={() => handlePageChange(totalPages)}
              disabled={page === totalPages}
            />
          </div>
        </Pagination>
      </div>
    </div>
  );
}

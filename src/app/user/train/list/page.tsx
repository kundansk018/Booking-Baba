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

export default function page() {
  const trainData: any = useSelector(
    (state: any) => state.train.userTrainDetails
  );
  console.log("Train data is in update page ..", trainData);

  return (
    <div className="tracking-wide	">
      <Card className="w-full mt-[0.5%]">
        <div className="flex items-center justify-center">
          <Typography className="px-4 font-castoro" variant="h3" color="black">
            Available Trains
          </Typography>
        </div>
        {/* <div className=" table table-hover " style={{ margin: "1%" }}>
            <Pagination className="flex gap-5">
              <Pagination.First
                onClick={() => handlePageChange(1)}
                disabled={page === 1}
              />
              <Pagination.Prev
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              />
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
              <Pagination.Next
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages - 1}
              />
              <Pagination.Last
                onClick={() => handlePageChange(totalPages)}
                disabled={page === totalPages}
              />
            </Pagination>
          </div> */}
        {/* <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button
              className="flex items-center gap-3 bg-blackblue"
              size="md"
              //   onClick={() => addTrain()}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Train
            </Button>
          </div> */}
        {/* </div> */}
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
                    <td className="w-[5px]  p-2">{element.fare}</td>
                    <td className="w-[5px]  p-2">{element.seats}</td>
                    <td className="w-[5px]  p-2">{element.coach}</td>
                    <td className="w-[5px]  p-2">{element.operationDays}</td>

                    <td className="w-[5px]  p-2">
                      <BBButton
                        label="Book Ticket"
                        onClick={console.log}
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

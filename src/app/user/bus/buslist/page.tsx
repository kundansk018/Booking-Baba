"use client";
import React from "react";
import { useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import FilterPage from "../buslist/FilterPage";
import { CustomModal } from "@/app/modal/CustomModal";
import { BusDetails } from "@/app/user/bus/buslist/BusDetails";
export default function page() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const TABLE_HEAD = [
    "Operators",
    "Departure",
    "Duration",
    "Arrival",
    "Price",
    "",
  ];
  const TABLE_ROWS = [
    {
      operators: "BJ Tour & Travels",
      departure: "12:00",
      duration: "06h 32 m",
      arrival: "05.12 m",
      price: "$250",
    },
    {
      operators: "Shivneri Travels",
      departure: "11:00",
      duration: "03h 32 m",
      arrival: "08.12 m",
      price: "$550",
    },
    {
      operators: "Chhatrapti Travels",
      departure: "01:00",
      duration: "08h 32 m",
      arrival: "05.12 m",
      price: "$350",
    },
    {
      operators: "Akash Travels",
      departure: "05:00",
      duration: "10h 32 m",
      arrival: "11.12 m",
      price: "$650",
    },
    {
      operators: " Ajit Travels",
      departure: "05:00",
      duration: "02h 32 m",
      arrival: "08.12 m",
      price: "$850",
    },
  ];
  const handleClosemodal = () => {
    setShowModal(false);
  };
  return (
    <Card className="overflow-scroll h-full w-full flex-row gap-10">
      <div className="p-5">
        <FilterPage />
      </div>
      {/* flex flex-row gap-10 */}
      <div>
        <h1 className="text-2xl font-bold serif fontSize-25px mb-4 pl-10 pt-3 text-center ">
          Mumbai To Pune{" "}
        </h1>
        <table className="mx-auto border border-gray-300 w-[160%]  table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b  border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-extrabold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ operators, departure, duration, arrival, price }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={operators}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {operators}
                        <br />
                        <div className="font-normal">Ac sleeper </div>
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {departure}
                        <br />
                        <div className="font-normal">Mumbai </div>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {duration}
                        <br />
                        <div className="font-normal">12 Stops </div>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {arrival}
                        <br />
                        <div className="font-normal">Pune </div>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {price}
                      </Typography>

                      {showModal ? (
                        <CustomModal
                          children={
                            <BusDetails
                            // onSubmit={setShowModal(false)}
                            />
                          }
                          showModalHeader={true}
                          modalHeader={"Bus Booking Details"}
                          isFlexible={true}
                          topRightCloseButtonID={"x-  "}
                          showModal={true}
                          showBackButton={true}
                          showBBPSLogo={true}
                          handleBackClick={handleClosemodal}
                        ></CustomModal>
                      ) : null}
                      <Button
                        onClick={() => setShowModal(true)}
                        variant="outlined"
                        size="sm"
                      >
                        Select Seats
                      </Button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

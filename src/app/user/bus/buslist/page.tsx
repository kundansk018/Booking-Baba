"use client";
import React from "react";
import { useState } from "react";
import { Button, Card } from "@material-tailwind/react";
import FilterPage from "../buslist/FilterPage";
import { CustomModal } from "@/app/modal/CustomModal";
import { BusDetails } from "@/app/user/bus/buslist/BusDetails";
import { useSelector } from "react-redux";
import { getBusesById } from "@/redux/action/busaction";
import { useAppDispatch } from "@/redux/store";
import BBTypography from "@/app/components/BBTypography";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import HomeSearch from "@/components/HomeSearch";
import SearchComponent from "@/components/SearchComponent";

export default function page() {
  const busData: any = useSelector((state: any) => state.bus.userBusDetails);
  console.log("bus data is ..==>>>>", busData);

  const [showModal, setShowModal] = useState<boolean>(false);
  let from = busData?.data[0]?.from;
  let to = busData?.data[0]?.to;
  console.log("from ..==>>>>", from);
  console.log("to ..==>>>>", to);
  const dispatch = useAppDispatch();

  const TABLE_HEAD = ["Operators", "Departure", "Duration", "Arrival", "Price"];
  const TABLE_ROWS = [
    {
      operators: "AJ Tour & Travels",
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

  const onHandleChange = (id: any) => {
    dispatch(getBusesById(id)).then(() => {
      setShowModal(true);
      console.log("Inside Catch:::::::::::::::::==");
    });

    console.log("id is+++++++++++++++", id);
  };

  const [active, setActive] = React.useState(1);

  const getItemProps = (index: any) =>
    ({
      variant: active === index ? "filled" : "text",
      color: active === index ? "blue" : "blue-gray",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 3) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const getIsLast = (Element: Array<any>, index: number) => {
    if (index === Element.length - 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="my-5">
        <SearchComponent travelType="bus" />
      </div>
      <Card className="overflow-scroll h-full w-full flex-row gap-5">
        <div className="p-5">
          <FilterPage />
        </div>
        {/* flex flex-row gap-10 */}
        <div>
          <h1 className="text-2xl font-sans serif fontSize-25px mb-4 pl-10 pt-3 text-center ">
            {from} To {to}
          </h1>
          <table className="mx-auto border border-gray-300 w-[130%] text-left">
            <thead className="w-fit">
              <tr>
                {TABLE_HEAD.map((head, ind: number) => (
                  <th
                    key={head}
                    className={`border-b border-blue-gray-100 bg-blue-gray-50 p-4 ${
                      getIsLast(TABLE_HEAD, ind) === true ? "px-[3.5rem]" : ""
                    }`}
                  >
                    <BBTypography
                      variant="small"
                      color="blue-gray"
                      className={`font-bold leading-none opacity-70 w-fit`}
                    >
                      {head}
                    </BBTypography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {busData?.data?.map((element: any, index: any) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <BBTypography
                        variant="small"
                        color="blue-gray"
                        className="font-medium  text-black "
                      >
                        <div className="font-extralight text-base ">
                          {element.operator}
                        </div>

                        <div className="font-extralight  text-gray-700">
                          {element.busType}
                        </div>
                      </BBTypography>
                    </td>

                    <td className={classes}>
                      <BBTypography
                        variant="small"
                        color="blue-gray"
                        className="font-medium  text-black"
                      >
                        <div className="font-extralight text-base">
                          {element.departureTime}
                        </div>

                        <div className="font-extralight  text-gray-700">
                          {element.from}
                        </div>
                      </BBTypography>
                    </td>
                    <td className={classes}>
                      <BBTypography
                        variant="small"
                        color="blue-gray"
                        className="font-medium  text-black"
                      >
                        <div className="font-extralight text-base">
                          {element.duration}
                        </div>

                        <div className="font-extralight  text-gray-700">
                          {element.noofstop}
                        </div>
                      </BBTypography>
                    </td>
                    <td className={classes}>
                      <BBTypography
                        variant="small"
                        color="blue-gray"
                        className="font-medium  text-black"
                      >
                        <div className="font-extralight text-base">
                          {element.arrivalTime}
                        </div>

                        <div className="font-extralight  text-gray-700">
                          {element.to}
                        </div>
                      </BBTypography>
                    </td>
                    <div className="w-fit">
                      <td className={`${classes} w-fit`}>
                        <BBTypography
                          variant="small"
                          color="blue-gray"
                          className="font-semibold text-center text-xl"
                        >
                          {element.ticketprice}
                        </BBTypography>

                        <Button
                          onClick={() => {
                            onHandleChange(element._id);
                            setShowModal(true);
                          }}
                          variant="outlined"
                          size="sm"
                        >
                          Select Seats
                        </Button>
                      </td>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="flex justify-center items-center gap-4 mt-5">
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-2"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
              <IconButton {...getItemProps(1)}>1</IconButton>
              <IconButton {...getItemProps(2)}>2</IconButton>
              <IconButton {...getItemProps(3)}>3</IconButton>
            </div>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-2"
              onClick={next}
              disabled={active === 3}
            >
              Next
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
        </div>
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
      </Card>
    </div>
  );
}
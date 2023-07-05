import {
  Button,
  Tab,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import "./../../../styles/busDetails.css";
import { SEATS, TABLE_ROWS } from "@/utils/BusData";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/store";
import { book_seats, getBookedSeats } from "@/redux/action/seatBook";

interface Props {
  option?: any;
  onSubmit?: any;
  myData?: any;
}

export const BusDetails: React.FC<Props> = ({ myData }) => {
  const [activeTab, setActiveTab] = React.useState("Available");
  const [seats, setSeats] = useState<Array<any>>([]);
  const [ticketPrice, setTicketPrice] = useState<Array<any>>([]);
  const [bookSeats, setBookSeats] = useState<Array<any>>([]);

  const [price, setPrice] = useState(0);

  const [count, setCount] = useState<number>(0);
  const dispatch = useAppDispatch();

  const router = useRouter();

  // console.log(" Data in Bus Details :::::: ", myData);

  const busDetails = useSelector((state: any) => state.bus.getBusById);
  const busNumber = busDetails?.data?.busnumber;
  console.log("BusNumber ", busDetails?.data?.busnumber);

  const bookedSeats = useSelector((state: any) => state.seats.bookedSeats);

  let data = bookedSeats?.data?.data?.seats;
  let bookedSeatsData: any = [];
  bookedSeatsData = data ? JSON.parse(data) : "";

  for (let i = 0; i < bookedSeatsData.length; i++) {
    bookSeats.push(bookedSeatsData[i]);
  }
  console.log("state data ", bookSeats);

  useEffect(() => {
    if (busNumber) {
      getBusNo(busDetails?.data?.busnumber);
    }
  }, [busNumber]);

  const getBusNo = async (busNumber: any) => {
    console.log("get bus no in async function ", busNumber);

    var formData = new FormData();
    formData.append("busNumber", busNumber);

    // const res = await fetch(
    //   "http://localhost:3000/api/busapi/busapi?action=GET_BUS_NUMBER",
    //   {
    //     method: "POST",
    //     body: formData,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   }
    // );
    // console.log(" response in getBusNo in getNusNo function", res);
    dispatch(getBookedSeats(formData));
  };

  console.log("bus Details By id..:::::::::::::: ", busDetails);

  const onSeats = (selected_seat: any) => {
    let seatId = selected_seat.id;

    let l_seats = [...seats];

    let index = l_seats.findIndex((element) => element.id == seatId);
    if (index >= 0) {
      l_seats.splice(index, 1); //remove
      setSeats(l_seats);
    } else {
      l_seats = [...l_seats, selected_seat];
      setSeats(l_seats);
    }
  };

  let sum = 0;
  const totalPrice = () => {
    sum = seats.reduce((sum, item) => sum + item.price, 0);

    return sum;
  };

  const onBookSeats = () => {
    let b_Seats: any = [...seats];
    console.log("seats ", b_Seats);

    let data = {
      b_Seats: JSON.stringify(b_Seats),
      totalPrice: price,
      busDetails: busDetails,
    };
    console.log("data in busdetails page...", data);

    dispatch(book_seats(data)).then((res: any) => {
      router.push("/user/bus/details");
    });
  };

  const onHandleDelete = () => {
    seats.pop();
    setCount(count + 1);
  };
  console.log(
    "busDetails?.data?.travelagencyname",
    busDetails?.data?.travelagencyname
  );
  return (
    <div className="h-[530px] overflow-y-scroll overflow-y-hidden">
      {/* <p className="text-black font-semibold text-xl">Bus Booking Details</p> */}

      <div className="flex justify-between px-5 py-5 text-4">
        <div className="flex flex-col">
          <span className="text-black font-2xl text-2xl">
            {busDetails?.data?.travelagencyname}
          </span>
          <small>{busDetails?.data?.busType}</small>
        </div>
        <div className="flex flex-col">
          <span className="text-black font-2xl text-2xl">
            {busDetails?.data?.departureTime}
          </span>
          <small>{busDetails?.data?.from}</small>
        </div>
        <div className="flex flex-col">
          <span className="text-black font-2xl text-2xl">
            {busDetails?.data?.duration
              ? busDetails?.data?.duration
              : "06 h 32 m"}
          </span>
          <small>{busDetails?.data?.busType}</small>
        </div>
        <div className="flex flex-col">
          <span className="text-black font-2xl text-2xl">
            {busDetails?.data?.arrivalTime}
          </span>
          <small>{busDetails?.data?.to}</small>
        </div>
      </div>

      <div>
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
            }}
          >
            <Tab value="Available" onClick={() => setActiveTab("Available")}>
              Available Seats
            </Tab>
            <Tab
              value="Cancellation"
              onClick={() => setActiveTab("Cancellation")}
            >
              Cancellation Fee
            </Tab>
          </TabsHeader>
          <TabsBody>
            {activeTab === "Available" ? (
              <>
                <p className="text-xs ml-56 p-3">
                  Click on Seat to select/ deselect
                </p>
                <div className="flex">
                  <div className="h-96 w-52 bg-grey-400 mx-auto border border-black">
                    <p className="mx-auto -m-3 bg-[#e7e9ed] w-fit h-fit mb-2 ">
                      Front
                    </p>
                    <div className="flex flex-wrap ">
                      {SEATS?.map(
                        (element: any, index: any) => (
                          // bookSeats.map((item: any, itemIndex: any) => (
                          <div
                            key={index}
                            onClick={() => {
                              onSeats(element);
                            }}
                            className={`flex cursor-pointer justify-center mx-3 my-2 text-sm rounded-md px-3
                           p-1 h-fit w-5 bg-grey-900 border border-black ${
                             seats.includes(element)
                               ? "selected-seats text-white"
                               : ""
                           } `}
                          >
                            {element.seat_number}
                          </div>
                        )
                        // ))
                      )}
                    </div>
                  </div>
                  <div className="h-full w-72 mx-auto border border-gray-100 bg-white p-3">
                    <div>
                      <p className="text-black font-semibold text-xl">
                        Booking Details
                      </p>
                      <p className="text-xs  ">
                        Selected Seats ({seats.length}):
                      </p>
                      <div>
                        <ul>
                          {seats?.map((elements: any, index) => (
                            <li>
                              {elements.classType +
                                " Seats " +
                                elements.seat_number +
                                ": $" +
                                elements.price}
                              <button onClick={() => onHandleDelete()}>
                                <RxCross2
                                  color="red"
                                  className="border border-red-500 rounded-full"
                                />
                              </button>
                            </li>
                          ))}
                        </ul>
                        <div className="h-9 mt-2 w-25 border border-gray-400  p-1">
                          Total Fare : {`$` + " " + totalPrice()}
                        </div>
                        <div className="m-2">
                          <Button onClick={onBookSeats} fullWidth>
                            Continue
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="m-5">
                <table className="w-full min-w-max table-auto text-left ">
                  <thead>
                    <tr>
                      <th className="border border-blue-gray-100 bg-blue-gray-50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          Hours before Departure
                        </Typography>
                      </th>

                      <th className="border border-blue-gray-100 bg-blue-gray-50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          Refund Percentage
                        </Typography>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map(({ name, job }, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4 border border-blue-gray-500"
                        : "p-4 border border-blue-gray-500";

                      return (
                        <tr key={name}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {job}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="">
                  <p className="text-black font-semibold text-x ">
                    Terms & Conditions
                  </p>
                  <ul>
                    <li className="flex flex-row">
                      {" "}
                      <span className=" flex items-center">
                        <BsDot />
                      </span>{" "}
                      The penalty is subject to 24 hrs before departure. No
                      Changes are allowed after that.
                    </li>
                    <li className="flex flex-row">
                      <span className=" flex items-center">
                        <BsDot />
                      </span>{" "}
                      The charges are per seat.
                    </li>
                    <li className="flex flex-row">
                      <span className=" flex items-center">
                        <BsDot />
                      </span>{" "}
                      Partial cancellation is not allowed on tickets booked
                      under special discounted fares.
                    </li>
                    <li className="flex flex-row">
                      <span className=" flex items-center">
                        <BsDot />
                      </span>{" "}
                      In case of no-show or ticket not cancelled within the
                      stipulated time, only statutory taxes are refundable
                      subject to Service Fee
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

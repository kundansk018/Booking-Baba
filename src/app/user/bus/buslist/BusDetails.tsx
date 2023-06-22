import {
  Button,
  Tab,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import "./../../../styles/busDetails.css";
import { SEATS, TABLE_ROWS } from "@/utils/BusData";

interface Props {
  option?: any;
  onSubmit?: any;
}

export const BusDetails: React.FC<Props> = ({ option }) => {
  const [activeTab, setActiveTab] = React.useState("Available");
  const [seats, setSeats] = useState<Array<any>>([]);
  const [bookSeats, setBookSeats] = useState<boolean>(false);
  const [ticketPrice, setTicketPrice] = useState<any>(0);
  const [firstClassTicketPrice, setFirstClassTicketPrice] = useState<any>(250);
  const [economyClassTicketPrice, setEconomyClassTicketPrice] =
    useState<any>(140);

  const [count, setCount] = useState<number>(0);

  // useEffect(() => {
  //   onHandleDelete;
  //   onBookSeats;
  // }, []);

  const onSeats = (seat_number: any) => {
    let lseats = [...seats];
    if (seats.includes(seat_number)) {
      ///
      let index = lseats.findIndex(
        (element: any, index: number) => element == seat_number
      );
      lseats.splice(index, 1);

      setSeats(lseats);
    } else {
      let seat_no = [...lseats, seat_number];
      setSeats(seat_no);
    }
  };

  const onBookSeats = () => {
    setBookSeats(true);
  };

  const onHandleDelete = () => {
    seats.pop();
    setCount(count + 1);
  };

  console.log("Seats current status::::::::::::", seats);
  console.log("Book Seats current status::::::::::::", bookSeats);

  return (
    <div>
      {/* <p className="text-black font-semibold text-xl">Bus Booking Details</p> */}

      {/* <div className="flex flex-row p-1">
        <div className="col ">
          <span>AK Tour & Travels</span>
          <small>AC Sleeper</small>
        </div>
        <div>
          <span>12:00</span>
          <small>Mumbai</small>
        </div>
        <div>
          <span>06h 32m</span>
          <small>12 Stops</small>
        </div>
        <div>
          <span>05:15</span>
          <small>Surat</small>
        </div>
      </div> */}

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
                      {SEATS?.map((element: any, index: any) => (
                        <div
                          key={index}
                          onClick={() => {
                            onSeats(element.value);
                            setTicketPrice(ticketPrice + element.price);
                          }}
                          className={`flex justify-center mx-3 my-2 text-sm rounded-md px-3 p-1 h-fit w-5 bg-grey-900 border border-black ${
                            seats.includes(element.value)
                              ? "selected-seats"
                              : "bg-grey-900"
                          } `}
                        >
                          {element.value}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-96 w-68 mx-auto border border-grey-500 bg-white p-3">
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
                              {elements === 1 ||
                              elements === 2 ||
                              elements === 3 ||
                              elements === 4 ||
                              elements === 5 ||
                              elements === 6
                                ? "First Class Seat # " +
                                  elements +
                                  " : " +
                                  firstClassTicketPrice
                                : "Economy Class Seat # " +
                                  elements +
                                  " : " +
                                  economyClassTicketPrice}
                              <button onClick={() => onHandleDelete()}>
                                <RxCross2
                                  color="red"
                                  className="border border-red-500 rounded-full"
                                />
                              </button>
                            </li>
                          ))}
                        </ul>
                        <div className="border border-black">
                          Total Fare : {`$` + ticketPrice}
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

<>
  <>filter</>
  <> loops</>
</>;

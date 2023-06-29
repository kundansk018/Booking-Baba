"use client";

import UInput from "@/components/userComponents/UInput";
import React, { useState } from "react";
import { Tab, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ConfirmationPage: React.FC = () => {
  const userData: any = useSelector((state: any) => state.login.loginDetails);
  console.log("userData in bus Details Page  ..", userData);

  const router = useRouter();
  const [email, setEmail] = useState(userData?.email);
  const [mobileNumber, setMobileNumber] = useState(userData?.mobileNumber);
  const [firstName, setfirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [age, setAge] = useState("");

  const [showModal, setShowModal] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("Available");

  const book_seats: any = useSelector((state: any) => state.seats.bookSeats);

  console.log("book seats final details page...!!!", book_seats);
  console.log(
    "travelagencyname...!!!",
    book_seats?.busDetails?.data.travelagencyname
  );

  // seats.concat(book_seats?.b_Seats);
  // console.log("new seats array++++++++++++++++++++", seats);

  console.log("seats array++++++++++++++++++++", book_seats?.b_Seats);
  let data: any = [];
  data = JSON.parse(book_seats?.b_Seats)
    ? JSON.parse(book_seats?.b_Seats)
    : null;

  console.log("new data array ::::::::::", data);

  let from = book_seats?.busDetails?.data.from;
  let to = book_seats?.busDetails?.data.to;
  let travelagencyname = book_seats?.busDetails?.data.travelagencyname;
  let busType = book_seats?.busDetails?.data.busType;
  let arrivalDate = book_seats?.busDetails?.data.arrivalDate;
  const handleClosemodal = () => {
    setShowModal(false);
  };

  let sum = 0;

  const totalPrice = () => {
    sum = data.reduce((sum: any, item: any) => sum + item.price, 0);
    return sum;
  };
  console.log("total price ", totalPrice());

  return (
    <div className="container mx-auto p-4">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 bg-white shadow-md rounded p-4">
          <h2 className="text-4xl ">Confirm Bus Details</h2>
          <div className="card p-5">
            <div className="card-header">
              <div className="border border-gray-200 rounded p-2 bg-gray-50">
                <div className="flex items-center">
                  <div className="w-1/4">
                    <h5 className="text-lg font-bold">
                      {from ? from : "FROM"}
                    </h5>
                  </div>
                  <div className="w-2/3 text-center">
                    <h5 className="text-lg font-bold">{to ? to : "TO"}</h5>
                  </div>
                  <div className="w-2/3 text-center">
                    <h3 className="text-[#413e3e]">{arrivalDate}</h3>
                  </div>

                  <div className="text-center">
                    <h5 className="inline-block bg-light-green-900 text-white px-3 py-1 rounded-md">
                      Refundable
                    </h5>
                  </div>
                  <div className="text-center w-1/3 text-sm">
                    <a
                      className="text-center w-1/3 text-sm text-gray-500"
                      onClick={() => setShowModal(true)}
                    >
                      Fare Rules
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              {/* Train details */}
              <div className="flex items-center mb-4 pb-2 border border-gray-200">
                <div className="">
                  <div className="w-full text-center">
                    <h5 className="text-lg mt-2">
                      {travelagencyname
                        ? travelagencyname
                        : "Ak Tour And Travles"}
                    </h5>
                    <span className="text-sm text-gray-500">
                      {busType ? busType : "Ac Sleeper"}
                    </span>
                  </div>
                  <div>
                    <div className="w-full mt-1 text-sm">
                      Seat No({data.length}) :{" "}
                      {data?.map((element: any) => (
                        <span className="bg-green p-1 m-1 w-full">
                          {element.seat_number}{" "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-1/4 text-center">
                  <h5 className="text-2xl">23:00</h5>
                  <span className="text-sm text-gray-500">{from}</span>
                  {/* <h5 className="text-sm text-gray-500">15 Jun 18, Sat</h5> */}
                </div>
                <div className="w-1/4 text-center">
                  <h5 className="text-lg">18h 55m</h5>
                  <span className="text-sm text-gray-500">12 Stops</span>
                </div>
                <div className="w-1/4 text-center">
                  <h5 className="text-2xl">18:15</h5>
                  <span className="text-sm text-gray-500">{to}</span>
                  {/* <h5 className="text-sm text-gray-500">16 Jun 18, Sun</h5> */}
                </div>
              </div>
              <div className="alert text-sm alert-info mb-4 bg-[#b6effb] p-3 rounded-sm">
                <span className=" bg-cyan-300  p-[2px] rounded-sm">NOTE:</span>{" "}
                This is a special fare given by the railway. Railway
                cancellation charges do apply.
              </div>
              <h2 className="text-3xl mb-4 mt-6">
                Traveller Details -
                <span className="text-lg">
                  <a
                    className="text-blue-700"
                    onClick={() => router.push("/auth")}
                  >
                    Login
                  </a>
                  to book faster
                </span>
              </h2>
              <p className="font-semibold">Contact Details</p>
              <div className="flex flex-wrap mb-4">
                <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                  <UInput
                    id="email"
                    type="email"
                    placeholder=" Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="w-full sm:w-1/2 sm:pl-2 mb-3">
                  <UInput
                    id="phone"
                    type="text"
                    placeholder="Enter Mobile Details"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
              </div>
              <p className="font-semibold">Adult 1</p>
              <div className="flex flex-wrap mb-4">
                {/* <div className="w-32 sm:w-32 sm:pr-1 mb-3">
                  <BBDropdown
                    className="w-32 h-12"
                    options={[
                      { label: "Mr" },
                      { label: "Ms" },
                      { label: "Mrs" },
                    ]}
                    value={title}
                    onPress={(value: any) => {
                      setTitle(value);
                    }}
                    label="Title"
                  />
                </div> */}
                <div className="w-full sm:w-1/4 sm:pr-2 mb-3">
                  <UInput
                    // className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    id="passenger-name"
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </div>
                <div className="w-full sm:w-1/4 sm:pr-2 mb-3">
                  <UInput
                    // className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    id="passenger-name"
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="w-full sm:w-1/4 sm:pr-2 mb-3">
                  <UInput
                    // className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    id="passenger-age"
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="bg-white shadow-md rounded p-4">
          <h3 className="text-3xl mb-2">Fare Details</h3>
          <div className="space-y-2">
            <aside className="col-lg-4 mt-4 mt-lg-0">
              <div className="bg-white shadow-md rounded p-3">
                <ul className="list-none">
                  <li className="mb-2">
                    Base Fare{" "}
                    <span className="float-right text-4 font-medium text-dark">
                      $980
                    </span>
                    <br />
                  </li>
                  <li className="mb-2">
                    Taxes &amp; Fees{" "}
                    <span className="float-right text-4 font-medium text-dark">
                      $215
                    </span>
                  </li>
                  <li className="mb-2">
                    Insurance{" "}
                    <span className="float-right text-4 font-medium text-dark">
                      $95
                    </span>
                  </li>
                </ul>
                <div className="text-dark bg-gray-100 text-4 font-semibold p-3">
                  Total Amount{" "}
                  <span className="float-right text-6">
                    {`$` + totalPrice()}
                  </span>
                </div>
                <h3 className="text-4 mb-3 mt-4">Promo Code</h3>
                <div className="flex items-center mb-4">
                  <UInput
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Promo Code"
                    aria-label="Promo Code"
                    type="text"
                  />
                  <button
                    className="bg-blue-500 shadow-none ml-3 px-3 py-2 rounded-md"
                    type="submit"
                  >
                    APPLY
                  </button>
                </div>
                <ul className="list-disc pl-5 mb-5">
                  <li>
                    <div className="text-3 font-semibold">FLTOFFER</div>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <div className="text-3 font-semibold">HOTOFFER</div>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded w-full"
              onClick={() => setShowModal(true)}
            >
              Proceed to Pay
            </button>
          </div>
        </aside>
      </section>

      {/* Fare Rules Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/2">
            <h2 className="text-2xl mb-4">Fare Rules</h2>
            <hr className="mb-4" />
            <div className="modal-body">
              <div className="h-[530px] overflow-y-scroll overflow-y-hidden">
                <div>
                  <Tabs value={activeTab}>
                    <TabsHeader
                      className="rounded-none border-b border-blue-gray-50 bg-white p-0"
                      indicatorProps={{
                        className:
                          "bg-white border-b-2 border-blue-500 shadow-none rounded-none",
                      }}
                    >
                      <Tab
                        value="Available"
                        onClick={() => setActiveTab("Available")}
                      >
                        Baggage Details
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
                          <div className="my-3" id="myTabContent">
                            <div
                              className="tab-pane fade show active"
                              id="third"
                              role="tabpanel"
                              aria-labelledby="third-tab"
                            >
                              <div className="table-responsive">
                                <table className="mx-auto border border-gray-300 w-[100%] ">
                                  <thead className=" border-b border-blue-gray-100 bg-blue-gray-50 p-4 X">
                                    <tr>
                                      <th>&nbsp;</th>
                                      <td className="text-center">Cabin</td>
                                      <td className="text-center">Check-In</td>
                                    </tr>
                                  </thead>
                                  <tbody className="p-4 border-b border-blue-gray-50  ">
                                    <tr>
                                      <td>Adult</td>
                                      <td className="text-center">7 Kg</td>
                                      <td className="text-center">15 Kg</td>
                                    </tr>
                                    <tr>
                                      <td>Child</td>
                                      <td className="text-center">7 Kg</td>
                                      <td className="text-center">15 Kg</td>
                                    </tr>
                                    <tr>
                                      <td>Infant</td>
                                      <td className="text-center">0 Kg</td>
                                      <td className="text-center">0 Kg</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="my-3" id="myTabContent">
                          <div
                            className="tab-pane fade"
                            id="fourth"
                            role="tabpanel"
                            aria-labelledby="fourth-tab"
                          >
                            <table className="mx-auto border border-gray-300 w-[100%]">
                              <thead className=" border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <tr>
                                  <th>&nbsp;</th>
                                  <td className="text-center">
                                    Per Passenger Fee
                                  </td>
                                </tr>
                              </thead>
                              <tbody className="p-4 border-b border-blue-gray-50 ">
                                <tr>
                                  <td>24 hrs - 365 days</td>
                                  <td className="text-center">$250 + $50</td>
                                </tr>
                                <tr>
                                  <td>2-24 hours</td>
                                  <td className="text-center">$350 + $50</td>
                                </tr>
                                <tr>
                                  <td>0-2 hours</td>
                                  <td className="text-center">$550 + $50</td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="font-semibold">
                              Terms &amp; Conditions
                            </p>
                            <ul className="list-disc pl-4">
                              <li>
                                The penalty is subject to 4 hrs before
                                departure. No Changes are allowed after that.
                              </li>
                              <li>The charges are per passenger per sector.</li>
                              <li>
                                Partial cancellation is not allowed on tickets
                                booked under special discounted fares.
                              </li>
                              <li>
                                In case of no-show or ticket not cancelled
                                within the stipulated time, only statutory taxes
                                are refundable subject to Service Fee.
                              </li>
                              <li>No Baggage Allowance for Infants</li>
                              <li>
                                Airline penalty needs to be reconfirmed prior to
                                any amendments or cancellation.
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </TabsBody>
                  </Tabs>
                </div>
                <div className="text-right mt-4">
                  <button
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                    onClick={handleClosemodal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationPage;

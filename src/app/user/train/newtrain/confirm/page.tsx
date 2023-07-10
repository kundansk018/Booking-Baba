"use client";
import UHeader from "@/components/userComponents/UHeader";
import { Tab, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import UInput from "@/components/userComponents/UInput";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const ConfirmationPage: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);

  const trainData: any = useSelector((state: any) => state.train.getTrainById);
  console.log("Train data is in update page ..", trainData);
  const [activeTab, setActiveTab] = React.useState("Available");

  const router = useRouter();

  const handleClosemodal = () => {
    setShowModal(false);
  };

  const paymentProceed = () => {
    alert("fun called...");
    router.push("/user/train/newtrain/payment");
  };

  return (
    <>
      <UHeader
        header="Trains -  Confirm Details"
        subHeader="Home > Trains > Trains Confirm Details"
      />
      <div className="container mx-auto p-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 bg-white shadow-md rounded p-4">
            <h2 className="text-2xl ml-5 ">Confirm Trains Details</h2>
            <div className="card p-5">
              <div className="card-header">
                <div className="border border-gray-200 rounded p-2 bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-1/4">
                      <h5 className="text-lg font-bold">
                        {trainData?.data?.from_Stn}
                      </h5>
                    </div>
                    <div className="w-2/3 text-center">
                      <h5 className="text-lg font-bold">
                        {trainData?.data?.to_Stn}
                      </h5>
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

              {/* <div className="flex items-center mb-4">
                  <div className="w-1/3">
                    <h5 className="text-sm text-gray-500">15 Jun 18, Sat</h5>
                  </div>
                  <div className="w-1/4 text-center">
                    <h5 className="text-sm text-gray-500">16 Jun 18, Sun</h5>
                  </div>
                </div> */}
              <div className="card-body">
                {/* Train details */}
                <div className="flex items-center mb-4 pb-2 border border-gray-200">
                  <div className="w-1/4 text-center mt-2">
                    <h5 className="text-2xl">{trainData?.data?.trainName}</h5>
                    <span className="text-sm text-gray-500">
                      {trainData?.data?.trainNo}
                    </span>
                    <h5 className="mt-4">
                      Class :{" "}
                      <span className="bg-[#0dcaf0] p-1 text-white rounded">
                        {trainData?.data?.classType}
                      </span>
                    </h5>
                  </div>
                  <div className="w-1/4 text-center">
                    <h5 className="text-2xl">{trainData?.data?.depTime}</h5>
                    <span className="text-sm text-gray-500">
                      {trainData?.data?.from_Stn}
                    </span>
                    <h5 className="text-sm text-gray-500">
                      {trainData?.data?.depDate}
                    </h5>
                  </div>
                  <div className="w-1/4 text-center">
                    <h5 className="text-lg">{trainData?.data?.duration}</h5>
                    <span className="text-sm text-gray-500">
                      {trainData?.data?.stops} Stops
                    </span>
                  </div>
                  <div className="w-1/4 text-center">
                    <h5 className="text-2xl">{trainData?.data?.arrivalTime}</h5>
                    <span className="text-sm text-gray-500">
                      {trainData?.data?.to_Stn}
                    </span>
                    <h5 className="text-sm text-gray-500">
                      {trainData?.data?.arrDate}
                    </h5>
                  </div>
                </div>
                <div className="alert text-sm alert-info mb-4 bg-[#b6effb] p-4 rounded-sm">
                  <span className=" bg-cyan-300  p-[2px] rounded-sm">
                    NOTE:
                  </span>{" "}
                  This is a special fare given by the railway. Railway
                  cancellation charges do apply.
                </div>
                <h2 className="text-2xl mb-4 mt-6">
                  Traveller Details -{" "}
                  {/* <span className="text-sm text-gray-500">
                  Login to book faster
                </span> */}
                </h2>
                <p className="font-semibold">Contact Details</p>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                    <UInput id="name" type="text" placeholder="Name" />
                  </div>
                  <div className="w-full sm:w-1/2 sm:pl-2 mb-3">
                    <UInput id="email" type="email" placeholder="Email" />
                  </div>
                  <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                    <UInput id="phone" type="text" placeholder="Phone" />
                  </div>
                  <div className="w-full sm:w-1/2 sm:pl-2 mb-3">
                    <UInput id="address" type="text" placeholder="Address" />
                  </div>
                </div>
                <p className="font-semibold">Passenger Details</p>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full sm:w-1/2 sm:pr-2 mb-3">
                    <UInput
                      id="passenger-name"
                      type="text"
                      placeholder="Passenger Name"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 sm:pl-2 mb-3">
                    <UInput id="passenger-age" type="text" placeholder="Age" />
                  </div>
                </div>
              </div>
              {/* <button
                className="bg-blue-500 text-white px-6 py-2 rounded-md"
                type="submit"
              >
                Book Ticket
              </button> */}
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
                      <small className="text-muted">
                        Adult: 1, Child: 0, Infant: 0
                      </small>
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
                    <span className="float-right text-6">$1290</span>
                  </div>
                  <h3 className="text-4 mb-3 mt-4">Promo Code</h3>
                  <div className="flex items-center mb-4">
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                      placeholder="Promo Code"
                      aria-label="Promo Code"
                      type="text"
                    />
                    <button
                      className="bg-blue-500 text-white shadow-none ml-3 px-3 py-2 rounded-md"
                      type="submit"
                    >
                      APPLY
                    </button>
                  </div>
                  <ul className="list-disc pl-5 mb-5">
                    <li>
                      <div className="text-3 font-semibold">FLTOFFER</div>
                      Up to $500 Off on your booking. Hurry! Limited period
                      offer.{" "}
                      <a className="text-sm text-blue-500" href="">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <div className="text-3 font-semibold">HOTOFFER</div>
                      Up to $500 Off on your booking. Hurry! Limited period
                      offer.{" "}
                      <a className="text-sm text-blue-500" href="">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    {/* <li>
                    <span className="text-3 font-semibold">SUMMEROFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <span className="text-3 font-semibold">BIGOFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <span className="text-3 font-semibold">FLTOFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <span className="text-3 font-semibold">FLTOFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li> */}
                  </ul>
                </div>
              </aside>
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                onClick={() => paymentProceed()}
              >
                Proceed to Pay
              </button>
            </div>
          </aside>
        </section>

        {/* Fare Rules Modal */}
        {showModal && (
          <div className=" fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-1/2 mt-20">
              <h2 className="text-2xl  mb-2">Fare Rules</h2>

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
                                        <td className="text-center">
                                          Check-In
                                        </td>
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
                                <li>
                                  The charges are per passenger per sector.
                                </li>
                                <li>
                                  Partial cancellation is not allowed on tickets
                                  booked under special discounted fares.
                                </li>
                                <li>
                                  In case of no-show or ticket not cancelled
                                  within the stipulated time, only statutory
                                  taxes are refundable subject to Service Fee.
                                </li>
                                <li>No Baggage Allowance for Infants</li>
                                <li>
                                  Airline penalty needs to be reconfirmed prior
                                  to any amendments or cancellation.
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
    </>
  );
};

export default ConfirmationPage;

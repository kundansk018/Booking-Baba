import {
  Button,
  Tab,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

import React from "react";

interface Props {}

export const Adesh: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = React.useState("Available");

  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const router = useRouter();
  return (
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
                              <td className="text-center">Per Passenger Fee</td>
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
                        <p className="font-semibold">Terms &amp; Conditions</p>
                        <ul className="list-disc pl-4">
                          <li>
                            The penalty is subject to 4 hrs before departure. No
                            Changes are allowed after that.
                          </li>
                          <li>The charges are per passenger per sector.</li>
                          <li>
                            Partial cancellation is not allowed on tickets
                            booked under special discounted fares.
                          </li>
                          <li>
                            In case of no-show or ticket not cancelled within
                            the stipulated time, only statutory taxes are
                            refundable subject to Service Fee.
                          </li>
                          <li>No Baggage Allowance for Infants</li>
                          <li>
                            Airline penalty needs to be reconfirmed prior to any
                            amendments or cancellation.
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
                onClick={() => router.back()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<>
  <>filter</>
  <> loops</>
</>;

"use client";
import BBButton from "@/app/components/BBButton";
import React, { useState } from "react";

export default function page() {
  // const [print, setPrint] = useState<boolean>(false);

  const printContent = () => {
    // setPrint(true);
    const printableContent: any = document.getElementById("printable-content");
    const printWindow: any = window.open("", "", "height=1000,width=1000");
    printWindow.document.write(printableContent.innerHTML);
    printWindow.print();
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          paddingLeft: "250px",
          paddingRight: "250px",
        }}
        id="printable-content"
        // className="bg-white px-60"
      >
        <div
          style={{ marginLeft: "auto", marginRight: "auto", padding: "16px" }}
          // className="mx-auto p-4"
        >
          <div
            style={{ padding: "16px" }}
            //  className=" p-4 "
          >
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                padding: "16px",
              }}
              // className=" mx-auto p-4"
            >
              <div
                style={{ fontWeight: "bold", fontSize: "24px", color: "gray" }}
                // className="font-bold text-2xl text-[gray]"
              >
                <p>Booking Baba</p>
              </div>
              <div
                style={{ textAlign: "right" }}
                // className="text-right"
              >
                <h4
                  style={{
                    fontWeight: "700",
                    color: "rgb(13 71 161)",
                    fontSize: "24px",
                  }}
                  //  className=" font-bold text-blue-900 text-2xl"
                >
                  Invoice
                </h4>
                <p
                  style={{
                    paddingBottom: "12px",
                    color: "rgb(83 91 97)",
                    fontSize: "16px",
                  }}
                  // className=" pb-3 text-[#535b61] text-base"
                >
                  Invoice Number - 16835
                </p>
                <hr />
              </div>

              <p
                style={{
                  textAlign: "center",
                  marginBottom: "8px",
                  paddingTop: "12px",
                  color: "rgb(142 154 157)",
                  fontSize: "12px",
                }}
                //  className=" text-center mb-2 pt-3 text-[#8e9a9d] text-xs"
              >
                This e-ticket will only be valid along with an ID proof in
                original. If found travelling without ID proof, passengers will
                be treated as without a ticket and charged as per extant Railway
                rules.
              </p>

              <h4
                style={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "rgb(12 47 84)",
                  fontSize: "18px",
                }}
                //  className="font-bold mb-2 text-[#0c2f54] text-lg"
              >
                Journey Details
              </h4>
              <div
                style={{ marginBottom: "8px" }}
                // className="mb-2"
              >
                <table
                  style={{
                    border: "solid 1px",
                    borderCollapse: "collapse",
                    width: "100%",
                  }}
                  // className="border- "
                >
                  <thead>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158)",
                        backgroundColor: "rgb(239 239 239)",
                      }}
                      // className="border border-gray-500 bg-[#efefef]"
                    >
                      <th>
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "rgb(83 91 97)",
                            fontSize: "14px",
                          }}
                          //  className="font-bold text-[#535b61] text-sm"
                        >
                          Reference ID :
                        </span>
                        <span
                          style={{
                            color: "rgb(33 37 41)",
                            fontSize: "14px",
                            fontWeight: "normal",
                          }}
                          // className="text-[#212529] text-sm font-normal"
                        >
                          OUJICE
                        </span>
                      </th>

                      <th
                        colSpan={4}
                        style={{ textAlign: "end", paddingRight: "20px" }}
                        // className="text-end pr-5"
                      >
                        <span
                          style={{ color: "rgb(83 91 97)", fontSize: "14px" }}
                          // className="text-[#535b61] text-sm"
                        >
                          Date of Booking :
                        </span>
                        <span
                          style={{
                            color: "rgb(33 37 41)",
                            fontSize: "14px",
                            fontWeight: "normal",
                          }}
                          // className="text-[#212529] text-sm font-normal"
                        >
                          {" "}
                          05 Aug, 2019 at 06:50 PM{" "}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158)",
                      }}
                      // className="border border-gray-500"
                    >
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingBottom: "8px",
                          paddingTop: "8px",
                          paddingLeft: "16px",
                          color: "rgb(83 91 97)",
                          fontSize: "14px",
                        }}
                        // className=" font-bold py-2 pl-4 text-[#535b61] text-sm"
                      >
                        Transaction ID
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        3912912704
                      </td>
                      <td
                        style={{
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        }}
                        // className="font-bold py-2 text-[#535b61] text-sm"
                      >
                        PNR
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        //  className="text-[#212529] text-sm"
                      >
                        2213335256
                      </td>
                    </tr>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158)",
                      }}
                      // className="border border-gray-500"
                    >
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          paddingLeft: "16px",
                        }}
                        // className="font-bold py-2 pl-4 text-[#535b61] text-sm"
                      >
                        Train No &amp; Name
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        4211 / Intercity Exp.
                      </td>
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                        }}
                        // className="font-bold py-2 text-[#535b61] text-sm"
                      >
                        Date of Journey
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        10 Aug, 2019
                      </td>
                    </tr>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158",
                      }}
                      // className="border border-gray-500"
                    >
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          paddingLeft: "16px",
                        }}
                        // className="font-bold py-2 pl-4 text-[#535b61] text-sm"
                      >
                        Class
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        Ac Chair
                      </td>
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          // paddingLeft: "16px",
                        }}
                        // className="font-bold py-2 text-[#535b61] text-sm"
                      >
                        Date of Boarding
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        10 Aug, 2019
                      </td>
                    </tr>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158",
                      }}
                      // className="border border-gray-500"
                    >
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          paddingLeft: "16px",
                        }}
                        // className="font-bold py-2 pl-4 text-[#535b61] text-sm"
                      >
                        From
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        Delhi
                      </td>
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          // paddingLeft: "16px",
                        }}
                        //  className="font-bold py-2 text-[#535b61] text-sm"
                      >
                        To
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        Ahmedabad
                      </td>
                    </tr>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158",
                      }}
                      // className="border border-gray-500"
                    >
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          paddingLeft: "16px",
                        }}
                        // className="font-bold py-2 pl-4 text-[#535b61] text-sm"
                      >
                        Departure
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        06:00 AM
                      </td>
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          // paddingLeft: "16px",
                        }}
                        // className="font-bold py-2 text-[#535b61] text-sm"
                      >
                        Total Fare
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        $1195.00
                      </td>
                    </tr>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158",
                      }}
                      // className="border border-gray-500"
                    >
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          paddingLeft: "16px",
                        }}
                        // className="font-bold py-2 pl-4 text-[#535b61] text-sm"
                      >
                        Distance
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        946 km
                      </td>
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          // paddingLeft: "16px",
                        }}
                        // className="font-bold py-2 text-[#535b61] text-sm"
                      >
                        Quota
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        General (GN)
                      </td>
                    </tr>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158",
                      }}
                      // className="border border-gray-500"
                    >
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          paddingLeft: "16px",
                        }}
                        // className="font-bold py-2 pl-4 text-[#535b61] text-sm"
                      >
                        Adult
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        1
                      </td>
                      <td
                        style={{
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 81 97)",
                          fontSize: "14px",
                          // paddingLeft: "16px",
                        }}
                        // className="font-bold py-2 text-[#535b61] text-sm"
                      >
                        Child
                      </td>
                      <td
                        style={{ color: "rgb(33 37 41)", fontSize: "14px" }}
                        // className="text-[#212529] text-sm"
                      >
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4
                style={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "rgb(12 47 84)",
                  fontSize: "18px",
                  paddingTop: "12px",
                }}
                // className="text-[#0c2f54] text-lg font-bold mb-2 pt-3"
              >
                Passenger Details
              </h4>
              <div
                style={{ marginBottom: "8px" }}
                // className="mb-2"
              >
                <table
                  style={{ width: "100%", borderCollapse: "collapse" }}
                  // className="w-full border-collapse"
                >
                  <thead>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158)",
                        color: "rgb(83 91 97)",
                        fontSize: "14px",
                        backgroundColor: "rgb(239 239 239)",
                      }}
                      // className="border border-gray-500 text-[#535b61] text-sm bg-[#efefef]"
                    >
                      <th
                        style={{ paddingTop: "4px", paddingBottom: "4px" }}
                        // className="py-1"
                      >
                        S. NO.
                      </th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Seat No.</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158)",
                        textAlign: "center",
                        color: "rgb(83 91 97)",
                      }}
                      // className="border border-gray-500 text-center text-[#535b61]"
                    >
                      <td
                        style={{ paddingTop: "4px", paddingBottom: "4px" }}
                        // className="py-1"
                      >
                        1
                      </td>
                      <td>Neil Patel</td>
                      <td>31</td>
                      <td>Male</td>
                      <td>C2, 25</td>
                      <td>Confirm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                style={{ marginBottom: "8px", paddingTop: "20px" }}
                //  className="mb-2 pt-5"
              >
                <table
                  style={{ width: "100%", borderCollapse: "collapse" }}
                  // className="w-full border-collapse"
                >
                  <tbody>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158)",
                      }}
                      // className="border border-gray-500"
                    >
                      <td
                        style={{
                          width: "33.3333%",
                          paddingTop: "4px",
                          paddingBottom: "4px",
                          paddingLeft: "4px",
                          color: "rgb(83 91 97)",
                        }}
                        // className="w-1/3 py-2 pl-1 text-[#535b61]"
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                            paddingLeft: "12px",
                            color: "rgb(83 91 97)",
                            fontSize: "14px",
                          }}
                          // className="font-bold pl-3 text-[#535b61] text-sm"
                        >
                          Agent :
                        </span>{" "}
                        Booking Baba Inc
                      </td>
                      <td
                        style={{
                          width: "33.3333%",
                          paddingTop: "4px",
                          paddingBottom: "4px",
                          color: "rgb(83 91 97)",
                        }}
                        // className="w-1/3 py-1 text-[#535b61]"
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            color: "rgb(83 91 97)",
                            fontWeight: "bold",
                          }}
                          // className="font-bold text-[#535b61] text-sm"
                        >
                          Phone No :
                        </span>{" "}
                        9898989898
                      </td>
                      <td
                        style={{
                          width: "33.3333%",
                          paddingTop: "4px",
                          paddingBottom: "4px",
                          paddingLeft: "8px",
                          color: "rgb(83 91 97)",
                        }}
                        // className="w-1/3 py-1 pl-2 text-[#535b61]"
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "rgb(83 91 97)",
                            fontSize: "14px",
                          }}
                          // className="font-bold text-[#535b61] text-sm"
                        >
                          Email Id :
                        </span>
                        bookingbaba@.gmail.com
                      </td>
                    </tr>
                    <tr
                      style={{
                        border: "solid 1px",
                        borderWidth: "1px",
                        borderColor: "rgb(158 158 158)",
                      }}
                      // className="border border-gray-500"
                    >
                      <td
                        colSpan={3}
                        style={{
                          paddingTop: "4px",
                          paddingBottom: "4px",
                          color: "rgb(83 91 97)",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                        // className="py-1 text-[#535b61] text-sm"
                      >
                        <span
                          style={{ fontWeight: "bold", paddingLeft: "12px" }}
                          // className="font-bold pl-3"
                        >
                          Address :
                        </span>{" "}
                        4th Floor, Plot No.22, Above Public Park, 145 Murphy
                        Canyon Rd, Suite 100-18, San Diego CA 2028.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4
                style={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                  paddingTop: "12px",
                  color: "rgb(12 47 84)",
                  fontSize: "18px",
                }}
                // className="font-bold mb-2 pt-3 text-[#0c2f54] text-lg"
              >
                Fare Details
              </h4>
              <div
                style={{ marginBottom: "8px" }}
                // className="mb-2 "
              >
                <table
                  style={{
                    border: "solid 1px",
                    width: "100%",
                    borderCollapse: "collapse",
                    borderSpacing: "4px",
                    borderColor: "rgb(158 158 158)",
                  }}
                  // className="w-full border-spacing-1 "
                >
                  <tbody>
                    <tr
                      style={{
                        textAlign: "end",
                        border: "solid 1px",
                        // borderWidth: "1px",
                        borderColor: "rgb(158 158 158)",
                      }}
                      // className=" text-end border border-gray-500"
                    >
                      <td
                        style={{
                          width: "75%",
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 91 97)",
                          fontSize: "14px",
                        }}
                        // className="w-3/4 font-bold py-2 text-[#535b61] text-sm"
                      >
                        Basic Fare :
                      </td>
                      <td
                        style={{
                          width: "25px",
                          textAlign: "end",
                          color: "rgb(83 91 97)",
                          paddingRight: "8px",
                        }}
                        // className="w-1/4 text-end text-[#535b61] pr-2"
                      >
                        $980.00
                      </td>
                    </tr>
                    <tr
                      style={{
                        border: "solid 1px",
                        //  borderWidth: "1px",
                        borderColor: "rgb(158 158 158)",
                      }}
                      //  className="border border-gray-500"
                    >
                      <td
                        style={{
                          width: "75%",
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 91 97)",
                          fontSize: "14px",
                          textAlign: "end",
                        }}
                        // className="w-3/4 font-bold text-end py-2 text-[#535b61] text-sm"
                      >
                        Reservation Charge :
                      </td>
                      <td
                        style={{
                          width: "25px",
                          textAlign: "end",
                          color: "rgb(83 91 97)",
                          paddingRight: "8px",
                        }}
                        // className="w-1/4 text-end text-[#535b61] pr-2"
                      >
                        $215
                      </td>
                    </tr>
                    <tr
                      style={{
                        border: "solid 1px",
                        // borderWidth: "1px",
                        borderColor: "rgb(158 158 158)",
                      }}
                      // className="border border-gray-500 "
                    >
                      <td
                        style={{
                          width: "75%",
                          fontWeight: "bold",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          color: "rgb(83 91 97)",
                          fontSize: "14px",
                          textAlign: "end",
                        }}
                        // className="w-3/4 font-bold text-end py-2 text-[#535b61] text-sm"
                      >
                        Total Amount :
                      </td>
                      <td
                        style={{
                          width: "25px",
                          textAlign: "end",
                          color: "rgb(83 91 97)",
                          paddingRight: "8px",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        }}
                        // className="w-1/4 text-end py-2 text-[#535b61] pr-2"
                      >
                        $1195.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4
                style={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                  paddingTop: "12px",
                  color: "rgb(12 47 84)",
                  fontSize: "18px",
                }}
                // className="font-bold mb-2 pt-3 text-[#0c2f54] text-lg"
              >
                Important Instructions
              </h4>
              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: "24px",
                  fontSize: "14px",
                  color: "rgb(83 91 97)",
                }}
                // className=" list-disc pl-6 mb-2 font-sans text-sm text-[#535b61]"
              >
                <li
                  style={{ paddingBottom: "4px" }}
                  // className="pb-1"
                >
                  One of the passengers in an e-ticket should carry proof of
                  identification during the train journey.
                </li>
                <li
                  style={{ paddingBottom: "4px" }}
                  //  className="pb-1"
                >
                  The input for the proof of identity in case of
                  cancellation/partial cancellation is also not required now.
                </li>
                <li
                  style={{ paddingBottom: "4px" }}
                  // className="pb-3"
                >
                  The passenger should also carry the Electronic Reservation
                  Slip (ERS) during the train journey failing which a penalty of
                  $10 will be charged by the TTE/Conductor Guard.
                </li>
              </ul>

              <hr />

              <p
                style={{
                  textAlign: "center",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                // className="text-center py-3"
              >
                <span
                  style={{
                    color: "rgb(21 22 22)",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  //  className="text-[#151616] font-bold text-lg"
                >
                  Booking Baba
                </span>
                <br />
                <span
                  style={{ color: "rgb(21 22 22)", fontSize: "14px" }}
                  //  className="text-[#151616]  text-sm"
                >
                  4th Floor, Plot No.22, Above Public Park, 145 Murphy Canyon
                  Rd,
                  <br />
                  Suite 100-18, San Diego CA 2028.
                </span>
              </p>

              <hr />

              <p
                style={{
                  textAlign: "center",
                  paddingTop: "8px",
                  fontSize: "14px",
                }}
                // className="text-center text-secondary pt-2 text-sm"
              >
                NOTE: This is a computer-generated receipt and does not require
                a physical signature.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-5 bg-white mb-2 m">
        <div className="btn-group btn-group-sm">
          {/* <button
            onClick={printContent}
            className="btn btn-light border text-black-50 shadow-none text-[#151616]"
          >
            <a className="p-4">Print</a>
          </button> */}
          <BBButton
            // href="javascript:window.print()"
            onClick={printContent}
            className="btn bg-gray-200 w-fit text-gray-800 border border-gray-400 px-4 py-2 shadow-sm "
          >
            <i className="fa fa-print "></i> Print
          </BBButton>

          {/* <a
                  href=""
                  // className="btn btn-light border text-black-50 shadow-none"
                >
                  <a className=""></a> Download
                </a> */}
        </div>
      </div>
    </div>
  );
}

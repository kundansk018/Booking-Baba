"use client";
import React from "react";
import { useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import FilterPage from "../page";
// import FilterPage from '../new1/page';
export default function page() {
  const TABLE_HEAD = ["Train Name", "Departure", "Duration", "Arrival", ""];
  const TABLE_ROWS = [
    {
      trainName: "Ashram Express",
      departure: "12:00",
      duration: "18h 55m",
      arrival: "18:15 PM",
      //   price: "$250",
    },
    {
      trainName: "PBR Express",
      departure: "11:00",
      duration: "18h 55m",
      arrival: "18:15 PM",
      //   price: "$550",
    },
    {
      trainName: "Okha Rajdhani",
      departure: "01:00",
      duration: "18h 55m",
      arrival: "18:15 PM",
      //   price: "$350",
    },
    {
      trainName: "Bhopal Express",
      departure: "05:00",
      duration: "18h 55m",
      arrival: "18:15 PM",
      //   price: "$650",
    },
    {
      trainName: "Intercity Express",
      departure: "05:00",
      duration: "18h 55m",
      arrival: "18:15 PM",
      //   price: "$850",
    },
  ];

  return (
    <Card className="overflow-scroll h-full w-full flex-row gap-10 ">
      <div className="">
        <FilterPage />
      </div>
      <div>
        <div className="text-2xl font-sans serif fontSize-25px mb-4 pl-10 pt-3 text-center ">
          Mumbai To Pune{" "}
        </div>
        <table className="mx-auto border border-gray-300 w-[130%]  table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ trainName, departure, duration, arrival }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={trainName}>
                    <td className={classes}>
                      <Typography variant="small">
                        <span
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "16px",
                          }}
                        >
                          {trainName}
                        </span>
                        <br />
                        <span style={{ color: "#8e9a9d !important" }}>
                          12916
                        </span>
                      </Typography>
                    </td>
                    <td className={`${classes}`}>
                      <Typography variant="small">
                        <span
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          {departure}
                        </span>
                        <br />
                        <span style={{ fontSize: "12px" }}>
                          {" "}
                          Delhi Jn <br />
                          15 June{" "}
                        </span>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small">
                        <span style={{ fontSize: "13px", color: "#535B61 " }}>
                          {" "}
                          {duration}{" "}
                        </span>
                        <br />
                        <span style={{ fontSize: "12px", color: "#535B61" }}>
                          {" "}
                          35 Stops{" "}
                        </span>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small">
                        <span style={{ fontSize: "18px" }}> {arrival}</span>
                        <br />
                        <span style={{ fontSize: "12px", color: "#535B61" }}>
                          Ahmedabad Jn <br />
                          16 Jun{" "}
                        </span>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small">{""}</Typography>
                      <Button
                        variant="outlined"
                        // className="w-22"
                        style={{ color: "#0071cc;", fontSize: "14px" }}
                      >
                        <span
                          style={{ fontFamily: "sans-serif", fontSize: "11px" }}
                        >
                          {" "}
                          Check Availability{" "}
                        </span>
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

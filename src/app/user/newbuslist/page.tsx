"use client"
import React from 'react'
import { useState } from 'react';
import { Button, Card, Typography } from "@material-tailwind/react";
// import FilterPage from '../new1/page';
export default function page() {
    const TABLE_HEAD = ["Operators", "Departure", "Duration", "Arrival", "Price", ""];
    const TABLE_ROWS = [

        {
            operators: "BJ Tour & Travels",
            departure: "12:00",
            duration: "06h 32 m",
            arrival: "05.12 m",
            price: "$250"
        },
        {
            operators: "Shivneri Travels",
            departure: "11:00",
            duration: "03h 32 m",
            arrival: "08.12 m",
            price: "$550"
        },
        {
            operators: "Chhatrapti Travels",
            departure: "01:00",
            duration: "08h 32 m",
            arrival: "05.12 m",
            price: "$350"
        },
        {
            operators: "Akash Travels",
            departure: "05:00",
            duration: "10h 32 m",
            arrival: "11.12 m",
            price: "$650"
        },
        {
            operators: " Ajit Travels",
            departure: "05:00",
            duration: "02h 32 m",
            arrival: "08.12 m",
            price: "$850"
        },
    ];



    return (

        <Card className="overflow-scroll h-full w-full ">
            {/* 
            <div className='p-5'>
                <FilterPage />
            </div> */}
            {/* flex flex-row gap-10 */}
            <div>
                <h1 className="text-2xl font-bold mb-4 pl-10 text-center "  >Mumbai To Pune  </h1>
                <table className="mx-auto border border-gray-300 w-[70%] min-w-max table-auto text-left">

                    <thead>

                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
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

                        {TABLE_ROWS.map(({ operators, departure, duration, arrival, price }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";


                            return (

                                <tr key={operators}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {operators}
                                            <br />
                                            Ac sleeper
                                        </Typography>
                                    </td>
                                    <td className={`${classes} bg-blue-gray-50/50`}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {departure}
                                            <br />
                                            Mumbai
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {duration}
                                            <br />
                                            12 Stops
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {arrival}
                                            <br />
                                            Pune
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal pl-10">
                                            {price}
                                        </Typography>
                                        <Button variant="outlined" size='sm'>Select Seats</Button>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </Card>

    );




}



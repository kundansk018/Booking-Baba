"use client"
import BBButton from '@/app/components/BBButton';
import BBInput from '@/app/components/BBInput';
import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react'

export default function busticket() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [contactno, setContactNo] = useState("");
    const [busname, setBusname] = useState<String>("");
    const [busnumber, setBusNumber] = useState<String>("");
    const [ticketprice, setTicketPrice] = useState<string>("");
    const [bookingseats, setBookingSeats] = useState("");
    const [travelagencyname, setTravelAgencyName] = useState("");
    const [pickUpPoint, setPickUpPoint] = useState("");
    const [from, setFrom] = useState<any>();


    return (
        <div className="bg-white h-[550px] mt-5 p-5 m-auto w-[90%] justify-center rounded-lg">
            <div className="flex items-center justify-center ">
                <Typography className="  font-castoro text-black" variant="h3" color="black">
                    BUS TICKET
                </Typography>
            </div>
            <div className="h-[450px] overflow-y-scroll mt-1">
                <div className="flex  flex-wrap justify-center mx-6 mt-1 ">
                    <div className="flex  flex-col mx-5 w-[300px] ">
                        <BBInput
                            containerProps={{ className: "mb-3" }}
                            label="email"
                            value={email + ""}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <BBInput
                            containerProps={{ className: "mb-3" }}
                            label="password"
                            value={password + ""}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <BBInput
                            containerProps={{ className: "mb-3" }}
                            label="name"
                            value={name + ""}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <BBInput
                            containerProps={{ className: "mb-3" }}
                            label="Contact no"
                            value={contactno + ""}
                            onChange={(e) => setContactNo(e.target.value)}
                        />
                        <BBInput
                            containerProps={{ className: "mb-3" }}
                            label="BusNumber"
                            value={busnumber + ""}
                            onChange={(e) => setBusNumber(e.target.value)}
                        />
                        <BBInput
                            containerProps={{ className: "mb-3" }}
                            label="Ticket Prise"
                            value={ticketprice + ""}
                            onChange={(e) => setTicketPrice(e.target.value)}
                        />
                        <BBInput
                            containerProps={{ className: "mb-3" }}
                            label="Booking Seats"
                            value={bookingseats + ""}
                            onChange={(e) => setBookingSeats(e.target.value)}
                        />
                        <BBInput
                            containerProps={{ className: "mb-3" }}
                            label="travel Agency Name"
                            value={travelagencyname + ""}
                            onChange={(e) => setTravelAgencyName(e.target.value)}
                        />
                        <BBInput
                            containerProps={{ className: "mb-3" }}
                            label="Pickup Point"
                            value={pickUpPoint + ""}
                            onChange={(e) => setPickUpPoint(e.target.value)}
                        />
                        <BBInput
                            containerProps={{ className: "mb-3" }}
                            label="BusName"
                            value={busname + ""}
                            onChange={(e) => setBusname(e.target.value)}
                        />

                        <BBButton
                            label="Book Ticket"
                            onClick={() => { "BUS TICKET" }}
                            size="sm"
                            className=""
                            color=""

                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

"use client";
import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";

export default function trainticket() {
  const [email, setEmail] = useState<any>("");
  const [name, setName] = useState<any>("");
  const [contactno, setContactNo] = useState<number>();

  return (
    <div className="bg-white h-[550px] mt-5 p-5 m-auto w-[90%] justify-center rounded-lg">
      <div className="flex items-center justify-center ">
        <Typography
          className="  font-castoro text-black"
          variant="h3"
          color="black"
        >
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

            <BBButton
              label="Book Ticket"
              onClick={() => {
                "Train TICKET";
              }}
              size="sm"
              className=""
              color=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

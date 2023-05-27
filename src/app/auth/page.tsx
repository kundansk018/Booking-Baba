"use client";
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { BanknotesIcon } from "@heroicons/react/24/solid";

import SignUp from "./SignUp";
import Login from "./Login";

export default function page() {
  const [type, setType] = React.useState("login");

  return (
    <div className="flex justify-center items-center py-[20px]">
      <Card className="w-full max-w-[24rem] ">
        <CardHeader
          color="red"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-4 px-4 text-center bg-GreenBlue "
        >
          <div className="mb-2 rounded-full border border-white/10 bg-white/10 p-6 text-white">
            <BanknotesIcon className="h-10 w-10" />
          </div>
          <Typography className="font-castoro" variant="h5" color="white">
            Booking Baba
          </Typography>
        </CardHeader>
        <CardBody>
          <Tabs value={type} className="overflow-visible ">
            <TabsHeader
              className="relative z-0"
              indicatorProps={{
                className: "bg-[#4fb291] shadow-none ",
              }}
            >
              <Tab
                value="login"
                onClick={() => setType("login")}
                className={
                  type === "login"
                    ? "text-white font-bold font-castoro"
                    : "text-black font-bold  font-castoro"
                }
              >
                Log-In
              </Tab>
              <Tab
                value="signup"
                className={
                  type === "signup"
                    ? "text-white font-bold font-castoro"
                    : "text-black font-bold font-castoro"
                }
                onClick={() => setType("signup")}
              >
                Sign Up
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-hidden"
              animate={{
                initial: {
                  x: type === "login" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "login" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="login" className="p-0">
                <Login />
              </TabPanel>
              <TabPanel value="signup" className="p-0">
                <SignUp />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

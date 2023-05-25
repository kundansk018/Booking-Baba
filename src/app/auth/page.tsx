"use client";
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Radio,
  CardFooter,
} from "@material-tailwind/react";

import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import Input from "../components/BBInput";
import SignUp from "./SignUp";
import Login from "./Login";
import { test } from "node:test";

export default function page() {
  const [type, setType] = React.useState("login");
  // const [cardNumber, setCardNumber] = React.useState("");
  // const [cardExpires, setCardExpires] = React.useState("");
  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-[24rem]">
        <CardHeader
          color="red"

          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
        >
          <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
            <BanknotesIcon className="h-10 w-10" />
          </div>
          <Typography variant="h5" color="white">
            Booking Baba
          </Typography>
        </CardHeader>
        <CardBody>
          <Tabs value={type} className="overflow-visible ">
            <TabsHeader className="relative z-0 bg-green ">
              <Tab style={{ color: "green" }} value="login" onClick={() => setType("login")} >
                Log In
              </Tab>
              <Tab value="signup" onClick={() => setType("signup")}>
                Sign Up
              </Tab>
            </TabsHeader>
            <TabsBody style={{ overflow: "hidden" }}>
              <TabPanel value="login" className="p-0">
                <Login />
              </TabPanel>
              <TabPanel value="signup" className="p-0" >
                <SignUp />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
        <CardFooter>
          <Button className="mt-0" fullWidth style={{ color: "black", backgroundColor: "green" }}>Login</Button>
        </CardFooter>

      </Card>
    </div>
  );
}

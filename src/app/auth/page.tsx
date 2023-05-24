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
} from "@material-tailwind/react";

import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import Input from "../components/BBInput";
import SignUp from "./SignUp";
import Login from "./Login";

export default function page() {
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");
  return (
    <div className="flex justify-center items-center py-[20px]">
      <Card className="w-full max-w-[24rem]">
        <CardHeader
          color="blue"
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
              <Tab value="card" onClick={() => setType("card")}>
                Log In
              </Tab>
              <Tab value="paypal" onClick={() => setType("paypal")}>
                Sign Up
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-visible"
              animate={{
                initial: {
                  x: type === "card" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "card" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="card" className="p-0">
                <Login />
              </TabPanel>
              <TabPanel value="paypal" className="p-0">
                <SignUp />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

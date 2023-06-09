"use client";
import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import validator from "validator";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { error } from "console";
import React, { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { login, reset } from "@/redux/action/user";
import { useSelector } from "react-redux";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const userData: any = useSelector((state: any) => state.user.resetPassword);
  console.log("Reset Password data : ", userData);

  const forgetpwd = () => {
    let data = {
      email: email,
    };
    console.log("form data", email);

    if (!validator.isEmail(email)) {
      setError("*Enter valid email Address");
    } else {
      dispatch(reset(data));
    }

  };

  return (
    <div className="flex justify-center items-center py-[10px]">
      <Card className="w-full m-20 max-w-[24rem]">
        <CardHeader className=" m-0 p-10 rounded-b-none place-items-center bg-GreenBlue">
          <Typography className="font-castoro text-white " variant="">
            Forget password
          </Typography>
        </CardHeader>
        <CardBody className="my-5">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Email Id *
          </Typography>
          <BBInput
            type="email"
            label="Email Details"
            value={email}
            onChange={(e) => {
              setError("");
              setEmail(e.target.value);
            }}
          />
          <p className="text-red-500">{error}</p>
        </CardBody>

        <BBButton
          color=""
          label="send mail"
          size="lg"
          onClick={() => forgetpwd()}
          className=" m-0 p-5 rounded-t-none place-items-center bg-GreenBlue"
        />
      </Card>
    </div>
  );
};

export default ResetPassword;

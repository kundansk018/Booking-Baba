"use client";
import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import validator from "validator";
import bus2 from "../../../images/Buses/carousel/bus2.png";
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
import Image from "next/image";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const router: any = useRouter();

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
    <div className="flex justify-center items-center py-[5px]">
      <Card className="w-full m-10 max-w-[24rem]">
        {/* <CardHeader className=" m-0 p-2 rounded-b-none place-items-center bg-GreenBlue">
          <Typography className="font-castoro text-white " variant="">
            BOOKING BABA
          </Typography>
        </CardHeader> */}

        <CardBody>
          <Typography className="font-castoro text-black " variant="">
            Forget password
          </Typography>
          <img
            src="https://imgproxy.epicpxls.com/mtuVm01fSxpp2DIr9Fi28z5u5BaB3P2zRm56G20M48Q/rs:fill:409:307:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by9hN2ZmNTZi/ZTM0NDAzNWYwODQ3/MTliOGIwZmI3OGY1/ZA.jpg"
            alt="sdvv"
            height={250}
            width={250}
            className=""
          ></img>
        </CardBody>
        <Typography
          className="font-castoro flex justify-center text-black "
          variant=""
        >
          <p> Please Enter Registered email </p>
        </Typography>
        <CardFooter className="">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-medium"
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
        </CardFooter>
        <div className="flex justify-around">
          <BBButton
            color=""
            label="Back to login"
            size="lg"
            onClick={() => router.push("/auth")}
            className=" m-0 p-3 w-[50%] rounded-t-none place-items-center bg-GreenBlue hover:bg-blackblue"
          />

          <BBButton
            color=""
            label="send mail"
            size="lg"
            onClick={() => forgetpwd()}
            className=" m-0 p-3 w-[50%] rounded-t-none place-items-center bg-GreenBlue hover:bg-blackblue"
          />
        </div>
      </Card>
    </div>
  );
};

export default ResetPassword;

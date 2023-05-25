import {
  Button,
  CardFooter,
  Checkbox,
  Input,
  Radio,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import BBInput from "../components/BBInput";
import BBButton from "../components/BBButton";
import BBTypography from "../components/BBTypography";
import Link from "next/link";

export default function Login() {
  return (
    <form className="mt-6  flex flex-col gap-4  font-signika">
      <div className="">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium h-[30%] font-signika"
        >
          Email Id
        </Typography>
        <BBInput
          type="email"
          label="Email Details"
          value={""}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div className="mt-1">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium font-signika"
        >
          Password
        </Typography>
        <BBInput
          type="password"
          label="Enter Password"
          value={""}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div className="flex flex-row justify-between items-center font-signika">
        <Checkbox label="REMEMBER ME" color="blue" className=" left-0" />
        <a
          href="#"
          className="font-medium text-blue-500 transition-colors hover:text-blue-700"
        >
          Forget Password?
        </a>
      </div>

      <BBButton
        color=""
        label="Login"
        size="lg"
        onClick={() => alert("Login Succesfully")}
        className="relative h-12 bg-blackblue my-0"
      />
      <Typography variant="small" className="flex justify-center my-3 font-signika">
        Don&apos;t have an account?
        <Typography
          as="a"
          href="#signup"
          variant="small"
          color="blue"
          className="ml-1 font-bold"
        
        >
          Sign up
        </Typography>
      </Typography>
    </form>
  );
}

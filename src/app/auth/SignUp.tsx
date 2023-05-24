import React from "react";
import BBInput from "../components/BBInput";

import { Button, Typography, Radio } from "@material-tailwind/react";

export default function () {
  return (
    <>
      <form className="mt-6 flex flex-col gap-3">
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Personal Details
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <BBInput
            label="First Name"
            containerProps={{ className: "min-w-[30px]" }}
            value={""}
            onChange={(e) => console.log(e.target.value)}
          />
          <BBInput
            label="Last Name"
            containerProps={{ className: "min-w-[30px]" }}
            value="name"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div>
          <BBInput
            type="text"
            label="Mobile Number"
            value="name"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div>
          <BBInput
            type="email"
            label="Email "
            value="name"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div>
          <BBInput
            type="date"
            label="Birth-Date "
            value="name"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-0 font-medium"
          >
            Gender
          </Typography>
          <Radio label="Male" name="r1" className="colors-red" />
          <Radio label="Female" name="r1" color="green" />
        </div>
        <div>
          <BBInput
            type="password"
            label="Password "
            value={""}
            color="orange"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <Button size="lg" color="blue" className="relative h-12 bg-blue">
          Sign Up
        </Button>
      </form>
    </>
  );
}

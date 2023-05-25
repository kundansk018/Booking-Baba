import React from "react";
import BBInput from "../components/BBInput";

import { Button, Radio } from "@material-tailwind/react";
import BBTypography from "../components/BBTypography";
import BBButton from "../components/BBButton";

export default function () {
  return (
    <>
      <form className="mt-0 flex flex-col gap-3">
        <div>
          <BBTypography
            variant="small"
            color="blue-gray"
            className="mb-0 font-medium"
            text="Personal Details"
          />
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
            value=""
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <BBInput
            label="Mobile Number "
            containerProps={{ className: "min-w-[30px]" }}
            value={""}
            onChange={(e) => console.log(e.target.value)}
          />
          <BBInput
            type="date"
            label="Birth-Date"
            containerProps={{ className: "min-w-[30px]" }}
            value={""}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div>
          <BBInput
            type="email"
            label="Email Address "
            value={""}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <BBInput
            containerProps={{ className: "min-w-[30px]" }}
            type="password"
            label="Password "
            value={""}
            onChange={(e) => console.log(e.target.value)}
          />

          <BBInput
            type="password"
            label="Confirm-Password "
            containerProps={{ className: "min-w-[30px]" }}
            value={""}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div>
          <BBTypography
            variant="small"
            color="blue-gray"
            className="mb-0 font-medium"
            text="Gender"
          />

          <Radio label="Male" name="gender" color="purple" />
          <Radio label="Female" name="gender" color="purple" />
        </div>
        <BBButton
          color=""
          label="Sign Up"
          size="lg"
          onClick={() => alert("Submit btn")}
          className="relative h-12 bg-blackblue"
        />
      </form>
    </>
  );
}

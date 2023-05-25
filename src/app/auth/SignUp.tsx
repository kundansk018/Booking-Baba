import React, { useState } from "react";
import BBInput from "../components/BBInput";

import { Radio } from "@material-tailwind/react";
import BBTypography from "../components/BBTypography";
import BBButton from "../components/BBButton";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const signUpCredential = (e: any) => {
    console.log("called");
    console.log("signup data ", password, confirmPassword);
    if (password === confirmPassword) {
      setConfirmPassword(confirmPassword);
    } else {
      setPasswordError("Password Not Matching..");
      console.log(passwordError);
    }
  };

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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <BBInput
            label="Last Name"
            containerProps={{ className: "min-w-[30px]" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <BBInput
            label="Mobile Number "
            containerProps={{ className: "min-w-[30px]" }}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <BBInput
            type="date"
            label="Birth-Date"
            containerProps={{ className: "min-w-[30px]" }}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div>
          <BBInput
            type="email"
            label="Email Address "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <BBInput
            containerProps={{ className: "min-w-[30px]" }}
            type="password"
            label="Password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <BBInput
            type="password"
            label="Confirm-Password "
            containerProps={{ className: "min-w-[30px]" }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          onClick={signUpCredential}
          className="relative h-12 bg-blackblue"
        />
      </form>
    </>
  );
}

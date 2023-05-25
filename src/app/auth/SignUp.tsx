import React, { useState } from "react";
import BBInput from "../components/BBInput";

import { Radio } from "@material-tailwind/react";
import BBTypography from "../components/BBTypography";
import BBButton from "../components/BBButton";
import BBErrorDialog from "../components/BBErrorDialog";

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
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const [errorDialogMessage, setErrorDialogMessage] = useState([]);

  const signUpCredential = () => {
    let isErrorFound = false;
    let error: any = [];
    if (!firstName || !firstName.trim()) {
      isErrorFound = true;
      error.push("Please enter first name");
    }

    if (!lastName || !lastName.trim()) {
      isErrorFound = true;
      error.push("Please enter last name");
    }

    if (!mobileNumber || !mobileNumber.trim()) {
      isErrorFound = true;
      error.push("Please enter Mobile Number");
    }
    if (!email || !email.trim()) {
      isErrorFound = true;
      error.push("Please enter Email Address");
    }
    if (!birthDate || !birthDate.trim()) {
      isErrorFound = true;
      error.push("Please enter Birthdate");
    }
    if (!password || !password.trim()) {
      isErrorFound = true;
      error.push("Please Enter Password");
    }
    if (!confirmPassword || !confirmPassword.trim()) {
      isErrorFound = true;
      error.push("Please Enter Confirm Password");
    }
    if (password || confirmPassword) {
      isErrorFound = true;
      error.push(
        " Password Not Matching ..!! Password and Confirm-Password Should Be Same"
      );
    }
    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    }
  };

  return (
    <>
      <form className="mt-0 flex flex-col gap-3 font-signika">
        <div>
          <BBTypography
            variant="small"
            color="blue-gray"
<<<<<<< Updated upstream
            className="mb-0 font-medium font-signika"
=======
            className=" font-medium"
>>>>>>> Stashed changes
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
            className="mb-0 font-medium font-signika"
            text="Gender"
          />

          <Radio
            label="Male"
            name="gender"
            color="purple"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Radio
            label="Female"
            name="gender"
            color="purple"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <BBButton
          color=""
          label="Sign Up"
          size="lg"
          onClick={signUpCredential}
          className="relative h-12 bg-blackblue"
        />
      </form>
      <BBErrorDialog
        dialogHeader="Error"
        dialogMessage={errorDialogMessage}
        open={showErrorDialog}
        onOkClick={() => setShowErrorDialog(false)}
      />
    </>
  );
}

"use-client";
import React, { useEffect, useState } from "react";
import BBInput from "../components/BBInput";

import { Radio } from "@material-tailwind/react";
import BBTypography from "../components/BBTypography";
import BBButton from "../components/BBButton";
import BBErrorDialog from "../components/BBErrorDialog";
import { useAppDispatch } from "@/redux/store";
import { signup } from "@/redux/action/user";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function SignUp() {
  const dispatch = useAppDispatch();
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

  const router = useRouter();

  const userData: any = useSelector((state: any) => state.user.createdUser);
  console.log("userData is ..", userData);

  useEffect(() => {
    if (userData) {
      router.push("/dashboard");
    }
  }, [userData]);

  const signUpCredential = () => {
    let data = {
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      birthDate: birthDate,
      email: email,
      password: password,
    };
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
    if (
      !email.includes("@") ||
      (!email.includes(".com") && !email.includes(".in"))
    ) {
      isErrorFound = true;
      error.push("Plz Enter valid email address");
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
    if (password !== confirmPassword) {
      isErrorFound = true;
      error.push(
        " Password Not Matching ..!! Password and Confirm-Password Should Be Same"
      );
    }
    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    } else {
      dispatch(signup(data));
    }
  };

  return (
    <>
      <form className="font-signika mt-0 flex flex-col gap-2 ">
        {/* <div>
          <BBTypography
            variant="small"
            color="blue-gray"
            className=" font-medium"
            text="Personal Details"
          />
        </div> */}
        <div className="flex items-center gap-2 mt-2">
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
        <div className="flex items-center gap-1">
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
            className="font-signika mb-0 font-medium"
            text="Gender"
          />

          <Radio
            label="Male"
            name="gender"
            color="blue"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Radio
            label="Female"
            name="gender"
            color="blue"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <BBButton
          color=""
          label="Sign Up"
          size="lg"
          onClick={signUpCredential}
          className="relative h-12 bg-blackblue hover:bg-GreenBlue"
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

export default SignUp;

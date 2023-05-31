"use client";

import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import "../../styles/hotel.css";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import BBErrorDialog from "@/app/components/BBErrorDialog";
import { addTrain } from "@/redux/action/trainAction";

export default function AddTrain() {
  const [trainNo, setTrainNo] = useState<string>("");
  const [trainName, setTrainName] = useState<string>("");
  const [from_Stn, setFrom_Stn] = useState<string>("");
  const [to_Stn, setTo_Stn] = useState<string>("");
  const [contactno, setContactNo] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fare, setFare] = useState<string>("");
  const [seats, setSeats] = useState<string>("");
  const [coach, setCoach] = useState<any>("");
  //const [type, setType] = useState<string>("");

  const dispatch = useAppDispatch();
  const [errorDialogMessage, setErrorDialogMessage] = useState([]);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const router = useRouter();

  //name type adress location  services wifi dinner kunch swiimmingparling gym kids
  const trainData: any = useSelector((state: any) => state.train.trainDetails);
  console.log("Train data is ..", trainData);

  // useEffect(() => {
  //   if (trainData) {
  //     router.push("/train");
  //   }
  // }, [trainData]);

  const addTrainDetails = () => {
    let data = {
      trainNo: trainNo,
      trainname: trainName,
      from_Stn: from_Stn,
      to_Stn: to_Stn,
      contactno: contactno,
      email: email,
      fare: fare,
      seats: seats,
      coach: coach,
    };

    let isErrorFound = false;
    let error: any = [];
    if (!trainName || !trainName.trim()) {
      isErrorFound = true;
      error.push("Please enter Hotel Name");
    }

    if (!contactno || !contactno.trim()) {
      isErrorFound = true;
      error.push("Please enter Contact No");
    }

    if (!email || !email.trim()) {
      isErrorFound = true;
      error.push("Please enter valid email address");
    }
    if (!from_Stn || !from_Stn.trim()) {
      isErrorFound = true;
      error.push("Please enter valid station Name");
    }
    if (!to_Stn || !to_Stn.trim()) {
      isErrorFound = true;
      error.push("Please enter valid station Name");
    }
    if (!seats || !seats.trim()) {
      isErrorFound = true;
      error.push("Please enter Seats");
    }
    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    } else {
      dispatch(addTrain(data));
    }
  };

  return (
    <>
      <div className="bg-white h-full mt-5 p-5 m-auto w-[70%] justify-center rounded-lg">
        <div className="flex justify-center  text-3xl">
          <h1>Add Train</h1>
        </div>
        <div className="flex flex-row justify-center m-6">
          <div className="flex  flex-col mx-5 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Train No"
              value={trainNo}
              onChange={(e) => setTrainNo(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Train Name"
              value={trainName}
              onChange={(e) => setTrainName(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="Contact No"
              value={contactno}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>
          {/* <div>
            <BBTypography
              variant="small"
              color="blue-gray"
              className="font-signika mb-0 font-medium"
              text="Type"
            />
            <Radio
              label="AC"
              name="type"
              color="blue"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <Radio
              label="Non -AC"
              name="type"
              color="blue"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div> */}
          <div className="flex  flex-col mx-5 w-[300px]">
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="From Station"
              value={from_Stn}
              onChange={(e) => setFrom_Stn(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="To Station"
              value={to_Stn}
              onChange={(e) => setTo_Stn(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="No of Coaches"
              value={coach}
              onChange={(e) => setCoach(e.target.value)}
            />
          </div>

          <div className="flex  flex-col mx-5 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Fare"
              value={fare}
              onChange={(e) => setFare(e.target.value)}
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="Seats"
              value={seats + ""}
              onChange={(e) => setSeats(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <BBButton
            color=""
            label="ADD "
            size="lg"
            onClick={addTrainDetails}
            className="h-12 bg-blackblue w-[500px] "
          />
        </div>
      </div>

      <BBErrorDialog
        dialogHeader="Error"
        dialogMessage={errorDialogMessage}
        open={showErrorDialog}
        onOkClick={() => setShowErrorDialog(false)}
      />
    </>
  );
}

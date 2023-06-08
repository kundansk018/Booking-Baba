"use client";

import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import "../../styles/hotel.css";

import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import BBErrorDialog from "@/app/components/BBErrorDialog";
import { addTrain } from "@/redux/action/trainAction";
import BBDropdown from "@/app/components/BBDropdown";

export default function AddTrain() {
  const [trainNo, setTrainNo] = useState<string>("");
  const [trainName, setTrainName] = useState<string>("");
  const [from_Stn, setFrom_Stn] = useState<string>("");
  const [to_Stn, setTo_Stn] = useState<string>("");
  const [fare, setFare] = useState<string>("");
  const [seats, setSeats] = useState<string>("");
  const [coach, setCoach] = useState<any>("");
  const [depTime, setDepTime] = useState<string>("");
  const [arrivalTime, setArrivalTime] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [classType, setClassType] = useState<string>("");
  const [trainType, setTrainType] = useState<string>("");
  const [operationDays, setOperationDays] = useState<string>("");
  const [trainRoute, setTrainRoute] = useState<string>("");
  const [trainDesc, setTrainDesc] = useState<string>("");
  const [trainImage, setTrainImage] = useState<string>("");

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
      trainName: trainName,
      from_Stn: from_Stn,
      to_Stn: to_Stn,
      depTime: depTime,
      arrivalTime: arrivalTime,
      fare: fare,
      seats: seats,
      coach: coach,
      duration: duration,
      classType: classType,
      trainType: trainType,
      operationDays: operationDays,
      trainRoute: trainRoute,
      trainDesc: trainDesc,
      trainImage: trainImage,
    };

    let isErrorFound = false;
    let error: any = [];
    if (!trainName || !trainName.trim()) {
      isErrorFound = true;
      error.push("Please enter Train Name");
    }

    if (!arrivalTime || !arrivalTime.trim()) {
      isErrorFound = true;
      error.push("Please enter valid Arrival Time");
    }

    if (!depTime || !depTime.trim()) {
      isErrorFound = true;
      error.push("Please enter valid Departure Time");
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
      router.push("/train");
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
              type="time"
              label="Arrival Time"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="time"
              label="Departure Time"
              value={depTime}
              onChange={(e) => setDepTime(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="text"
              label="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          <div className="flex  flex-col mx-5 w-[300px]">
            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Mumbai" },
                { label: "Pune" },
                { label: "Nashik" },
              ]}
              value={from_Stn}
              onPress={(value: any) => {
                setFrom_Stn(value);
              }}
              label="Source Station"
            />

            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Mumbai" },
                { label: "Pune" },
                { label: "Nashik" },
              ]}
              value={to_Stn}
              onPress={(value: any) => {
                setTo_Stn(value);
              }}
              label="Destination Station"
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              label="No of Coaches"
              value={coach}
              onChange={(e) => setCoach(e.target.value)}
            />

            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Mumbai" },
                { label: "Pune" },
                { label: "Nashik" },
              ]}
              value={trainRoute}
              onPress={(value: any) => {
                setTrainRoute(value);
              }}
              label="Train Route"
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              type="text"
              label="Train Description"
              value={trainDesc}
              onChange={(e) => setTrainDesc(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="file"
              label="Train Image"
              value={trainImage}
              onChange={(e) => setTrainImage(e.target.value)}
            />
          </div>

          <div className="flex  flex-col mx-5 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
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
            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Economy" },
                { label: "Business" },
                { label: "First Class" },
              ]}
              value={classType}
              onPress={(value: any) => {
                setClassType(value);
              }}
              label="Class Types"
            />

            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Express" },
                { label: "Superfast" },
                { label: "Local" },
              ]}
              value={trainType}
              onPress={(value: any) => {
                setTrainType(value);
              }}
              label="Train Type"
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              type="text"
              label="Operation Days"
              value={operationDays}
              onChange={(e) => setOperationDays(e.target.value)}
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

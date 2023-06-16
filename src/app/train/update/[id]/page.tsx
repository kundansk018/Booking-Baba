"use client";

import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getTrainById, updateTrainAction } from "@/redux/action/trainAction";
import BBDropdown from "@/app/components/BBDropdown";

export default function updateTrain({ params }: any) {
  const [trainNo, setTrainNo] = useState<string>("");
  const [trainName, setTrainName] = useState<string>("");
  const [from_Stn, setFrom_Stn] = useState<string>("");
  const [to_Stn, setTo_Stn] = useState<string>("");
  const [fare, setFare] = useState<any>("");
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
  const [trainImage, setTrainImage] = useState<any>("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const trainData: any = useSelector((state: any) => state.train.getTrainById);
  console.log("Train data is in update page ..", trainData);
  console.log("id", params.id);

  useEffect(() => {
    dispatch(getTrainById(params.id));
  }, []);

  useEffect(() => {
    let train_Data = trainData?.data;
    if (train_Data) {
      const {
        trainNo,
        trainName,
        from_Stn,
        to_Stn,
        depTime,
        arrivalTime,
        fare,
        seats,
        coach,
        duration,
        classType,
        trainType,
        operationDays,
        trainRoute,
        trainDesc,
        //trainImage,
      } = train_Data;
      setTrainNo(trainNo);
      setTrainName(trainName);
      setFrom_Stn(from_Stn);
      setTo_Stn(to_Stn);
      setFare(fare);
      setSeats(seats);
      setCoach(coach);
      setDepTime(depTime);
      setArrivalTime(arrivalTime);
      setDuration(duration);
      setClassType(classType);
      setTrainType(trainType);
      setOperationDays(operationDays);
      setTrainRoute(trainRoute);
      setTrainDesc(trainDesc);
      //setTrainImage(trainImage);
    }
  }, [trainData]);

  console.log("trainNo", trainNo);

  const updateTrain = () => {
    let data = {
      _id: params.id,
      trainNo,
      trainName,
      from_Stn,
      to_Stn,
      depTime,
      arrivalTime,
      fare,
      seats,
      coach,
      duration,
      classType,
      trainType,
      operationDays,
      trainRoute,
      trainDesc,
    };
    dispatch(updateTrainAction(data));
    router.push("/train");
  };

  return (
    <>
      <div className="bg-white h-full mt-5 p-5 m-auto w-[70%] justify-center rounded-lg">
        <div className="flex justify-center  text-3xl">
          <h1>Update Train</h1>
        </div>
        <div className="flex flex-row justify-center m-6">
          <div className="flex  flex-col mx-5 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
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
                { label: "Nagpur" },
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
                { label: "Nagpur" },
              ]}
              value={to_Stn}
              onPress={(value: any) => {
                setTo_Stn(value);
              }}
              label="Destination Station"
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="No of Coaches"
              value={coach}
              onChange={(e) => setCoach(e.target.value)}
            />
            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Mumbai To Nashik" },
                { label: "Mumbai To Nagpur" },
                { label: "Mumbai To Pune" },
                { label: "Pune To Nagpur" },
                { label: "Pune To Mumbai" },
                { label: "Pune To Nashik" },
                { label: "Nashik To Pune" },
                { label: "Nashik To Mumbai" },
                { label: "Nashik To Nagpur" },
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
              onChange={(e) => setTrainImage(e?.target.files[0])}
            />
          </div>

          <div className="flex  flex-col mx-5 w-[300px] ">
            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Economy-140" },
                { label: "Business-250" },
                { label: "First Class-400" },
              ]}
              value={fare}
              onPress={(value: any) => {
                setFare(value);
              }}
              label="Fare"
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="Seats"
              value={seats + ""}
              onChange={(e) => setSeats(e.target.value)}
            />
            <BBDropdown
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
            <br />
            <BBDropdown
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
            <br />

            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Daily" },
                { label: "Mon to Fri" },
                { label: "Mon To Sat" },
              ]}
              value={trainType}
              onPress={(value: any) => {
                setOperationDays(value);
              }}
              label="Operational Days"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <BBButton
            color=""
            label="Update "
            size="lg"
            onClick={() => updateTrain()}
            className="h-12 bg-blackblue hover:bg-GreenBlue w-[500px] "
          />
        </div>
      </div>
    </>
  );
}

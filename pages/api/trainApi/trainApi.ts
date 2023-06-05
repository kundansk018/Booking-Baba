import { NextApiRequest, NextApiResponse } from "next";
import getDB from "../connection";
import { ObjectId } from "mongodb";

let db: any = undefined;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  db = await getDB();

  const {
    body,
    query: { action: action },
    method,
    headers,
  } = request;

  switch (action) {
    case "ADD_TRAIN":
      return await addTrain(request, response);

    case "UPDATE_TRAIN":
      return await updateTrain(request, response);

    case "DELETE_TRAIN":
      return await deleteTrain(request, response);

    case "GET_TRAINS":
      return await getTrains(request, response);

    case "GET_TRAIN_BY_ID":
      return await getTrainById(request, response);

    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + action });
  }
}

export async function addTrain(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const trains = await db.collection("Train Details");
  const res = await trains.insertOne(request.body);
  return response.status(200).json({ data: res });
}
export async function updateTrain(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const buses = await db.collection("Train Details");
  const res = await buses.updateOne(
    { _id: new ObjectId(request.body._id) },
    {
      // $set: request.body.data,
      $set: {
        trainNo: request.body.trainNo,
        trainName: request.body.trainName,
        from_Stn: request.body.from_Stn,
        to_Stn: request.body.to_Stn,
        depTime: request.body.depTime,
        arrivalTime: request.body.arrivalTime,
        fare: request.body.fare,
        seats: request.body.seats,
        coach: request.body.coach,
        duration: request.body.duration,
        classType: request.body.classType,
        trainType: request.body.trainType,
        operationDays: request.body.operationDays,
        trainRoute: request.body.trainRoute,
        trainDesc: request.body.trainDesc,
        trainImage: request.body.trainImage,
      },
    }
  );
  console.log("ressssss ", res);
  console.log("ressssss id ", request.body);
  return response.status(200).json({ data: res });
}

export async function deleteTrain(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const trains = await db.collection("Train Details");
  const res = await trains.deleteOne({
    _id: new ObjectId(request.body),
  });
  return response.status(200).json({ data: res });
}

export async function getTrains(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const trains = await db.collection("Train Details");
  const res = await trains.find().toArray();
  console.log("ress ", res);
  return response.status(200).json({ data: res });
}

export async function getTrainById(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const trains = await db.collection("Train Details");
  const res = await trains.findOne({ _id: new ObjectId(request.body._id) });
  return response.status(200).json({ data: res });
}

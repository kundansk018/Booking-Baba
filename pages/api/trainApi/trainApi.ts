import { NextApiRequest, NextApiResponse } from "next";
import getDB from "../connection";

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

    case "GET_TRAINS":
      return await getTrains(request, response);

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

export async function getTrains(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const trains = await db.collection("Train Details");
  const res = await trains.find().toArray();
  console.log("ress ", res);
  return response.status(200).json({ data: res });
}

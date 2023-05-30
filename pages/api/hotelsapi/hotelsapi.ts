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
    case "addHotels":
      return await addhotel(request, response);

    case "getHotels":
      return await gethotel(request, response);

    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + action });
  }
}

export async function addhotel(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const buses = await db.collection("Hotels Details");
  const res = await buses.insertOne(request.body);
  return response.status(200).json({ data: res });
}

export async function gethotel(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const buses = await db.collection("Hotels Details");
  const res = await buses.find().toArray();
  console.log("ress ", res);
  return response.status(200).json({ data: res });
}

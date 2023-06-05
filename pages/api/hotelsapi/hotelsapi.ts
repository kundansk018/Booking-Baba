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
    case "addHotels":
      return await addhotel(request, response);

    case "getHotels":
      return await gethotel(request, response);

    case "updateHotels":
      return await updatehotel(request, response);

    case "getHotelDetails":
      return await getHotelById(request, response);

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
  const hotels = await db.collection("Hotels_Details");
  const res = await hotels.insertOne(request.body);
  return response.status(200).json({ data: res });
}

export async function gethotel(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  const res = await hotels.find().toArray();
  return response.status(200).json({ data: res });
}

export async function getHotelById(request: NextApiRequest, response: NextApiResponse) {
    const hotels = await db.collection("Hotels_Details");
    const res = await hotels.findOne({ _id: new ObjectId(request.body.id) });
    return response.status(200).json({ data: res });
}


export async function updatehotel(request: NextApiRequest, response: NextApiResponse) {
    const hotels = await db.collection("Hotels_Details");
    const res = await hotels.updateOne(
        { _id: new ObjectId(request.body.id) },
        {
            $set: request.body.data
        }
    )
    return response.status(200).json({ data: res });
}


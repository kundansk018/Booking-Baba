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
    case "ADD_BUS":
      return await addBus(request, response);

    case "UPDATE_BUS":
      return await updateBus(request, response);

    case "DELETE_BUS":
      console.log("Action >>>>>>>>>>>>>>>>>>>>>>>>>>>>", request.body);
      return await deleteBus(request, response);

    case "GET_ALL_BUSES":
      return await getAllBuses(request, response);

    case "GET_BUS_BY_ID":
      return await getBusById(request, response);

    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + action });
  }
}

export async function addBus(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const buses = await db.collection("Bus Details");
  const res = await buses.insertOne(request.body);
  return response.status(200).json({ data: res });
}

export async function updateBus(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const buses = await db.collection("Bus Details");
  const res = await buses.updateOne(
    { _id: new ObjectId(request.body._id) },
    {
      //$set: request.body,
      $set: {
        busname: request.body.busname,
        busnumber: request.body.busnumber,
        from: request.body.from,
        to: request.body.to,
        arrivalTime: request.body.arrivalTime,
        arrivalDate: request.body.arrivalDate,
        pickUpPoint: request.body.pickUpPoint,
        departureTime: request.body.departureTime,
        seats: request.body.seats,
        ticketprice: request.body.ticketprice,
        operator: request.body.operator,
        currentStatus: request.body.currentStatus,
        busType: request.body.busType,
      },
    }
  );
  return response.status(200).json({ data: res });
}

export async function deleteBus(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const buses = await db.collection("Bus Details");
  const res = await buses.deleteOne({
    _id: new ObjectId(request.body),
  });
  return response.status(200).json({ data: res });
}

export async function getAllBuses(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const buses = await db.collection("Bus Details");
  const res = await buses.find().toArray();
  return response.status(200).json({ data: res });
}
export async function getBusById(request: NextApiRequest, response: NextApiResponse) {
  const bus = await db.collection("Bus Details");
  const res = await bus.findOne({ _id: new ObjectId(request.body._id) });
  return response.status(200).json({ data: res });
}
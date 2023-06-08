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

    query: { action: action },
  } = request;

  switch (action) {
    case "ADD_BUS":
      return await addBus(request, response);


    case "UPDATE_BUS":
      return await updateBus(request, response);

    case "DELETE_BUS":
      return await deleteBus(request, response);

    case "GET_ALL_BUSES":
      return await getAllBuses(request, response);


    case "SEARCH":
      return await search(request, response);



    // case "GET_BUS":
    //   return await getBus(request, response);


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


export async function search(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { from, to } = request.body;
  const buses = await db.collection("Bus Details");
  const res = await buses.find(from, to).toArray();
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
      // $set: request.body.data,
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
        busstops: request.body.busstops,
        noofstop: request.body.noofstop,
        bookingseats: request.body.bookingseats,
        travelagencyname: request.body.travelagencyname,

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


export async function getBus(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const page: number = parseInt(request.body.page as string) || 1;
  //console.log("page Number", request.body.page);
  const itemsPerPage: number = 3;

  try {
    const startIndex: number = (page - 1) * itemsPerPage;

    const endIndex: number = startIndex + itemsPerPage;

    const items = await db
      .collection("Bus Details")
      .find()
      .skip(startIndex)
      .limit(itemsPerPage)
      .toArray();

    const totalItems: number = await db
      .collection("Bus Details")
      .countDocuments();

    const totalPages: number = Math.ceil(totalItems / itemsPerPage);

    response.status(200).json({
      page,
      totalPages,
      totalItems,
      items,
    });
  } catch (error) {
    console.log("error fetching data from mongodb", error);
    response.status(500).json({ message: "internal server error" });
  }
}


export async function getAllBuses(

  request: NextApiRequest,
  response: NextApiResponse
) {
  const page: number = parseInt(request.body.page as string) || 1;
  //console.log("page Number", request.body.page);
  const itemsPerPage: number = 3;

  try {
    const startIndex: number = (page - 1) * itemsPerPage;

    const endIndex: number = startIndex + itemsPerPage;

    const items = await db
      .collection("Bus Details")
      .find()
      .skip(startIndex)
      .limit(itemsPerPage)
      .toArray();

    const totalItems: number = await db
      .collection("Bus Details")
      .countDocuments();

    const totalPages: number = Math.ceil(totalItems / itemsPerPage);

    response.status(200).json({
      page,
      totalPages,
      totalItems,
      items,
    });
  } catch (error) {
    console.log("error fetching data from mongodb", error);
    response.status(500).json({ message: "internal server error" });
  }
}

export async function getBusById(request: NextApiRequest, response: NextApiResponse) {
  const bus = await db.collection("Bus Details");
  const res = await bus.findOne({ _id: new ObjectId(request.body._id) });
  return response.status(200).json({ data: res });
}

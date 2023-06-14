import { NextApiRequest, NextApiResponse } from "next";
import getDB from "../connection";
import { ObjectId } from "mongodb";

let db: any = undefined;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  db = await getDB();

  switch (request.method) {
    case "POST":
      if (request.query?.action === "ADD_TRAIN") {
        return await addTrain(request, response);
      } else if (request.query?.action === "UPDATE_TRAIN") {
        return await updateTrain(request, response);
      } else if (request.query?.action === "DELETE_TRAIN") {
        return await deleteTrain(request, response);
      } else if (request.query?.action === "GET_TRAINS") {
        return await getTrains(request, response);
      } else if (request.query?.action === "GET_TRAIN_BY_ID") {
        return await getTrainById(request, response);
      } else if (request.query?.action === "SEARCH_TRAINS") {
        return await searchTrains(request, response);
      }

    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + request.method });
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
  const page: number = parseInt(request.body.page as string) || 1;
  //console.log("page Number", request.body.page);
  const itemsPerPage: number = 3;

  try {
    const startIndex: number = (page - 1) * itemsPerPage;

    const endIndex: number = startIndex + itemsPerPage;

    const items = await db
      .collection("Train Details")
      .find()
      .skip(startIndex)
      .limit(itemsPerPage)
      .toArray();

    const totalItems: number = await db
      .collection("Train Details")
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

export async function getTrainById(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const trains = await db.collection("Train Details");
  const res = await trains.findOne({ _id: new ObjectId(request.body._id) });
  return response.status(200).json({ data: res });
}

export async function searchTrains(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const trains = await db.collection("Train Details");
  const res = await trains
    .find({
      $and: [
        {
          from_Stn: { $regex: request.body.from_Stn, $options: "i" },
        },
        {
          to_Stn: { $regex: request.body.to_Stn, $options: "i" },
        },
      ],
    })
    .toArray();
  return response.status(200).json({ data: res });
}

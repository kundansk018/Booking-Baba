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
    case "createUser":
      return await createUser(request, response);

    case "getUser":
      return await getUser(request, response);
    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + action });
  }
}

export async function createUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection("demo");
  const res = await user.insertOne(request.body);
  return response.status(200).json({ data: res });
}

export async function getUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection("demo");
  const res = await user.findOne({ firstName: request.body.firstName });
  return response.status(200).json({ data: res });
}

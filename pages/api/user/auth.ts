import { NextApiRequest, NextApiResponse } from "next";
import getDB from "../connection";

let db: any = undefined;

const USER_COLLECTION = "users";

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

    case "remove":
      return await deleteUser(request, response);

    case "LOGIN":
      return await login(request, response);

    case "RESET":
      return await reset(request, response);

    case "demo":
      return await demo(request, response);

    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + action });
  }
}

export async function demo(req: NextApiRequest, res: NextApiResponse) {
  const user = await db.collection("demo");
  const response = await user.insertOne(req.body);
  return res.status(200).json({ data: response });
}

export async function createUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection(USER_COLLECTION);

  const checkDetails = await user.findOne({
    $or: [
      {
        email: request.body.email,
      },
      {
        mobileNumber: request.body.mobileNumber,
      },
    ],
  });

  if (checkDetails) {
    return response
      .status(400)
      .json({ data: "Email and mobile number Already Exists.." });
  } else {
    const res = await user.insertOne(request.body);
    return response.status(200).json({ data: res });
  }
}

export async function getUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection(USER_COLLECTION);
  const res = await user.findOne({ firstName: request.body.firstName });
  return response.status(200).json({ data: res });
}
export async function deleteUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection(USER_COLLECTION);
  const res = await user.DELETE({});
  return response.status(200).json({ data: res });
}

export async function login(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("datta", {
    email: request.body.email,
    password: request.body.password,
  });
  const login = await db.collection(USER_COLLECTION);
  const res = await login.findOne({
    email: request.body.email,
    password: request.body.password,
  });
  console.log(":::::::::::::::::::>", res);
  if (res.rollType === 1) {
    console.log("admin");
  }
  if (res === null) {
    return response
      .status(401)
      .json({ data: "Email id is not registered. Please Sign up." });
  } else {
    console.log("res in auth.ts", res);
    return response.status(200).json({ data: res });
  }
}

export async function reset(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("data", {
    email: request.body.email,
  });
  const reset = await db.collection(USER_COLLECTION);
  const res = await reset.findOne({
    email: request.body.email,
  });

  console.log(res);
  if (res === null) {
    return response
      .status(401)
      .json({ data: "Email id is not registered. Please Sign up." });
  } else {
    console.log("res in auth.ts", res);
    return response.status(200).json({ data: res });
  }
}

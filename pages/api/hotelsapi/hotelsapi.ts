import { NextApiRequest, NextApiResponse } from "next";
import getDB from "../connection";
import { ObjectId } from "mongodb";
import { parseForm } from "../../lib/parse-form";

let db: any = undefined;

export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  db = await getDB();

  switch (request.method) {
    case "POST":
      if (request.query?.action === "addHotels") {
        return await addhotel(request, response);
      } else if (request.query?.action === "getHotels") {
        return await gethotel(request, response);
      } else if (request.query?.action === "updateHotels") {
        return await updatehotel(request, response);
      } else if (request.query?.action === "getHotelDetails") {
        return await getHotelById(request, response);
      } else if (request.query?.action === "deleteHotel") {
        return await deleteHotelById(request, response);
      }else if(request.query?.action==="searchByHotel"){
      return await serachByName(request,response);
    }else if(request.query?.action==="sort"){
      return await sortHotelBy(request,response);
    }

    default:
      return response
        .status(404)
        .json({ message: "No Action Found For : " + request.method });
  }
}

export async function addhotel(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { fields, files } = await parseForm(request);

  const file = files?.imageUrl;
console.log(file)
  let url =null;
  if(file){
  url= Array.isArray(file)
  ? file.map((f) => f.newFilename)
  : file.newFilename;
  }

  fields.imageUrl = url;
  const hotels = await db.collection("Hotels_Details");
  const res = await hotels.insertOne(fields);
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

export async function getHotelById(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  const res = await hotels.findOne({ _id: new ObjectId(request.body.id) });
  return response.status(200).json({ data: res });
}

export async function updatehotel(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  console.log("Data ", request.body.data);
  const res = await hotels.updateOne(
    { _id: new ObjectId(request.body.id) },
    {
      $set: request.body.data,
    }
  );
  return response.status(200).json({ data: res });
}

export async function deleteHotelById(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const hotels = await db.collection("Hotels_Details");
  const res = await hotels.deleteOne({ _id: new ObjectId(request.body.id) });
  return response.status(200).json({ data: res });
}

export async function serachByName(request:NextApiRequest,response:NextApiResponse){
  const hotels=await db.collection("Hotels_Details");
  let data=request.body.searchKey
  // const res=await hotels.find().sort({hotelname:-1}).toArray()
  const res=await hotels.find({$or:[{hotelname:{'$regex':data, '$options':'i'}},{city:{'$regex':data, '$options':'i'}}]}).toArray();

response.status(200).json({data:res})
}


export async function sortHotelBy(request:NextApiRequest,response:NextApiResponse){
  const hotels=await db.collection("Hotels_Details");
  let {sortType}=request.body
  let res=null;
  if(sortType==="PRICE_LOW"){
   res =await hotels.find().sort({min_order_price:1}).toArray()
  }else if(sortType==="PRICE_HIGH"){
    res =await hotels.find().sort({min_order_price:-1}).toArray()
   }
  
  else{
 res=await hotels.find().toArray()
}
  // const res=await hotels.find().sort({data:-1}).toArray()
  
   response.status(200).json({data:res})
}
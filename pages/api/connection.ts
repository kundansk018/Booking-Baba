import { MongoClient } from "mongodb";

const getDB = async () => {
  const uri =
    //  "mongodb+srv://ajitborgude:Ajit@123@cluster0.vztka2u.mongodb.net/?retryWrites=true&w=majority"
    // "mongodb+srv://yogranipawar:Rani1234@cluster0.qn3szdm.mongodb.net/?retryWrites=true&w=majority";
    "mongodb+srv://adeshphad:adeshphad@booking-baba.oqow5b3.mongodb.net/?retryWrites=true&w=majority";
    // "mongodb+srv://kbsavale:bookingbaba123@cluster0.zzkhcsh.mongodb.net/";
  // "mongodb+srv://jadhavbhushan228:mongo%40123@cluster0.up7udhf.mongodb.net/?retryWrites=true&w=majority";
 

  const options: any = {
    useUnifiedTopology: true,

    useNewUrlParser: true,
  };

  let client, db;

  if (!uri) {
    throw new Error("Connection error..");
  }

  client = new MongoClient(uri);

  await client.connect();

  db = client.db("booking-baba");

  return db;
};

export default getDB;

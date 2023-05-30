import { MongoClient } from "mongodb";

const getDB = async () => {
  const uri =
    // "mongodb+srv://adeshphad:adeshphad@booking-baba.oqow5b3.mongodb.net/?retryWrites=true&w=majority";

    "mongodb+srv://kbsavale:bookingbaba123@cluster0.zzkhcsh.mongodb.net/";

  const options: any = {
    useUnifiedTopology: true,

    useNewUrlParser: true,
  };

  let client, db;

  if (!uri) {
    throw new Error("Connection error ..");
  }

  client = new MongoClient(uri);

  await client.connect();

  db = client.db("booking-baba");

  return db;
};

export default getDB;

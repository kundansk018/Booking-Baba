import { MongoClient } from "mongodb";

const getDB = async () => {
  const uri =
      "mongodb+srv://kbsavale:bookingbaba123@cluster0.zzkhcsh.mongodb.net/?retryWrites=true&w=majority";

  // "mongodb+srv://jadhavbhushan228:booking%40123@cluster0.j6wxgsd.mongodb.net/?retryWrites=true&w=majority";
  // "mongodb+srv://yogranipawar:yogranirani@cluster0.q61plnf.mongodb.net/?retryWrites=true&w=majority"
 
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

  db = client.db("booking_baba");

  return db;
};

export default getDB;

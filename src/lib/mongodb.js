// mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGO_URI;
let client;
let clientPromise;

if (!process.env.NEXT_PUBLIC_MONGO_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;

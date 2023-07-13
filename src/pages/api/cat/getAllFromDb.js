// posts.js

// import clientPromise from "../../lib/mongodb";
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    // console.log(client);
    const db = client.db("test");
    let myPost = await db.collection("CatFact").find({}).toArray();
    res.json(myPost);
    console.log("my post ", myPost.length);
  } catch (error) {
    console.log("error");
  }
}

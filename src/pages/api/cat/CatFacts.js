import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    handleGetRequest(req, res);
  } else if (req.method === "POST") {
    // Handle POST request
    handlePostRequest(req, res);
  } else if (req.method === "PUT") {
    // Handle PUT request
    handlePutRequest(req, res);
  } else if (req.method === "DELETE") {
    // Handle DELETE request
    handleDeleteRequest(req, res);
  } else {
    // Handle other request methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

async function handleGetRequest(req, res) {
  // Perform GET request logic
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const data = await db.collection("CatFact").find({}).toArray();
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error in Get request - CatFact API: ", error);
  }
}

async function handlePostRequest(req, res) {
  // Perform POST request logic
  const { Fact } = req.body;
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const data = await db.collection("CatFact").insertOne({
      fact: Fact,
      length: Fact.length,
    });
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(500).json({ data });
    }
  } catch (error) {
    console.log("Error in POST request - CatFact API: ", error);
    res.status(500).json({ data: error });
  }
}

async function handlePutRequest(req, res) {
  console.log("in pull");
  // Perform PUT request logic
  try {
    const { id, Fact } = req.body;
    const client = await clientPromise;
    const db = client.db("test");
    console.log("id: ", id, " fact: ", Fact);
    const result = await db
      .collection("CatFact")
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { fact: Fact, length: Fact.length } }
      );
    if (result.modifiedCount === 1) {
      res.status(200).json({ data: "Update successful" });
    } else {
      res.status(500).json({ data: "Update failed" });
    }
  } catch (error) {
    console.log("Error in PUT request - CatFact API: ", error);
    res.status(500).json({ data: error });
  }
}

async function handleDeleteRequest(req, res) {
  try {
    const { id } = req.body;
    const client = await clientPromise;
    const db = client.db("test");
    const result = await db
      .collection("CatFact")
      .deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 1) {
      res.status(200).json({ data: "Deletion successful" });
    } else {
      res.status(500).json({ data: "Deletion failed" });
    }
  } catch (error) {
    console.log("Error in PUT request - CatFact API: ", error);
    res.status(500).json({ data: error });
  }
}

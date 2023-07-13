// import connectMongo from "../../../utils/dbConfig";
// import Cat from "../../../models/catModel";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://catfact.ninja/facts");
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching cat facts:", error);
    res.status(500).json({ error: "Failed to fetch cat facts" });
  }
}

import { Schema, model, models } from "mongoose";

const catSchema = new Schema({
  fact: String,
  length: Number,
});

const CatFact = models.FactCat || model("CatFact", catSchema);

export default CatFact;

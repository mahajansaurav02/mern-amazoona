import express from "express";
import data from "../data.js";
const seedRouter = express.Router();

import Product from "../models/productModel.js";

seedRouter.get("/", async (req, res) => {
 const remo= await Product.remove({});
  const createProducts = await Product.insertMany(data.products);
  res.send({ createProducts });
});

export default seedRouter;

import express from "express";
import dotenv from "dotenv";
import { db } from "./utils/firebase-config.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello Creator");
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
  if (db) console.log("firestore database connected!!!");
});

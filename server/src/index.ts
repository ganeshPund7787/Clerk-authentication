import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { requireAuth, verifyToken } from "@clerk/clerk-sdk-node";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/", { dbName: "Cleark_Auth" })
  .then(() => console.log(`MongoDb is connected....`))
  .catch((error) => console.log(`Error in DB conection`, error));

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.get(
  "/protected",
  requireAuth((req, res) => {
    res.send("This is a protected route");
  })
);

app.post("/verify-token", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("Token not provided");

    const payload = await verifyToken(token, {
      audience: "your-audience",
    });

    res.status(200).json(payload);
  } catch (err) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

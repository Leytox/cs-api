import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import csRouter from "./routers/index.router.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB || "")
  .then(() => {
    console.log(
      `Successfully connected to MongoDB at ${mongoose.connection.host}`,
    );
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server is running on port ${process.env.PORT || 5000}`),
    );
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use("/api/v1/cs", csRouter);

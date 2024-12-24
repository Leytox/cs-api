import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.router.js";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import { specs } from "./swagger.js";
dotenv.config();

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
});

app.use(cors());
app.use(express.json());
app.use(limiter);

app.use(morgan("dev"));

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

app.use("/api/v1", indexRouter);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));

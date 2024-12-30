import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.router.js";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import favicon from "serve-favicon";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { specs } from "./swagger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
});

app.use(cors({
  origin: '*',
}));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
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
app.use("/api/v1/images", express.static("images"));
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(specs));

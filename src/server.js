import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { errors } from "celebrate";
import swaggerUi from "swagger-ui-express";

import { connectMongoDB } from "./db/connectMongoDB.js";
import apiRouter from "./routes/index.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { swaggerSpec } from "./docs/swagger.js";

import authRoutes from "./routes/authRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: "Travel Stories API is running",
  });
});

app.use("/api", apiRouter);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(authRoutes);
app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();

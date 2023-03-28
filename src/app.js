import express, { urlencoded, json } from "express";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";
require('dotenv').config();

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    const port = process.env.PORT;

    app.use(cors({ exposedHeaders: "Authorization" }));
    app.use(helmet());
    app.use(urlencoded({ extended: true }));
    app.use(json());

    app.use("/api", routes);
    app.get("/api/", (req, res) => {
      res.send("API running");
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  });
/** @format */

import express, { Application } from "express";
import { DBconnect } from "./config/db";
import { Environment } from "./env/EnvironmentVar";
import { mainApp } from "./mainApp";
import "./config/auth";

const app: Application = express();

const port: number | any = Environment.port;

mainApp(app);

app.use(express.json());

const Server = app.listen(Environment.port, () => {
  DBconnect();
  console.log("DB is now connected ");
});

process.on("uncaughtException", (Error: any) => {
  console.log("uncaughtException", Error);
  process.exit(1);
});
process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);
  Server.close(() => {
    process.exit(1);
  });
});

/** @format */

import mongoose from "mongoose";
import { Environment } from "../env/EnvironmentVar";

const Url: any = Environment.MONGODB_STRING;

export const DBconnect = () => {
  try {
    const connect = mongoose.connect(Url);
  } catch (error) {
    console.log(error);
  }
};

/** @format */

import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { Environment } from "../env/EnvironmentVar";

dotenv.config();

cloudinary.config({
  cloud_name: Environment.CLOUD_NAME,
  api_key: Environment.API_KEY,
  api_secret: Environment.API_SECRET,
  secure: true,
});

export default cloudinary;

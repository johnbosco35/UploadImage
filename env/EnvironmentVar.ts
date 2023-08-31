/** @format */

import dotenv from "dotenv";

dotenv.config();

export const Environment = {
  port: process.env.port!,
  MONGODB_STRING: process.env.MONGODB_STRING! as any,
  CLOUD_NAME: process.env.CLOUD_NAME,
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET,
  CLIENT_ID: process.env.client_id,
  CLIENTSECRET: process.env.clientSecret,
  CALLBACKURL: process.env.callbackUrl,
};

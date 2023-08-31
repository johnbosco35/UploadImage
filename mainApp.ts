/** @format */

import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./Router/RouterUpdate";
import passport from "passport";
import "./config/auth";
import session from "express-session";

export const mainApp = (app: Application) => {
  app.use(express.json()).use(cors());
  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.get("/", (req: Request, res: Response) => {
    res.send("Active Server🚀🚀🚀");
  });
  app.get("/check", (req: Request, res: Response) => {
    res.send(`<a href= "/veri/google">Authenicate with google</a>`);
  });

  app.get(
    "/veri/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );

  app.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "/google/callback/protect",
      failureRedirect: "/google/callback/failure",
    })
  );

  app.get("/google/callback/protect", (req: any, res: any) => {
    return res.send(`hello ${req?.user?.displayName}`);
  });
  app.get("/google/callback/failure", (req, res) => {
    return res.send("failed to authnticate");
  });

  app.use("/api/v1", router);
};

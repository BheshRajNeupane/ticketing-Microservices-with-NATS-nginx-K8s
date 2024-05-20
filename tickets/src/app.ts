import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from "@bheshraj-ticketing/common";


const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test", // auth works in testing env
  })
);


app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };

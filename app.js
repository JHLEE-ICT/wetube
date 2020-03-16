//import할 때 항상 알파벳 순으로 하는 것이 좋다
//require : node_modules에서 찾는 것(import)
//const express = require("express");
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

import "./passport";

//express 실행
const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
//view engine의 확장자를 정하는 과정, 기본폴더 => views가 되야함
app.set("view engine", "pug");
//middleware란 요청과 응답사이에 있는 것
//원하는 만큼의 middleware를 두고 라우터를 반환
// /uploads로 가면 uploads라는 directory 안으로 들어가는 것
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());

//local 변수를 global 변수로 사용하도록 만들어 주는 것
app.use(localMiddleware);

//use의 의미 : 누군가 /user 경로에 접속하면 이 Router 전체를 사용하겠다는 의미
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

//누군가 내 앱을 불러올 때 app object를 주겠다.
export default app;

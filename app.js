//import할 때 항상 알파벳 순으로 하는 것이 좋다
//require : node_modules에서 찾는 것(import)
//const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localMiddleware } from "./middlewares";

//express 실행
const app = express();

app.use(helmet());
//view engine의 확장자를 정하는 과정, 기본폴더 => views가 되야함
app.set("view engine", "pug");
//middleware란 요청과 응답사이에 있는 것
//원하는 만큼의 middleware를 두고 라우터를 반환
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//local 변수를 global 변수로 사용하도록 만들어 주는 것
app.use(localMiddleware);

//use의 의미 : 누군가 /user 경로에 접속하면 이 Router 전체를 사용하겠다는 의미
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

//누군가 내 앱을 불러올 때 app object를 주겠다.
export default app;

//require : node_modules에서 찾는 것(import)
//const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//default로 import 하지 않았을 때
import { userRouter } from "./router";

//express 실행
const app = express();

const handleHome = (req, res) => {
  //응답하려면 res.send
  //웹싸이트처럼 동작하려면 html, css파일을 send해줘야한다
  //마지막 함수는 next가 필요하지 않고 응답
  res.send("Hello from home");
};

//arrow function
const handleProfile = (req, res) => res.send("You are on my profile");

//middleware란 요청과 응답사이에 있는 것
//원하는 만큼의 middleware를 두고 라우터를 반환
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

//use의 의미 : 누군가 /user 경로에 접속하면 이 Router 전체를 사용하겠다는 의미
app.use("/user", userRouter);

//누군가 내 앱을 불러올 때 app object를 주겠다.
export default app;

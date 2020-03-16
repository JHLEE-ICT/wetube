import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout
} from "../controllers/userController";
import { onlyPubilc } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPubilc, getJoin);
globalRouter.post(routes.join, onlyPubilc, postJoin, postLogin);

globalRouter.get(routes.login, onlyPubilc, getLogin);
globalRouter.post(routes.login, onlyPubilc, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPubilc, logout);

export default globalRouter;

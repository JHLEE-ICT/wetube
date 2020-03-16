//라우터는 많은 라우트들이 담긴 파일
import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
//express에서는 /users/:id 로 인식을 하고 있기 때문에 인자 전달을 하지 않아도 된다.
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

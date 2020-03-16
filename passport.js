import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import routes from "./routes";
import { githubLoginCallback } from "./controllers/userController";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

//serialize : 쿠키에 어떤 정보를 담아서 보낼 것인지
passport.serializeUser(User.serializeUser());
//deserialize : 쿠키에 있는 정보를 어떻게 사용자로 전환을 하는가
passport.deserializeUser(User.deserializeUser());

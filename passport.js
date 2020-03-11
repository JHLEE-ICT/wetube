import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

//serialize : 쿠키에 어떤 정보를 담아서 보낼 것인지
passport.serializeUser(User.serializeUser());
//deserialize : 쿠키에 있는 정보를 어떻게 사용자로 전환을 하는가
passport.deserializeUser(User.deserializeUser());

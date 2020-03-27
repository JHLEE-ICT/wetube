import dotenv from "dotenv";
dotenv.config();
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-1"
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "hyuntube/video"
  })
});
const multerAvatar = multer({
  s3,
  acl: "public-read",
  bucket: "hyuntube/avatar"
});

//single : 하나의 파일만 업로드 가능하다는 뜻
export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");

export const localMiddleware = (req, res, next) => {
  //locals가 추가되면 그것들을 템플릿, 컨트롤러, 어디서든 쓸 수 있다
  //locals에 있는 건 템플릿에 변수명처럼 존재
  res.locals.siteName = "HyunTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

// 로그아웃 된 상태에서만 접근하겠다는 의미
export const onlyPubilc = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

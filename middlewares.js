import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localMiddleware = (req, res, next) => {
  //locals가 추가되면 그것들을 템플릿, 컨트롤러, 어디서든 쓸 수 있다
  //locals에 있는 건 템플릿에 변수명처럼 존재
  res.locals.siteName = "HyunTube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  console.log(req.user);
  next();
};

//single : 하나의 파일만 업로드 가능하다는 뜻
export const uploadVideo = multerVideo.single("videoFile");

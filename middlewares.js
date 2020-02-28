import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  //locals가 추가되면 그것들을 템플릿, 컨트롤러, 어디서든 쓸 수 있다
  //locals에 있는 건 템플릿에 변수명처럼 존재
  res.locals.siteName = "HyunTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

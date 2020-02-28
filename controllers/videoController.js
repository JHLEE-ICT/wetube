import { videos } from "../db";
import routes from "../routes";

//render(템플릿, 템플릿에 추가할 정보가 담긴 객체)
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  //searchingBy = req.query.term을 가져오는 것과 같은 방법
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //To Do:Upload and Save Video
  // 사용자가 업로드하면 새 비디오에 새 id 할당 후 그 비디오의 페이지로 이동
  res.redirect(routes.videoDetail(32493));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("Delete Video", { pageTitle: "Delete Video" });

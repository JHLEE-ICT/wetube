//render(템플릿, 템플릿에 추가할 정보가 담긴 객체)
export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
  //searchingBy = req.query.term을 가져오는 것과 같은 방법
  const {
    query: { term: searchingBy }
  } = req;
  res.render("Search", { pageTitle: "Search", searchingBy });
};

export const videos = (req, res) =>
  res.render("Videos", { pageTitle: "Videos" });

export const upload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("Video Detail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("Edit Video", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("Delete Video", { pageTitle: "Delete Video" });

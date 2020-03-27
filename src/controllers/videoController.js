import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";
//render(템플릿, 템플릿에 추가할 정보가 담긴 객체)
//javascript는 한꺼번에 여러가지 일을 할 수 있기 때문에 일이 끝나기를 기다리는 것 = async
export const home = async (req, res) => {
  //await : 다음 과정이 끝날 때까지 잠시 기다려 달라는 의미
  //await는 async 없이는 쓸 수 없다
  //성공적으로 끝나는 것은 아님 그냥 끝날 때 까지 기다리는 것
  try {
    //-1이란 위아래 순서를 바꾸겠다는 약속
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = async (req, res) => {
  //searchingBy = req.query.term을 가져오는 것과 같은 방법
  const {
    query: { term: searchingBy }
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { location }
  } = req;
  //To Do:Upload and Save Video
  const newVideo = await Video.create({
    fileUrl: location,
    title,
    description,
    creator: req.user.id
  });
  req.user.videos.push(newVideo.id);
  req.user.save();
  // 사용자가 업로드하면 새 비디오에 새 id 할당 후 그 비디오의 페이지로 이동
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    //내용을 가져오고 싶으면 populate
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments");
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      await Video.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// Register Video View

export const postRegisterView = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

// Add Comment

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user
  } = req;
  try {
    const video = await await Video.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id
    });
    video.comments.push(newComment.id);
    video.save();
  } catch {
    res.status(400);
  } finally {
    res.end();
  }
};

export const deleteComment = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const comment = await Comment.findOne({ creator: id });
    if (comment.creator == req.user.id) {
      await Comment.findOneAndRemove({ creator: id });
    } else {
      throw Error();
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

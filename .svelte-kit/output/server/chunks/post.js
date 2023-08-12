const initializeNewPost = (name, publicID, profileImage, summary, content, title, subtitle, media, comments, shares, likes, tags, images) => {
  let newPost = {
    postID: publicID + Date.now(),
    name,
    publicID,
    //public
    media,
    profileImage,
    title,
    subtitle,
    summary,
    content,
    comments,
    //array of comment ids
    shares,
    //array of publicids
    likes,
    //array of publicids
    tags,
    images,
    creationTimeStamp: Date.now()
  };
  return newPost;
};
export {
  initializeNewPost as i
};

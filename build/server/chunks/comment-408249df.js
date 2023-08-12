const initializeNewComment = (parentID, name, publicID, profileImage, content, comments, images) => {
  let newComment = {
    parentID,
    //postID or another commentID
    commentID: "Comment" + Date.now(),
    name,
    publicID,
    //public
    profileImage,
    content,
    comments,
    //array of comment ids
    images,
    creationTimeStamp: Date.now()
  };
  return newComment;
};

export { initializeNewComment as i };
//# sourceMappingURL=comment-408249df.js.map

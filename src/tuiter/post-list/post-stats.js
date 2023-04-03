import React from "react";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const PostStats = (post) => {
  const dispatch = useDispatch();
  console.log(post)
  return (
    <div className="wd-home-buttons">
      <button className="wd-home-button bg-transparent">
        <i className="bi bi-chat"></i> {post.post.comment}
      </button>
      <button className="wd-home-button bg-transparent">
        <i className="bi bi-share"></i> {post.post.retuit}
      </button>
      <button className="wd-home-button bg-transparent" onClick={() => dispatch(updateTuitThunk({
        ...post.post,
        liked: !post.post.liked,
        like: post.post.liked ? post.post.like - 1 : post.post.like + 1
      }))}>
        {post.post.liked ? <i className="bi bi-heart-fill me-2 text-danger"></i> : <i className="bi bi-heart"></i>} {post.post.like}
      </button>
      <button className="wd-home-button bg-transparent" onClick={() => dispatch(updateTuitThunk({
        ...post.post,
        disliked: !post.post.disliked,
        dislike: post.post.disliked ? post.post.dislike - 1 : post.post.dislike + 1
      }))}>
        {post.post.disliked ? <i class="bi bi-hand-thumbs-down-fill me-2 text-danger"></i> : <i class="bi bi-hand-thumbs-down"></i>} {post.post.dislike}
      </button>
      <button className="wd-home-button bg-transparent">
        <i className="bi bi-upload"></i>
      </button>
    </div>
  );
};

export default PostStats;
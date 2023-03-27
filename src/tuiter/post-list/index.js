import React from "react";
import PostItem from "./post-list-item";
import { useSelector } from "react-redux";

const PostList = () => {
  const postsArray = useSelector((state) => state.tuits);
  return (
    <ul className="list-group">
      {postsArray.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostList;

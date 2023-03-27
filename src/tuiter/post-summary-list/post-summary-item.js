import React from "react";
const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "https://assets.materialup.com/uploads/922c35bd-940d-4f26-bbd5-ff8b7075f53b/preview.jpg",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div>
            {post.name} - {post.time}
          </div>
          <div className="fw-bolder">{post.topic}</div>
          <div>{post.text}</div>
        </div>
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-3"
            src={`${post.icon}`}
          />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;

import React from "react";
import postsArray from "./posts.json";
const PostItem = ({ post }) => {
  switch (post.category) {
    case 1:
      return (
        <div className="list-group-item rounded">
          <div className="wd-home-post bg-transparent">
            <div>
              <img className="wd-home-img" src={`${post.icon}`} />
            </div>
            <div>
              <div className="wd-home-author">
                {post.name} <i class="bi bi-patch-check-fill"></i>
              </div>
              <div className="wd-home-username">{post.userName}</div>
              <div className="wd-home-time">- {post.time}</div>
              <br />
              <div className="wd-home-text">{post.text}</div>
              <div>
                <img className="img-fluid rounded" src={`${post.preview}`} />
              </div>
              <div className="wd-home-buttons">
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-chat"></i> {post.comment}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-share"></i> {post.retuit}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-heart"></i> {post.like}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-upload"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="list-group-item rounded">
          <div className="wd-home-post bg-transparent">
            <div>
              <img className="wd-home-img" src={`${post.icon}`} />
            </div>
            <div>
              <div className="wd-home-author">
                {post.name} <i class="bi bi-patch-check-fill"></i>
              </div>
              <div className="wd-home-username">{post.userName}</div>
              <div className="wd-home-time">- {post.time}</div>
              <br />
              <div className="wd-home-text">{post.text}</div>
              <div className="list-group rounded">
                <div className="list-group-item bg-transparent">
                  <img
                    className="wd-home-preview-img img-fluid rounded"
                    src={`${post.preview}`}
                  />
                </div>
                <div className="wd-home-preview-post list-group-item bg-transparent">
                  <div className="wd-home-preview-title">
                    {post.previewTitle}
                  </div>
                  <div className="wd-home-time">{post.previewText}</div>
                  <br />
                  <div className="wd-home-time"><i class="bi bi-link-45deg"></i>{post.previewLink}</div>
                </div>
              </div>
              <div className="wd-home-buttons">
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-chat"></i> {post.comment}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-share"></i> {post.retuit}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-heart"></i> {post.like}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-upload"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    case 3:
      const rpost = postsArray.find((p) => (p.id = post.retweetId));
      return (
        <div className="list-group-item rounded">
          <div className="wd-home-post bg-transparent">
            <div>
              <img className="wd-home-img" src={`${post.icon}`} />
            </div>
            <div>
              <div className="wd-home-author">
                {post.name} <i class="bi bi-patch-check-fill"></i>
              </div>
              <div className="wd-home-username">{post.userName}</div>
              <div className="wd-home-time">- {post.time}</div>
              <br />
              <div className="wd-home-text">{post.text}</div>
              <div className="bg-transparent">
                <PostItem post={rpost} />
              </div>
              <div className="wd-home-buttons">
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-chat"></i> {post.comment}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-share"></i> {post.retuit}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-heart"></i> {post.like}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-upload"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};
export default PostItem;

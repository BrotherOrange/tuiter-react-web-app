import React from "react";
import { deleteTuit } from "../tuits/tuits-reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const PostItem = ({ post }) => {
  const postsArray = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  var likedClassName = "bi bi-heart";
  if (post.liked === true) {
    likedClassName = "bi bi-heart-fill";
  }
  switch (post.category) {
    case 1:
      return (
        <div className="list-group-item rounded">
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}
          ></i>
          <div className="wd-home-post bg-transparent">
            <div>
              <img className="wd-home-img" src={`${post.icon}`} />
            </div>
            <div>
              <div className="wd-home-author">
                {post.name} <i class="bi bi-patch-check-fill"></i>
              </div>
              <div className="wd-home-username">@{post.userName}</div>
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
                  <i className={likedClassName}></i> {post.like}
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
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}
          ></i>
          <div className="wd-home-post bg-transparent">
            <div>
              <img className="wd-home-img" src={`${post.icon}`} />
            </div>
            <div>
              <div className="wd-home-author">
                {post.name} <i class="bi bi-patch-check-fill"></i>
              </div>
              <div className="wd-home-username">@{post.userName}</div>
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
                  <div className="wd-home-time">
                    <i class="bi bi-link-45deg"></i>
                    {post.previewLink}
                  </div>
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
                  <i className={likedClassName}></i> {post.like}
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
      var rpost = postsArray.filter(function (_data) {
        return _data._id === post.retweetId;
      });
      if (rpost.length === 0) {
        return (
          <div className="list-group-item rounded">
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(post._id)}
            ></i>
            <div className="wd-home-post bg-transparent">
              <div>
                <img className="wd-home-img" src={`${post.icon}`} />
              </div>
              <div>
                <div className="wd-home-author">
                  {post.name} <i class="bi bi-patch-check-fill"></i>
                </div>
                <div className="wd-home-username">@{post.userName}</div>
                <div className="wd-home-time">- {post.time}</div>
                <br />
                <div className="wd-home-text">{post.text}</div>
                <div className="bg-transparent m-3">
                  <span className="text-secondary fw-light border border-2 rounded p-2">The post has been deleted!</span>
                </div>
                <div className="wd-home-buttons pt-2">
                  <button className="wd-home-button bg-transparent">
                    <i className="bi bi-chat"></i> {post.comment}
                  </button>
                  <button className="wd-home-button bg-transparent">
                    <i className="bi bi-share"></i> {post.retuit}
                  </button>
                  <button className="wd-home-button bg-transparent">
                    <i className={likedClassName}></i> {post.like}
                  </button>
                  <button className="wd-home-button bg-transparent">
                    <i className="bi bi-upload"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
      console.info(rpost)
      return (
        <div className="list-group-item rounded">
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}
          ></i>
          <div className="wd-home-post bg-transparent">
            <div>
              <img className="wd-home-img" src={`${post.icon}`} />
            </div>
            <div>
              <div className="wd-home-author">
                {post.name} <i class="bi bi-patch-check-fill"></i>
              </div>
              <div className="wd-home-username">@{post.userName}</div>
              <div className="wd-home-time">- {post.time}</div>
              <br />
              <div className="wd-home-text">{post.text}</div>
              <div className="bg-transparent">
                <PostItem post={rpost[0]} />
              </div>
              <div className="wd-home-buttons">
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-chat"></i> {post.comment}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-share"></i> {post.retuit}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className={likedClassName}></i> {post.like}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-upload"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="list-group-item rounded">
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}
          ></i>
          <div className="wd-home-post bg-transparent">
            <div>
              <img className="wd-home-img" src={`${post.icon}`} />
            </div>
            <div>
              <div className="wd-home-author">
                {post.name} <i class="bi bi-patch-check-fill"></i>
              </div>
              <div className="wd-home-username">@{post.userName}</div>
              <div className="wd-home-time">- {post.time}</div>
              <br />
              <div className="wd-home-text">{post.text}</div>
              <div className="wd-home-buttons">
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-chat"></i> {post.comment}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className="bi bi-share"></i> {post.retuit}
                </button>
                <button className="wd-home-button bg-transparent">
                  <i className={likedClassName}></i> {post.like}
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

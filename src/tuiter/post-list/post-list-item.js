import React from "react";
import PostStats from "./post-stats";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const PostItem = ({ post }) => {
  const { tuits } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

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
              <PostStats post={post}/>
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
              <PostStats post={post}/>
            </div>
          </div>
        </div>
      );
    case 3:
      var rpost = tuits.filter(function (_data) {
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
                  <span className="text-secondary fw-light border border-2 rounded p-2">
                    The post has been deleted!
                  </span>
                </div>
                <PostStats post={post}/>
              </div>
            </div>
          </div>
        );
      }
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
              <PostStats post={post}/>
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
              <PostStats post={post}/>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};
export default PostItem;

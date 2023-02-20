const PostSummaryItem = (post) => {
  return `
    <div class="list-group-item wd-post">
        <div>
          <div class="wd-post-topic">
            ${post.topic}
          </div>
          <div class="wd-author-handle">
            ${post.userName} <i class="fas fa-check-circle"></i>
          </div>
          <div class="wd-time">
            - ${post.time}
          </div>
          </br>
          <div class="wd-author-handle">
            ${post.title}
          </div>
        </div>
        <div>
          <img class="wd-post-image" src="${post.image}"></img>
        </div>
    </div>
  `;
};
export default PostSummaryItem;
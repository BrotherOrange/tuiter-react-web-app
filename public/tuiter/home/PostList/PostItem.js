const PostItem = (post) => {
  if (post.previewTitle === '') {
    return `
    <div class="list-group-item wd-home-post bg-transparent">
      <div>
        <img class="wd-home-img" src="${post.icon}"></img>
      </div>
      <div class=""wd-home-post>
        <div class="wd-home-author">
          ${post.name} <i class="fas fa-check-circle"></i>
        </div>
        <div class="wd-home-username">
          ${post.userName}
        </div>
        <div class="wd-home-time">
          - ${post.time}
        </div>
        </br>
        <div class="wd-home-text">
          ${post.text}
        </div>
        <div>
          <img class="img-fluid rounded" src="${post.preview}"></img>
        </div>
        <div class="wd-home-buttons">
          <button class="wd-home-button bg-transparent"><i class="fa-regular fa-comment"></i> ${post.comment}</button>
          <button class="wd-home-button bg-transparent"><i class="fa-solid fa-retweet"></i> ${post.retuit}</button>
          <button class="wd-home-button bg-transparent"><i class="fa-regular fa-heart"></i> ${post.like}</button>
          <button class="wd-home-button bg-transparent"><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
        </div>
      </div>
    </div>
  `;
  }
  return `
    <div class="list-group-item wd-home-post bg-transparent">
      <div>
        <img class="wd-home-img" src="${post.icon}"></img>
      </div>
      <div class=""wd-home-post>
        <div class="wd-home-author">
          ${post.name} <i class="fas fa-check-circle"></i>
        </div>
        <div class="wd-home-username">
          ${post.userName}
        </div>
        <div class="wd-home-time">
          - ${post.time}
        </div>
        </br>
        <div class="wd-home-text">
          ${post.text}
        </div>
        <div class="list-group rounded">
          <div class="list-group-item bg-transparent">
            <img class="wd-home-preview-img img-fluid" src="${post.preview}"></img>
          </div>
          <div class="wd-home-preview-post list-group-item bg-transparent">
            <div class="wd-home-preview-title">
              ${post.previewTitle}
            </div>
            <div class="wd-home-time">
              ${post.previewText}
            </div>
            </br>
            <div class="wd-home-time">
              ${post.previewLink}
            </div>
          </div>
        </div>
        <div class="wd-home-buttons">
          <button class="wd-home-button bg-transparent"><i class="fa-regular fa-comment"></i> ${post.comment}</button>
          <button class="wd-home-button bg-transparent"><i class="fa-solid fa-retweet"></i> ${post.retuit}</button>
          <button class="wd-home-button bg-transparent"><i class="fa-regular fa-heart"></i> ${post.like}</button>
          <button class="wd-home-button bg-transparent"><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
        </div>
      </div>
    </div>
  `;
};
export default PostItem;
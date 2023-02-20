const WhoToFollowListItem = (who) => {
  return `
          <div class="list-group-item">
            <div class="row">
              <div class="col-12 col-lg-3 col-xxl-2">
                <img class="wd-img-avatar" src=${who.avatarIcon}></img>
              </div>
              <div class="col-12 mt-2 col-lg-5 col-xxl-7">
                <div class="wd-author-handle text-nowrap">
                  ${who.userName} <i class="fas fa-check-circle"></i>
                </div>
                
                <div class="wd-post-topic text-nowrap">
                  ${who.handle}
                </div>
              </div>
              <div class="col-12 mt-2 col-lg-4 col-xxl-3">
                  <button class="btn btn-primary wd-tweet-button wd-btn-follow">Follow</button>
              </div>
            </div>
          </div>
  `;
};
export default WhoToFollowListItem;
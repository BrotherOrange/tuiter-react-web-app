import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import WhoToFollowListItem from "../WhoToFollowList/index.js";

function exploreComponent() {
  $("#wd-explore").append(`
      <!--<h2>Explore</h2>-->
      <a href="../navigation.html">Back</a>
      <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
          <!--<h3>Navigation Sidebar</h3>-->
          ${NavigationSidebar('explore')}
        </div>
        <div class="col-10 col-lg-7 col-xl-6">
          <!--<h3>ExploreComponent</h3>-->
          <div class="row">
            <div class="col-12 col-sm-11">
              <input class="form-control wd-rounded-corners-all-around wd-search-area" type="search" placeholder="Search Tuiter" name="search">
              <i class="fa fa-search wd-search-glass"></i>
            </div>
          
            <div class="col-12 col-sm-1">
              <a href="explore-settings.html"><i class="pt-1 fas fa-cog fa-2x"></i></a>
            </div>
          </div>
          <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-sm-none d-md-block">
              <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
          </ul>
          <div class="wd-main">
            <img src="../times-preview.png" alt="No Preview" class="img-fluid mt-2 rounde position-relative wd-main-image" />
            <span class="wd-overlay-text p-1">This the First Title</span>
          </div>
          ${PostSummaryList()}
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <!--<h3>WhoToFollowList </h3>-->
          ${WhoToFollowListItem()}
        </div>
      </div>
  `);
}
$(exploreComponent);

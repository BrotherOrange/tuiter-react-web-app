const NavigationSidebar = (page) => {
  if (page === 'explore') {
    return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
      <a class="wd-nav list-group-item" href="../home/index.html">
        <i class="wd-nav-text fa-solid fa-house-chimney"></i> 
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Home</span>
      </a>
      <a class="wd-nav list-group-item bg-primary" href="../explore/index.html">
        <i class="fa-solid fa-hashtag"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Explore</span>
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-bell"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Notifications</span>
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-envelope"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Messages</span>
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-bookmark"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Bookmarks</span>
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-list-ul"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Lists</span>  
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-user"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Profile</span>
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-circle-chevron-down"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;More</span>
      </a>
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `);
  } else if (page === 'home') {
    return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
      <a class="wd-nav list-group-item bg-primary" href="../home/index.html">
        <i class="wd-nav-text fa-solid fa-house-chimney"></i> 
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Home</span>
      </a>
      <a class="wd-nav list-group-item" href="../explore/index.html">
        <i class="fa-solid fa-hashtag"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Explore</span>
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-bell"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Notifications</span>
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-envelope"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Messages</span>
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-bookmark"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Bookmarks</span>
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-list-ul"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Lists</span>  
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-user"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;Profile</span>
      </a>
      <a class="wd-nav list-group-item" href="/">
        <i class="wd-nav-text fa-solid fa-circle-chevron-down"></i>
        <span class="wd-nav-text d-none d-lg-none d-xl-block">&nbsp;More</span>
      </a>
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `);
  }
 }
 export default NavigationSidebar;
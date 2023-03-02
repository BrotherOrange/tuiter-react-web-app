import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2];
  return (
    <div className="list-group">
      <Link className="list-group-item"><i class="bi bi-twitter"></i></Link>
      <Link
        to="/tuiter/home"
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
      >
        <i class="bi bi-house-door-fill"></i> Home
      </Link>
      <Link
        to="/tuiter/explore"
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
      >
        <i class="bi bi-hash"></i> Explore
      </Link>
      <Link
        to="/"
        className={`list-group-item`}
      >
        <i class="bi bi-arrow-up-left-square-fill"></i> Labs
      </Link>
      <Link
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        <i class="bi bi-bell-fill"></i> Notifications
      </Link>
      <Link
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
      >
        <i class="bi bi-envelope-fill"></i> Messages
      </Link>
      <Link
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
      >
        <i class="bi bi-bookmark-fill"></i> Bookmarks
      </Link>
      <Link
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
      >
        <i class="bi bi-list-ul"></i> Lists
      </Link>
      <Link
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
      >
        <i class="bi bi-person-fill"></i> Profile
      </Link>
      <Link
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
      >
        <i class="bi bi-arrow-down-circle-fill"></i> More
      </Link>
    </div>
  );
};
export default NavigationSidebar;

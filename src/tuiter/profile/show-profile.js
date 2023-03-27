import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShowProfile = () => {
  const profile = useSelector((state) => state.profile)
  return (
    <>
      <div className="position-relative mb-2">
        <img src={profile.bannerPicture} className="w-100" />
        <img src={profile.profilePicture} className="position-absolute top-100 start-0 ms-3 w-25 translate-middle-y rounded-circle" />
      </div>
      <div>
        <Link to="../edit-profile">
          <button className="rounded-pill btn btn-outline-dark float-end mt-2 ps-3 pe-3 fw-bold">Edit</button>
        </Link>
      </div>
      <div className="mt-5 pt-5">
        <span className="fs-3 fw-bolder">{profile.name}</span>
        <br/>
        <span className="fs-6 text-secondary">{profile.handle}</span>
      </div>
      <div className="mt-2 mb-3">
        <p>{profile.bio}</p>
        <span className="text-secondary me-2">
          <i class="bi bi-geo-alt"></i> {profile.location}
        </span>
        <span className="text-secondary me-3">
          <i class="bi bi-balloon"></i> Born {profile.dateOfBirth}
        </span>
        <span className="text-secondary">
          <i class="bi bi-calendar3"></i> Joined {profile.dateJoined}
        </span>
      </div>
      <div>
        <span className="fs-6 fw-bolder">{profile.followingCount}</span> <span className="fs-6 text-secondary me-4">Following</span>
        <span className="fs-6 fw-bolder">{profile.followersCount}</span> <span className="fs-6 text-secondary">Followers</span>
      </div>
    </>
  );
};

export default ShowProfile;

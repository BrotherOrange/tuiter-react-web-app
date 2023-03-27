import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editProfile } from "../profile-reducers/profile-reducer";
import { useDispatch } from "react-redux";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile)
  let [whatName, setWhatName] = useState(profile.name || "");
  let [whatBio, setWhatBio] = useState(profile.bio || "");
  let [whatLocation, setWhatLocation] = useState(profile.location || "");
  let [whatWebsite, setWhatWebsite] = useState(profile.website || "");
  let [whatBirth, setWhatBirth] = useState(profile.dateOfBirth || "");
  const dispatch = useDispatch();
  const saveClickHandler = () => {
    const newProfile = {
      name: whatName,
      bio: whatBio,
      location: whatLocation,
      website: whatWebsite,
      dateOfBirth: whatBirth
    };
    dispatch(editProfile(newProfile));
  };
  return (
    <>
      <div className="position-relative mb-2">
        <img src={profile.bannerPicture} className="w-100" />
        <img src={profile.profilePicture} className="position-absolute top-100 start-0 ms-3 w-25 translate-middle-y rounded-circle" />
      </div>
      <div className="mt-5 pt-5">
        <span className="fs-4 fw-bold float-start mt-2">Edit Profile</span>
        <Link to="../profile">
          <button 
            className="float-end mb-2 rounded-pill btn btn-dark mt-1 ps-3 pe-3 fw-bold"
            onClick={saveClickHandler}>Save</button>
        </Link>
      </div>
      <div className="mt-4 pt-4">
        <div className="mb-4 pt-2 ps-2 border border-secondary rounded">
          <label for="name" className="form-control border-0 fw-bold">Name</label>
          <input
            id="name"
            type="text"
            value={whatName}
            placeholder="What's your name?"
            className="form-control border-0"
            onChange={(event) => setWhatName(event.target.value)}>
          </input>
        </div>
        <div className="mb-4 pt-2 ps-2 border border-secondary rounded">
          <label for="bio" className="form-control border-0 fw-bold">Bio</label>
          <textarea
            id="bio"
            value={whatBio}
            placeholder="Please introduce yourself..."
            className="form-control border-0"
            onChange={(event) => setWhatBio(event.target.value)}>
          </textarea>
        </div>
        <div className="mb-4 pt-2 ps-2 border border-secondary rounded">
          <label for="location" className="form-control border-0 fw-bold">Location</label>
          <input
            id="location"
            value={whatLocation}
            type="text"
            placeholder="Where are you at?"
            className="form-control border-0"
            onChange={(event) => setWhatLocation(event.target.value)}>
          </input>
        </div>
        <div className="mb-4 pt-2 ps-2 border border-secondary rounded">
          <label for="website" className="form-control border-0 fw-bold">Website</label>
          <input
            id="website"
            value={whatWebsite}
            type="url"
            placeholder="What's your personal website?"
            className="form-control border-0"
            onChange={(event) => setWhatWebsite(event.target.value)}>
          </input>
        </div>
        <div className="pt-2 ps-2 border border-secondary rounded">
          <label for="birth" className="form-control border-0 fw-bold">Birth Date</label>
          <input
            id="birth"
            value={whatBirth}
            type="date"
            className="form-control border-0"
            onChange={(event) => setWhatBirth(event.target.value)}>
          </input>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

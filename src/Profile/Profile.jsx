// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import "./Profile.css";
import Cover from "../assets/Cover .jpg";
import profiless from "../assets/profiledd.jpg";

const Profile = () => {
  //background
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };
  //Profole
  const profileRef = useRef(null);
  const [profile, setProfile] = useState("");

  const handleProfileClick = () => {
    profileRef.current.click();
  };

  const handleProfileChange = (event) => {
    const profile = event.target.files[0];
    console.log(profile);
    setProfile(event.target.files[0]);
  };

  return (
    <div>
      <div className="imagestyle">
        <div onClick={handleImageClick}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="" />
          ) : (
            <img src={Cover} alt="" />
          )}

          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <div className="flex">
          <h2
            className="textFoes
        "
          >
            1205 followers
          </h2>
          <button className="button px-1.5">Add Frind</button>
        </div>
      </div>
      <div className="profile">
        <div>
          <div>
            <div>
              <div onClick={handleProfileClick}>
                {profile ? (
                  <img src={URL.createObjectURL(profile)} alt="" />
                ) : (
                  <img src={profiless} alt="" />
                )}

                <input
                  type="file"
                  ref={profileRef}
                  onChange={handleProfileChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="catagory flex">
        <div className=" nameLi">
          <h3>Janice Griffith</h3>
          <p>Group Admin</p>
        </div>
        <div className="flex CataLi">
          <ul>
            <li>
              <a href="#"> Time Line</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#"> Photos</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#"> Videos</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Friends</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Groups</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#"> More</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Feeds.css";

import image from "../../src/assets/ffffff.jpg";
import GivCome from "../Comment/GivCome";

// eslint-disable-next-line react/prop-types
export default function Feed({ fed }) {
  console.log(fed);
  return (
    <>
      <div className="Feed ">
        <div className="top-center">
          <a href="">
            <div className="user">
              <div className="group flex items-center">
                <img
                  className="shrink-0 h-12 w-12 rounded-full w-"
                  src={fed.profilePic}
                  alt=""
                />
                <div>
                  <h4 className=" textColor">{fed.name}</h4>
                  <small className="textColor">
                    Published: June,2 2018 19:PM
                  </small>
                </div>
              </div>
            </div>
          </a>

          <div id="toolTip">
            <div id="toolTipText">
              <a href="#">
                <i className="fi fi-rr-pen-field pb-4"> Embed</i>
              </a>{" "}
              <br />
              <a href="#">
                <i className="fi fi-rr-share "> Share</i>
              </a>{" "}
              <br />
              <a href="#">
                <i className="fi fi-rr-bell-slash "> Mute</i>
              </a>{" "}
              <br />
              <a href="#">
                <i className="fi fi-rr-folder "> view hidden replies</i>
              </a>{" "}
              <br />
              <a href="#">
                {" "}
                <i className="fi fi-rr-file-medical-alt "> Report post</i>
              </a>
              <br />
              <i className="fi fi-rr-lightbulb-slash "> Block</i>
            </div>
            <i className="fi fi-rr-menu-dots"></i>
          </div>
        </div>
        <div className="mid-cotent">
          <img src={fed.feedPhotos} alt="" />
        </div>
        <div className="bottom-content">
          <div className="action-item flex">
            <div id="toolTip2">
              <div id="toolTipText2">
                <h1 className="center">Views</h1>
              </div>
              <i className="fi fi-rr-eye"> 23k</i>
            </div>
            <div id="toolTip2">
              <div id="toolTipText2">
                <h1 className="center">Comments</h1>
              </div>
              <i className="fi fi-rr-comment-alt"> 12k </i>
            </div>
            <div id="toolTip2">
              <div id="toolTipText2">
                <h1 className="center">Likes</h1>
              </div>
              <i className="fi fi-rr-heart"> 1.2k</i>
            </div>
            <div id="toolTip2">
              <div id="toolTipText2">
                <h1 className="center">dislike</h1>
              </div>
              <i className="fi fi-rr-heart-slash tex-red"> 1.2k</i>
            </div>

            <i className="fi fi-rr-share bg-white shire"> </i>
          </div>
          <div>
            <p>{fed.desc}</p>
            <GivCome></GivCome>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

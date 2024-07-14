// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SocialPost.css";
import Feeds from "../Feeds/Feeds";

const SocialPost = () => {
  return (
    <div className="maneClass ">
      <div className=" cardScrool flex  justify-between">
        <div className="shortCut">
          <h3 className="text-lg font-semibold	pb-0.5">Shortcuts</h3>
          <h4 className="LinneCl"></h4>
          <ul>
            <li>
              <i className="fi fi-rr-mouse pe-2.5 "></i>
              <a to="">News Feed</a>
            </li>
            <li>
              <i className="fi fi-rr-mouse"></i>
              <a href=""> Inbox</a>
            </li>
            <li>
              <i className=" fi-rr-copy pe-2.5"></i>
              <a href="">My Pages</a>
            </li>
            <li>
              <i className="fi fi-rr-circle-user pe-2.5"></i>
              <a href="">Friends</a>
            </li>
            <li>
              <i className="fi fi-rr-graphic-style pe-2.5"></i>
              <a href="">Images</a>
            </li>
            <li>
              <i className="fi fi-rr-camera-movie pe-2.5"></i>
              <a href="">Videos</a>
            </li>
            <li>
              <i className="fi fi-rr-comment-smile pe-2.5"></i>
              <a href="">Messages</a>
            </li>
            <li>
              <i className="fi fi-rr-bell-notification-social-media pe-2.5"></i>
              <a href="">Notifications</a>
            </li>
            <li>
              <i className="fi fi-rr-users-alt pe-2.5"></i>
              <a href="">People Nearby</a>
            </li>
            <li>
              <i className="fi fi-rr-chart-histogram pe-2.5"></i>
              <a href=""> Insights</a>
            </li>
            <li>
              <i className="fi fi-rr-power pe-2.5"></i>
              <a href=""> Logout</a>
            </li>
          </ul>
        </div>
        <div>
          <Feeds></Feeds>
        </div>
      </div>
    </div>
  );
};

export default SocialPost;

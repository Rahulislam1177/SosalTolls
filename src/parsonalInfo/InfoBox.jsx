// eslint-disable-next-line no-unused-vars
import React from "react";
import "./InfoBox.css";
import { Link } from "react-router-dom";
import BoxSid from "./BoxSid";

const InfoBox = () => {
  return (
    <div>
      <div>
        <div className="|background">
          <div className="EditInfo ">
            <div className=" cardScrool flex mx-auto  justify-between">
              <div className="LiteMoon">
                <h3 className="text-lg font-semibold	pb-0.5">Edit Info</h3>
                <h4 className="LineTex"></h4>
                <ul>
                  <li>
                    <i className="fi fi-rr-info pe-2.5 "></i>
                    <a href="">Basic Info</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-mouse"></i>
                    <a href=""> Education & Work</a>
                  </li>
                  <li>
                    <i className=" fi fi-rr-heart pe-2.5"></i>
                    <a href="">My Interests</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-settings pe-2.5"></i>
                    <a href="">Account Setting</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-lock pe-2.5"></i>
                    <a href="">Change Password</a>
                  </li>
                </ul>
                <section className="slid2">
                  <div className="LiteColor">
                    <h3 className="text-lg font-semibold	pb-0.5">Socials</h3>
                    <h4 className="LineTex"></h4>
                    <ul className="ButtonLk">
                      <li>
                        <button className="button1" to="">
                          Facebook{" "}
                          <i className="fi fi-brands-facebook pe-2.5 "></i> 4k
                          like
                        </button>
                      </li>
                      <li>
                        <button className="button2" href="">
                          {" "}
                          Twitter <i className="fi fi-brands-twitter"></i> 25k
                          like
                        </button>
                      </li>
                      <li>
                        <button className="button2 " href="">
                          Google <i className=" fi fi-brands-google pe-2.5"></i>{" "}
                          4k Like
                        </button>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="Middel ">
                <div className="flex  mx-10 mt-10">
                  <i className="fi fi-rr-info pe-2.5 "></i>
                  <h3> Personal Info</h3>
                </div>
                <div className=" mx-10">
                  <p className="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eius ullam facere rerum sunt. Inventore, dolor! Sit ducimus
                    vero magnam, maxime placeat ut fugit impedit, in maiores
                    facere totam qui sapiente. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Beatae sequi eos, ullam
                    inventore rerum hic di
                  </p>
                </div>
                <div className="buttonFive  mx-10">
                  <BoxSid></BoxSid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;

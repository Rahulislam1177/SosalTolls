// eslint-disable-next-line no-unused-vars
import React from "react";
import "./comments.css";

import profile from "../assets/profile.jpg";

const CommentData = [
  {
    id: 1,
    userId: 1,
    name: "Rex Toni",
    profilePic: profile,
    time: "5 minst ago",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga delectus cumque cupiditate.",
  },
  {
    id: 3,
    userId: 3,
    name: "Rex Toni",
    profilePic: profile,
    time: "4 minst ago",
    desc: "Lorem ipsum dolor sit, amet c Exercitationem",
  },
  {
    id: 2,
    userId: 2,
    name: "Rex Toni",
    profilePic: profile,
    time: "47 minst ago",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing que cupiditate. Repudiandae, minima veritatis! Exercitationem, ",
  },
  {
    id: 5,
    userId: 5,
    name: "Rex Toni",
    profilePic: profile,
    time: "1 ours ago",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisnima veritatis! Exercitationem, facilis maiores reprehenderit mollitia",
  },
  {
    id: 6,
    userId: 6,
    name: "Rex Toni",
    profilePic: profile,
    time: "7 minst ago",
    desc: "Lorem ipsum dolor sitpudiandae, minima veritatis! Exercinderit mollitia magnam commodi,",
  },
];
const Comment = CommentData;
console.log(Comment);

export default function GivCome() {
  return (
    <form action="#">
      <div className="user">
        {Comment.map((GibCome) => (
          <>
            <div className="flex">
              <div>
                <img
                  className=" h-12 w-12 rounded-full"
                  src={GibCome.profilePic}
                  alt=""
                />
              </div>

              <div className="borders">
                <div className="flex">
                  <a href="#">
                    {" "}
                    <h4 className=" textColor">{GibCome.name}</h4>
                  </a>
                  <small className="textColor">{GibCome.time}</small>
                  <i className="fi fi-rr-reply-all pl-2.5 pt-1"></i>
                </div>

                <p>{GibCome.desc}</p>
              </div>
            </div>
          </>
        ))}
        <button className="text-center ">More Comments</button>
        <div className="flex">
          <div>
            <img
              className="shrink-0 h-12 w-12 rounded-full"
              src={Comment.map((data) => data.profilePic[1])}
              alt=""
            />
          </div>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Post your comment"
            type="text"
            name="commen"
          />
          <div className="add-smiles">
            <span className="em em-expressionless"></span>
          </div>
          <button>
            <i className="fi fi-rr-paper-plane-top pl-3.5 w-6"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

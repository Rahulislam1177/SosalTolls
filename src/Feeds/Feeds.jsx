// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Feeds.css";
import Feed from "./Feed";
import profile from "../assets/profile.jpg";
import post1 from "../assets/Post.jpg";
import post2 from "../assets/ffffff.jpg";
import post3 from "../assets/cat333.jpg";
import post4 from "../assets/pok444.jpg";
import post5 from "../assets/sldlf555.jpg";

const feedsData = [
  {
    id: 1,
    userId: 1,
    name: "Rex Toni",
    profilePic: profile,
    feedPhotos: post1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga delectus cumque cupiditate. Repudiandae, minima veritatis! Exercitationem, facilis maiores reprehenderit mollitia magnam commodi, consequuntur sed impedit cumque qui modi! Repellat eos odit facere consectetur.",
  },
  {
    id: 3,
    userId: 3,
    name: "Rex Toni",
    profilePic: profile,
    feedPhotos: post2,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga delectus cumque cupiditate. Repudiandae, minima veritatis! Exercitationem, facilis maiores reprehenderit mollitia magnam commodi, consequuntur sed impedit cumque qui modi! Repellat eos odit facere consectetur.",
  },
  {
    id: 2,
    userId: 2,
    name: "Rex Toni",
    profilePic: profile,
    feedPhotos: post3,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga delectus cumque cupiditate. Repudiandae, minima veritatis! Exercitationem, facilis maiores reprehenderit mollitia magnam commodi, consequuntur sed impedit cumque qui modi! Repellat eos odit facere consectetur.",
  },
  {
    id: 5,
    userId: 5,
    name: "Rex Toni",
    profilePic: profile,
    feedPhotos: post4,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga delectus cumque cupiditate. Repudiandae, minima veritatis! Exercitationem, facilis maiores reprehenderit mollitia magnam commodi, consequuntur sed impedit cumque qui modi! Repellat eos odit facere consectetur.",
  },
  {
    id: 6,
    userId: 6,
    name: "Rex Toni",
    profilePic: profile,
    feedPhotos: post5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga delectus cumque cupiditate. Repudiandae, minima veritatis! Exercitationem, facilis maiores reprehenderit mollitia magnam commodi, consequuntur sed impedit cumque qui modi! Repellat eos odit facere consectetur.",
  },
];
// eslint-disable-next-line no-unused-vars

export default function Feeds() {
  return (
    <>
      <div className="Feeds maneSection">
        {feedsData.map((fed) => (
          <Feed fed={fed} key={fed.key} />
        ))}
      </div>
    </>
  );
}

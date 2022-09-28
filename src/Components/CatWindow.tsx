import React from "react";
import { Cat } from "../module";

type Props = {
  cat: Cat;
};

const CatWindow = ({ cat }: Props) => {
  return (
    <div className="cat-window">
      <div
        className="cat-profile-pic"
        style={{
          backgroundImage: `url("${cat.imgUrl}")`,
        }}
      ></div>
      <div className="text-wrapper">
        <h2>
          {cat.name} {cat.gender === "male" ? "♂" : "♀"}
        </h2>
        <p>{cat.description}</p>
      </div>
    </div>
  );
};

export default CatWindow;

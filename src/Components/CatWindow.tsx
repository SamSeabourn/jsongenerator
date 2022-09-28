import React from "react";
import { Cat } from "../module";
import Button from "./Button";

type Props = {
  cat: Cat;
  removeCat: (id: string) => void;
};

const CatWindow = ({ cat, removeCat }: Props) => {
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
        <Button onClickFn={() => removeCat(cat.id)}>🗑️ Remove cat data</Button>
      </div>
    </div>
  );
};

export default CatWindow;

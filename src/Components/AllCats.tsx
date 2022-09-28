import React from "react";
import { Cat } from "../module";
import CatWindow from "./CatWindow";

type Props = {
  catList: Array<any>;
  removeCat: (id: string) => void;
};

const AllCats = ({ catList, removeCat }: Props) => {
  if (catList.length === 0) return <span>Add a cat above (:</span>;
  return (
    <div className="all-cats">
      {catList.map((c: Cat) => (
        <CatWindow key={c.id} cat={c} removeCat={removeCat} />
      ))}
    </div>
  );
};

export default AllCats;

import { useState, useRef } from "react";
import { Cat } from "../module";
import Button from "./Button";

interface Props {
  addCat: (cat: Cat) => void;
}

const AddCat = ({ addCat }: Props) => {
  const [showError, setShowError] = useState(false);
  const isMale = useRef(true);

  const handleAddCat = (e: React.SyntheticEvent) => {
    setShowError(false);
    e.preventDefault();
    const id =
      Date.now().toString(36) + Math.random().toString(36).substring(2);
    //@ts-ignore Yolo XD, CBF doing this form dynamically

    const name = e.target[1].value;
    //@ts-ignore
    const description = e.target[3].value;
    //@ts-ignore
    const imgUrl = e.target[5].value;
    //@ts-ignore
    const gender = isMale.current ? "male" : "female";
    const newCat: Cat = { id, name, description, imgUrl, gender };
    console.log(newCat);

    if (name === "" || imgUrl === "" || description === "") {
      setShowError(true);
      return;
    }

    addCat(newCat);
  };

  return (
    <form className="add-cat-container" onSubmit={(e) => handleAddCat(e)}>
      <div>
        <fieldset className="input-wrapper">
          <legend>Name</legend>
          <input type="text" id="catName" />
        </fieldset>
        <fieldset className="input-wrapper" style={{ height: "20rem" }}>
          <legend>description</legend>
          <textarea id="catDescription" className="description-area" />
        </fieldset>
        <fieldset className="input-wrapper">
          <legend>Image URL</legend>
          <input type="text" id="catImageUrl" />
        </fieldset>
        <fieldset className="input-wrapper">
          <legend>Gender</legend>
          <div>
            <div>
              <span>Male</span>
              <input
                type="radio"
                id="catMale"
                name="drone"
                value="male"
                onClick={() => (isMale.current = true)}
                defaultChecked
              />
            </div>
            <div>
              <span>Female</span>
              <input
                type="radio"
                id="catFemale"
                name="drone"
                value="female"
                onClick={() => (isMale.current = false)}
              />
            </div>
          </div>
        </fieldset>
      </div>
      {showError && (
        <span className="error-msg">PLEASE FILL IN ALL FIELDS</span>
      )}
      <Button onClickFn={() => {}}>Add Cat</Button>
    </form>
  );
};

export default AddCat;

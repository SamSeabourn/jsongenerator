import { useState } from "react";
import "./App.css";
import "./styles.css";
import AddCat from "./Components/AddCat";
import Title from "./Components/Title";
import JsonWindow from "./Components/JsonWindow";
import AllCats from "./Components/AllCats";
import { Cat } from "./module";
import { json } from "stream/consumers";

const App = () => {
  const [catList, setCatList] = useState<Array<Cat>>([]);

  const addCat = (newCat: Cat) => {
    setCatList((catList) => [...catList, newCat]);
  };

  const convertObjectToJson = (allCats: Array<Cat>) => {
    return JSON.stringify({
      currentKittens: [...allCats],
    });
  };

  return (
    <div className="App">
      <Title />
      <div className="main-container">
        <div className="top-row">
          <AddCat addCat={addCat} />
          <JsonWindow jsonString={convertObjectToJson(catList)} />
        </div>
        <div className="cat-container">
          <AllCats catList={catList} />
        </div>
      </div>
    </div>
  );
};

export default App;

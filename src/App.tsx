import { useState } from "react";
import "./App.css";
import "./styles.css";
import AddCat from "./Components/AddCat";
import Title from "./Components/Title";
import JsonWindow from "./Components/JsonWindow";
import AllCats from "./Components/AllCats";
import { Cat } from "./module";

const App = () => {
  const [catList, setCatList] = useState<Array<Cat>>([]);

  const addCat = (newCat: Cat) => {
    setCatList((catList) => [...catList, newCat]);
  };

  const removeCat = (id: string) => {
    const newCatArray = catList.filter((c) => c.id !== id);
    setCatList(newCatArray);
  };

  return (
    <div className="App">
      <Title />
      <div className="main-container">
        <div className="top-row">
          <AddCat addCat={addCat} />
          <JsonWindow catList={catList} />
        </div>
        <div className="cat-container">
          <AllCats catList={catList} removeCat={removeCat} />
        </div>
      </div>
    </div>
  );
};

export default App;

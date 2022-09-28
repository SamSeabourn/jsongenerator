import { useState, useEffect } from "react";
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
    const newCatList = [...catList, newCat];
    setCatList(newCatList);
    setCatsInStorage(newCatList);
  };

  const removeCat = (id: string) => {
    const newCatArray = catList.filter((c) => c.id !== id);
    setCatList(newCatArray);
    setCatsInStorage(newCatArray);
  };

  const getCatsFromStorage = () => {
    const storageString = localStorage.getItem("catsObject");
    const catsFromStorage = JSON.parse(storageString as string);
    return catsFromStorage;
  };

  const setCatsInStorage = (catsObject: Array<Cat>) => {
    localStorage.setItem("catsObject", JSON.stringify([...catsObject]));
  };

  useEffect(() => {
    if (localStorage.getItem("catsObject") === null) {
      localStorage.setItem("catsObject", JSON.stringify([]));
      setCatList([]);
    } else {
      setCatList(getCatsFromStorage());
    }
  }, []);

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

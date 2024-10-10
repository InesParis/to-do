import "./index.css";
import ListHeader from "./components/ListHeader";
import { useEffect } from "react";
const App = () => {
  const getData = async () => {
    const userEmail = "inesparisarranz@gmail.com";
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => getData, []);
  return (
    <div className="app">
      <ListHeader listName={"👩🏻‍💻 Projects tick list"} />
    </div>
  );
};

export default App;

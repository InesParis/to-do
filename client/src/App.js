import "./index.css";
import ListItems from "./components/ListItems";
import ListHeader from "./components/ListHeader";
import { useEffect, useState } from "react";
const App = () => {
  const userEmail = "inesparisarranz@gmail.com";
  const [tasks, setTasks] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => getData, []);
  //Sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return (
    <div className="app">
      <ListHeader listName={"👩🏻‍💻 Projects tick list"} />
      {sortedTasks?.map((task) => (
        <ListItems key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;

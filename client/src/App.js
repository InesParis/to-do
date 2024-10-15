import "./index.css";
import ListItems from "./components/ListItems";
import ListHeader from "./components/ListHeader";
import Auth from "./components/Auth";
import { useEffect, useState } from "react";
const App = () => {
  const userEmail = "inesparisarranz@gmail.com";
  const [tasks, setTasks] = useState(null);

  const authToken = false;

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      console.log("API Response:", json);
      setTasks(json);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  //Sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader listName={"👩🏻‍💻 Projects tick list"} getData={getData} />
          {sortedTasks?.map((task) => (
            <ListItems key={task.id} task={task} getData={getData} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;

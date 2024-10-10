import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";

const ListItems = ({ task }) => {
  return (
    <div className="list-item">
      <div className="infor-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </div>
    </div>
  );
};

export default ListItems;

const ListItems = ({ task }) => {
  return (
    <div className="list-item">
      <p>{task.title}</p>
    </div>
  );
};

export default ListItems;

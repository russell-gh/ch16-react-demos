const Todo = ({ id, title, completed }) => {
  return (
    <>
      <h1 className={completed ? "complete" : "incomplete"}>{title}</h1>
    </>
  );
};

export default Todo;

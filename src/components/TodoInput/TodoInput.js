import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const TodoInput = () => {
  const { dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const AddNewTask = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_TASK",
      task,
    });
    setTask("");
  };

  return (
    <div className="todo-input">
      <form onSubmit={AddNewTask}>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
          placeholder="Write here your task..."
          required
        />
        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default TodoInput;

import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../../contexts/TodoContext";

const TodoInput = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const AddNewTask = (e) => {
    e.preventDefault();
    setTodos([...todos, { task: task, id: uuidv4() }]);
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

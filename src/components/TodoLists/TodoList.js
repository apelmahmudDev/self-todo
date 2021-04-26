import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoDetails from "../TodoDetails/TodoDetails";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const taskRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo_list">
      <ul>
        {todos.map((todo) => (
          <TodoDetails
            todo={todo.task}
            id={todo.id}
            key={todo.id}
            taskRemove={taskRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

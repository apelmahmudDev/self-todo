import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoDetails from "../TodoDetails/TodoDetails";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div className="todo_list">
      <ul>
        {state.map((todo) => (
          <TodoDetails
            todo={todo.task}
            id={todo.id}
            key={todo.id}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

import React, { useState } from "react";
import TodoDetails from "../TodoDetails/TodoDetails";

function TodoList() {
  const [todos, setTodos] = useState([
    { name: "Programming", id: 1 },
    { name: "Study", id: 2 },
    { name: "Play", id: 3 },
    { name: "Riding a By-cycle", id: 3 },
  ]);
  return (
    <div className="todo_list">
      <ul>
        {todos.map((todo) => (
          <TodoDetails todo={todo.name} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

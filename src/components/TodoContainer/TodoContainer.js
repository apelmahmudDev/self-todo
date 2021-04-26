import React from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoList from "../TodoLists/TodoList";

function TodoContainer() {
  return (
    <div className="todo_contaier">
      <TodoHeader />
      <TodoList />
    </div>
  );
}

export default TodoContainer;

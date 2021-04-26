import React from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoLists/TodoList";

function TodoContainer() {
  return (
    <div className="todo_contaier">
      <TodoHeader />
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default TodoContainer;

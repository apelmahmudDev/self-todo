import React from "react";

function TodoInput() {
  return (
    <div className="todo-input">
      <form>
        <input type="text" placeholder="Write here your task..." required />
        <input type="submit" value="ADD TASK" />
      </form>
    </div>
  );
}

export default TodoInput;

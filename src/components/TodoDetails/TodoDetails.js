import React from "react";

function TodoDetails({ todo }) {
  return (
    <li className="todo_details">
      <input type="checkbox" />
      {todo}
    </li>
  );
}

export default TodoDetails;

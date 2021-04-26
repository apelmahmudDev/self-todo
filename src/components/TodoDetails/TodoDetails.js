import React from "react";

const TodoDetails = ({ todo, id, dispatch }) => {
  return (
    <li
      onClick={() => dispatch({ type: "TASK_REMOVE", id: id })}
      className="todo_details"
    >
      <input type="checkbox" />
      {todo}
    </li>
  );
};

export default TodoDetails;

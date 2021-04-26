import React from "react";

const TodoDetails = ({ todo, id, taskRemove }) => {
  return (
    <li onClick={() => taskRemove(id)} className="todo_details">
      <input type="checkbox" />
      {todo}
    </li>
  );
};

export default TodoDetails;

import React, { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../../contexts/TodoContext";

const TodoHeader = () => {
  // const faClipboardListIcon = <FontAwesomeIcon icon={faClipboardList} />;
  const { todos } = useContext(TodoContext);
  return (
    <div className="todo_header">
      <h1>Self Todo</h1>
      <p>
        {/* <span>{faClipboardListIcon}</span>  */}
        You have {todos.length} tasks to throw...
      </p>
    </div>
  );
};

export default TodoHeader;

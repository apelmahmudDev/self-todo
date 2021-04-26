import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../../contexts/TodoContext";

const TodoHeader = () => {
  const faListUlIcon = <FontAwesomeIcon icon={faListUl} />;
  const { state } = useContext(TodoContext);
  return (
    <div className="todo_header">
      <h1>Self Todo</h1>
      <p>
        <span style={{ marginRight: "10px" }}>{faListUlIcon}</span>
        {state.length
          ? `You have ${state.length} tasks to throw...`
          : `Add your task`}
      </p>
    </div>
  );
};

export default TodoHeader;

import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { task: "Programming", id: 1 },
    { task: "Study", id: 2 },
    { task: "Play", id: 3 },
    { task: "Riding a By-cycle", id: 4 },
  ]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

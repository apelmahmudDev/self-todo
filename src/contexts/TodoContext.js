import React, { createContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from "../reducers/todoReducer";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("myTodos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

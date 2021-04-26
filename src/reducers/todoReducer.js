import { v4 as uuidv4 } from "uuid";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      return [...state, { task: action.task, id: uuidv4() }];

    case "TASK_REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

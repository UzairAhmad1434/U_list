import { useContext, createContext } from "react";
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Uzair Ahmad",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
  updateTodo: (id, todo) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

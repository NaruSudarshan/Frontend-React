import { createContext,useContext } from "react";

// create context for todo app
export const TodoContext = createContext({
    // initial state 
    todos:[
        {
            id:1,
            todo:"learn react",
            completed:false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

// custom hook for using todo context
export const useTodo = () => {
  return useContext(TodoContext);
};

// TodoProvider component to wrap around the app
export const TodoProvider = TodoContext.Provider;
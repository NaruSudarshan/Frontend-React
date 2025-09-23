import { createSlice,nanoid } from "@reduxjs/toolkit";
// nanoid is used to generate unique IDs for each todo item

// every slice needs an initial state
const initialState = {
    todos: [{
        id: nanoid(),
        text: "Learn Redux Toolkit",
        completed: false
    }]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    // reducers are functions that handle actions and update the state
    reducers: {
        // every reducer we get access to the state and the action
        // state is the current state of the slice
        // action is an object that contains the type and payload
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.todos.splice(index, 1);
            }
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
});

// export the actions and the reducer
export const { addTodo, toggleTodo, removeTodo, updateTodo } = todoSlice.actions;

// default export the reducer
export default todoSlice.reducer;

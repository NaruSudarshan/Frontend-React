import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// configureStore is a function that takes an object with a reducer property
export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})
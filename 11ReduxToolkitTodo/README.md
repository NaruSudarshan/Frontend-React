# Redux Toolkit Todo App - Learning Notes 📚

## 🎯 What is Redux Toolkit?
Redux Toolkit is the **modern way** to write Redux. It simplifies Redux code and follows best practices automatically.

## 🏗️ Core Architecture

### **Flux Pattern**
- **Unidirectional data flow**: Action → Reducer → Store → UI → Action
- **Predictable state management**: Always know how data flows

### **Redux Three Principles**
1. **Single Source of Truth**: One store for entire app
2. **State is Read-Only**: Only change state via actions
3. **Pure Functions**: Reducers are pure functions (same input = same output)

## 🔧 Redux Toolkit Setup

### **1. Store Configuration**
```javascript
// store.js
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer  // Key "todo" creates state.todo
    }
})
```

### **2. Provider Setup**
```javascript
// main.jsx
import { Provider } from 'react-redux'
import { store } from './app/store.js'

<Provider store={store}>
    <App />
</Provider>
```
**⚠️ Critical**: Wrap entire app with `<Provider>` or get "context value" error!

### **3. Create Slice**
```javascript
// todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: nanoid(), text: "Learn Redux", completed: false }]
}

export const todoSlice = createSlice({
    name: 'todos',        // Slice name
    initialState,         // Starting state
    reducers: {           // Action handlers
        addTodo: (state, action) => {
            state.todos.push({  // Direct mutation (Immer handles immutability)
                id: nanoid(),
                text: action.payload,
                completed: false
            });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

// Export actions and reducer
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

## 🪝 Redux Hooks

### **useSelector** - Read State
```javascript
import { useSelector } from 'react-redux'

// Get todos from store
const todos = useSelector(state => state.todo.todos)
//                              ^^^^      ^^^^
//                           slice key   data
```

### **useDispatch** - Send Actions
```javascript
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const dispatch = useDispatch()

// Dispatch action
dispatch(addTodo("New todo text"))
```

## 🎯 Key Concepts

### **State Structure**
- Store config: `{ todo: todoReducer }` 
- Access via: `state.todo.todos`
- **Remember**: Store key determines state path!

### **Actions & Payloads**
- Actions automatically created by `createSlice`
- `action.payload` contains the data sent with action
- Example: `dispatch(addTodo("text"))` → `action.payload = "text"`

### **Immutability with Immer**
- Redux Toolkit uses Immer internally
- Write "mutating" code: `state.todos.push(newTodo)`
- Immer creates immutable updates automatically
- **No manual spreading needed!**

### **nanoid**
- Generates unique IDs: `nanoid()` → "V1StGXR8_Z5jdHi6B-myT"
- Perfect for creating unique todo IDs

## 🐛 Common Issues & Solutions

### **"Cannot find react-redux context"**
- **Cause**: Missing `<Provider>` wrapper
- **Fix**: Wrap App in `<Provider store={store}>`

### **"Cannot read property 'map' of undefined"**
- **Cause**: Wrong selector path
- **Fix**: Use correct path based on store structure
  - Store: `{ todo: todoReducer }` → Selector: `state.todo.todos`

### **Actions not working**
- **Cause**: Forgot to export actions from slice
- **Fix**: `export const { addTodo } = todoSlice.actions`

## 🚀 Project Structure
```
src/
├── app/
│   └── store.js           # Store configuration
├── features/
│   └── todo/
│       └── todoSlice.js   # Slice with reducers & actions
├── components/
│   ├── AddTodo.jsx        # Uses useDispatch
│   └── Todos.jsx          # Uses useSelector
└── main.jsx               # Provider setup
```

## 📝 Quick Reference

**Create Store**: `configureStore({ reducer: { key: reducer } })`

**Create Slice**: `createSlice({ name, initialState, reducers })`

**Read State**: `useSelector(state => state.key.data)`

**Dispatch Action**: `dispatch(actionCreator(payload))`

**Provider**: `<Provider store={store}><App /></Provider>`

## 🎉 Redux Toolkit Benefits
- ✅ Less boilerplate code
- ✅ Built-in immutability with Immer
- ✅ Auto-generated action creators
- ✅ DevTools integration
- ✅ TypeScript support

**Tech Stack**: React + Redux Toolkit + Tailwind CSS


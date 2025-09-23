# Context API + LocalStorage Todo App 📚

## 🎯 What I Learned

### **Context API**
- Create context with `createContext()`
- Wrap app with `Provider`
- Use custom hook `useTodo()` to consume context
- Pass state & functions through context (no prop drilling)

### **LocalStorage**
- `localStorage.setItem()` - save data
- `localStorage.getItem()` - load data
- Only stores strings → use `JSON.stringify()` & `JSON.parse()`
- Data persists after page refresh

### **useEffect Hooks**
```javascript
// Load on mount
useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if(data && data.length > 0) setTodos(data)
}, [])

// Save when todos change
useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

### **CRUD Operations**
- **Add**: `[...prev, newTodo]`
- **Update**: `prev.map(todo => todo.id === id ? newTodo : todo)`
- **Delete**: `prev.filter(todo => todo.id !== id)`
- **Toggle**: `{...todo, completed: !todo.completed}`

### **Component Structure**
- **App.jsx**: Main state, context provider, localStorage
- **TodoForm.jsx**: Add new todos, form handling
- **TodoItem.jsx**: Display, edit, delete individual todos

## 🐛 Key Bug Fixed
**Problem**: Todos not loading from localStorage
**Fix**: Changed `todos.length > 0` to `storedTodos.length > 0`

## � Quick Tips
- Always use unique `key` for lists
- Check if localStorage data exists before parsing
- Use functional setState for immutable updates
- Separate local state (edit mode) from global state (todos)

**Tech Stack**: React + Vite + Tailwind + LocalStorage



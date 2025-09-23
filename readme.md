# Frontend Learning Journey - Complete Guide 📚

This repository contains my complete React learning journey with different projects, each focusing on specific concepts and patterns.

## 🚀 Projects Overview

### **01ViteReact** - React Basics
- **Vite setup** and fast bundling
- **Component creation** and JSX syntax
- **Virtual DOM** and React fundamentals
- **File structure** and import/export patterns

### **02counterProject** - State Management
- **useState hook** for reactive state
- **Event handling** and function references
- **State batching** and functional updates
- **Re-rendering** concepts

### **03TailwindProps** - Props & Styling
- **Props passing** and component reusability
- **Tailwind CSS** utility-first styling
- **Default parameters** and destructuring
- **Component composition** patterns

### **04BgChanger** - Dynamic Styling
- **State-driven styling** with inline styles
- **Event handlers** with parameters
- **CSS transitions** and visual feedback
- **Responsive design** with Tailwind

### **05PasswordGenerator** - Advanced Hooks
- **useEffect** for side effects
- **useCallback** for performance optimization
- **useRef** for DOM access
- **Clipboard API** integration

### **06CurrencyConverter** - API & Custom Hooks
- **Custom hooks** for reusable logic
- **API integration** with fetch
- **Form handling** and controlled components
- **useId** for accessibility

### **07reactRouter** - Navigation
- **Client-side routing** with React Router
- **Nested routes** and layouts
- **Route loaders** for data fetching
- **Dynamic parameters** with useParams

### **08ContextApi1** - State Sharing
- **Context API** basics
- **Provider pattern** for state sharing
- **Avoiding props drilling**
- **useContext** hook usage

### **09ContextApi2** - Advanced Context
- **Theme switching** with Context
- **Custom hooks** for context consumption
- **DOM manipulation** with useEffect
- **Tailwind dark mode** integration

### **10ContextApi_LocalStorage** - Persistence
- **localStorage** for data persistence
- **Context + localStorage** combination
- **CRUD operations** with immutable updates
- **useEffect** for data loading/saving

### **11ReduxToolkitTodo** - Global State
- **Redux Toolkit** for state management
- **Slices** and reducers
- **useSelector and useDispatch** hooks
- **Provider setup** and store configuration


# Libraries
## react
- react-dom -> web
- react-native -> mobile

# Virtual DOM
- react doesnt use virtual DOM anymore
- createRoot creates a new DOM tree , only updates the changed parts not all of it
- Reconciliation is the algorithm behind what we call virtual DOM

## React fibre
[article](https://github.com/acdlite/react-fiber-architecture)
- how often should react update the DOM by comparing the virtual DOM with the real DOM
- using keys to identify element in a list is done to optimize the reconciliation process so that react can easily identify which elements have changed 
# Vite + React Basics - Learning Notes 📚

## 🎯 What I Learned

### **Vite**
- **Fast bundler** for modern web development
- **Hot Module Replacement (HMR)** for instant updates
- **Much faster** than Create React App

### **React Project Flow**
```
index.html → main.jsx → App.jsx → Components
```

### **File Structure & Flow**
1. **index.html**: Contains `<div id="root">` where React app mounts
2. **main.jsx**: Entry point, creates Virtual DOM and mounts App
3. **App.jsx**: Main component that renders other components
4. **Components**: Individual UI pieces (like Luffy.jsx)

## 🔧 Key Code Patterns

### **Virtual DOM Creation**
```javascript
// main.jsx
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

### **Functional Components**
```javascript
// Component must start with Capital letter
function Luffy(){
    return <h2>Monkey D Luffy</h2>
}
export default Luffy
```

### **JSX Rules**
```javascript
function App() {
  const username = "Sudarshan"
  return (
    // Must return single element (use <> </> for multiple)
    <>
      <h1>{username}'s favourite character</h1>  {/* {} for expressions */}
      <Luffy/>
    </>
  )
}
```

## 📝 JSX Key Concepts

### **JSX Expressions**
- Use `{}` for JavaScript expressions
- **Only evaluated expressions** (no operations inside)
- Example: `{username}`, `{2 + 2}`, `{user.name}`

### **Component Rules**
- **Component names**: Must start with Capital letter
- **File extension**: Use `.jsx` for components returning JSX
- **Single return**: Components can only return one element

### **Fragment (`<> </>`)**
- Wraps multiple elements without adding extra DOM nodes
- Alternative to unnecessary `<div>` wrapper

## 🎯 React Fundamentals

### **Virtual DOM**
- React creates virtual representation of DOM
- **Diffing algorithm** compares old vs new virtual DOM
- Only updates **changed parts** in real DOM
- **Performance boost** compared to full DOM manipulation

### **Component-Based Architecture**
- UI broken into **reusable components**
- Each component manages its own **logic and rendering**
- **Composition** over inheritance

## 🚀 Quick Tips
- Always start component names with **Capital letter**
- Use **functional components** (modern approach)
- JSX expressions must be **evaluated** (no complex logic)
- One component per file for better organization
- Export component as **default** for clean imports

**Tech Stack**: React + Vite + JSX



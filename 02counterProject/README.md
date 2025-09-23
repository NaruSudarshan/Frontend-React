# React useState Hook - Learning Notes 📚

## 🎯 What I Learned

### **useState Hook**
- **Add state** to functional components
- **Returns array**: `[currentValue, setterFunction]`
- **Triggers re-renders** when state changes
- **React automatically updates** UI when state changes

### **State vs Regular Variables**
```javascript
// ❌ Won't update UI
let counter = 5
counter = counter + 1  // UI doesn't change

// ✅ Updates UI automatically
const [counter, setCounter] = useState(0)
setCounter(counter + 1)  // UI updates
```

## 🔧 Key Code Patterns

### **Basic useState Setup**
```javascript
import {useState} from 'react'

function App() {
  const [counter, setCounter] = useState(0)  // Initial value = 0
  
  const addValue = () => {
    setCounter(counter + 1)  // Updates state & UI
  }
  
  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
    </>
  )
}
```

### **Event Handling**
```javascript
// Function reference (✅ Correct)
<button onClick={addValue}>Add Value</button>

// Function call (❌ Wrong - runs immediately)
<button onClick={addValue()}>Add Value</button>
```

## 🧠 useState Behavior

### **Batching Updates**
```javascript
const addValue = () => {
  setCounter(counter + 1)  // All these are batched
  setCounter(counter + 1)  // Only adds 1, not 4
  setCounter(counter + 1)  
  setCounter(counter + 1)  
}
```

### **Functional Updates (Solution)**
```javascript
const addValue = () => {
  setCounter(prevCounter => prevCounter + 1)  // Uses previous state
  setCounter(prevCounter => prevCounter + 1)  // Each gets latest value
  setCounter(prevCounter => prevCounter + 1)  // Now adds 3 total
}
```

## 📝 Key Concepts

### **React Re-rendering**
- **State change** → **Component re-renders** → **UI updates**
- React **compares old vs new state**
- Only re-renders if state **actually changed**

### **State Management**
- State is **local** to component
- Each component has **own state**
- State **persists** between re-renders

### **Why useState?**
- **React doesn't watch** regular variables
- **Manual DOM manipulation** is complex and error-prone
- **useState tells React** when to update UI
- **Declarative** approach (describe what UI should look like)

## 🐛 Common Mistakes

### **Directly Mutating State**
```javascript
// ❌ Wrong
counter = counter + 1

// ✅ Correct  
setCounter(counter + 1)
```

### **Multiple Updates in One Function**
```javascript
// ❌ Only adds 1 (batched)
setCounter(counter + 1)
setCounter(counter + 1)

// ✅ Adds 2 (functional updates)
setCounter(prev => prev + 1)
setCounter(prev => prev + 1)
```

## 🚀 Quick Tips
- Always use **setter function** to update state
- Use **functional updates** for multiple changes
- **console.log(state)** might show old value (async)
- Event handlers need **function reference**, not call
- useState **triggers re-render** on every update

**Tech Stack**: React + useState Hook
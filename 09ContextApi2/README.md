# Context API Theme Switcher - Learning Notes 📚

## 🎯 What I Learned

### **Advanced Context Patterns**
- **Context with default values** during creation
- **Custom hook** for context consumption
- **Theme switching** with Context API
- **DOM manipulation** with useEffect
- **Tailwind dark mode** integration

### **Context Optimization**
- **Direct export** of Provider
- **Custom hook** for cleaner usage
- **Multiple context values** in single provider

## 🔧 Key Code Patterns

### **Context with Default Values**
```javascript
// theme.js
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",        // Default state
    darkTheme: () => {},       // Default functions
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider  // Direct export

// Custom hook for consuming context
export default function useTheme(){
    return useContext(ThemeContext)  // Returns entire context
}
```

### **Provider with State Management**
```javascript
function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => setThemeMode("light")
  const darkTheme = () => setThemeMode("dark")

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      {/* App content */}
    </ThemeProvider>
  )
}
```

### **DOM Manipulation with useEffect**
```javascript
// Apply theme to HTML element
useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
}, [themeMode])
```

## 🎨 Theme Implementation

### **Toggle Button Component**
```javascript
export default function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme} = useTheme()
    
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    
    return (
        <input
            type="checkbox"
            onChange={onChangeBtn}
            checked={themeMode === "dark"}  // Controlled input
        />
    )
}
```

### **Theme-Aware Components**
```javascript
function Card() {
    const {themeMode} = useTheme()
    
    return (
        <div className={`card ${themeMode === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            {/* Card content */}
        </div>
    )
}
```

## 📝 Advanced Patterns

### **Custom Hook Benefits**
```javascript
// Instead of importing multiple items
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
const {themeMode, darkTheme, lightTheme} = useContext(ThemeContext)

// Just import custom hook
import useTheme from '../contexts/theme'
const {themeMode, darkTheme, lightTheme} = useTheme()
```

### **Direct Provider Export**
```javascript
export const ThemeProvider = ThemeContext.Provider
// No need to create separate Provider component for simple cases
```

### **Context Function Implementation**
```javascript
// Context provides function signatures
darkTheme: () => {},

// App provides actual implementation
const darkTheme = () => setThemeMode("dark")

// Components call the functions
<button onClick={darkTheme}>Dark Mode</button>
```

## 🌓 Theme Switching Logic

### **State → Context → DOM**
```
User clicks toggle → setState("dark") → Context updates → useEffect → DOM class changes → CSS applies
```

### **Tailwind Dark Mode**
```javascript
// HTML gets class
<html class="dark">

// Tailwind classes work
className="bg-white dark:bg-gray-800 text-black dark:text-white"
```

### **Checkbox State Management**
```javascript
checked={themeMode === "dark"}  // Checkbox reflects current theme
onChange={onChangeBtn}          // Function handles toggle
```

## 🧠 Key Concepts

### **Controlled Toggle**
```javascript
const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    darkModeStatus ? darkTheme() : lightTheme()
}
```

### **Theme Persistence Pattern**
```javascript
// Could extend to localStorage
useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) setThemeMode(savedTheme)
}, [])

useEffect(() => {
    localStorage.setItem('theme', themeMode)
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
}, [themeMode])
```

## 🎯 Context Design Patterns

### **Single Responsibility**
- **One context** for theme management
- **Clear function names** (lightTheme, darkTheme)
- **Simple state** (just theme mode string)

### **Provider Composition**
```javascript
// Can wrap multiple providers
<ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
  <UserProvider value={{user, setUser}}>
    <App />
  </UserProvider>
</ThemeProvider>
```

## 🚀 Benefits of This Pattern

### **Clean API**
- ✅ **One import** for entire theme functionality
- ✅ **Descriptive function names**
- ✅ **Type-safe** with default values
- ✅ **Easy to extend**

### **Performance**
- ✅ **DOM updates** only when theme changes
- ✅ **Single context** for related functionality
- ✅ **No unnecessary re-renders**

## 🚀 Quick Tips
- **Default values** prevent context errors
- **Custom hooks** simplify consumption
- **useEffect** for DOM manipulation
- **Controlled inputs** for theme toggles
- **Direct Provider export** for simple cases

**Tech Stack**: React + Context API + Tailwind Dark Mode + DOM Manipulation

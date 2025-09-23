# Context API Basics - Learning Notes 📚

## 🎯 What I Learned

### **Context API Purpose**
- **Avoid props drilling** (passing props through multiple levels)
- **Global state management** without external libraries
- **Share data** across distant components in tree
- **Simpler alternative** to Redux for small/medium apps

### **Props Drilling Problem**
```
App → Header → Navigation → UserMenu → UserName
    (user prop passed through every level)
```

### **Context Solution**
```
App (Context Provider)
├── Header (consumes context directly)
├── Navigation (consumes context directly)  
└── UserMenu (consumes context directly)
```

## 🔧 Key Code Patterns

### **1. Create Context**
```javascript
// UserContext.js
import React from "react";

const UserContext = React.createContext()  // Create context
export default UserContext;
```

### **2. Create Provider Component**
```javascript
// UserContextProvider.jsx
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)  // State to share
    
    return(
        <UserContext.Provider value={{user, setUser}}>  {/* Share state */}
            {children}  {/* All child components */}
        </UserContext.Provider>
    )
}
```

### **3. Wrap App with Provider**
```javascript
// App.jsx
<UserContextProvider>
    <Login />
    <Profile />
</UserContextProvider>
```

### **4. Consume Context in Components**
```javascript
// Login.jsx - Set data in context
import {useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const {setUser} = useContext(UserContext)  // Get setter
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})  // Update context
    }
}

// Profile.jsx - Read data from context
function Profile() {
    const {user} = useContext(UserContext)  // Get data
    
    if (!user) return <div>Please login</div>
    return <div>Welcome {user.username}</div>
}
```

## 📝 Context API Flow

### **Setup Process**
1. **Create Context** with `createContext()`
2. **Create Provider** component with state
3. **Wrap components** that need access
4. **Consume context** with `useContext()`

### **Data Flow**
```
Login Component → setUser() → Context State → Profile Component
```

## 🧠 Key Concepts

### **Provider Pattern**
```javascript
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}  {/* Any components can access context */}
        </UserContext.Provider>
    )
}
```

### **Consumer Pattern**
```javascript
const {user, setUser} = useContext(UserContext)
//     ^^^^^  ^^^^^^^ Destructure what you need
//     getter  setter
```

### **Conditional Rendering with Context**
```javascript
if (!user) return <div>Please login</div>  // No user state
return <div>Welcome {user.username}</div>  // User logged in
```

## 🎨 Component Architecture

### **Context Structure**
```
src/
├── context/
│   ├── UserContext.js          // Context creation
│   └── UserContextProvider.jsx // Provider with state
├── components/
│   ├── Login.jsx              // Context consumer (setter)
│   └── Profile.jsx            // Context consumer (getter)
└── App.jsx                    // Provider wrapper
```

### **Separation of Concerns**
- **Context**: Define what can be shared
- **Provider**: Manage state and provide to children
- **Consumer**: Components that use context data

## 🚀 Context vs Redux

### **Context API**
- ✅ **Built into React** (no extra dependencies)
- ✅ **Simple setup** for small apps
- ✅ **Good for component communication**
- ❌ **Not optimized** for frequent updates
- ❌ **No dev tools** by default

### **Redux**
- ✅ **Powerful dev tools**
- ✅ **Optimized** for performance
- ✅ **Predictable state** management
- ❌ **More boilerplate** code
- ❌ **External dependency**

## 🐛 Common Patterns

### **Default Context Value**
```javascript
const UserContext = createContext({
    user: null,
    setUser: () => {}  // Default functions prevent errors
})
```

### **Context Hook Pattern**
```javascript
// Custom hook for cleaner usage
export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within UserContextProvider')
    }
    return context
}
```

### **Multiple Context Values**
```javascript
<UserContext.Provider value={{
    user,
    setUser,
    isLoggedIn: !!user,
    login: handleLogin,
    logout: handleLogout
}}>
```

## 🚀 Quick Tips
- **Context** solves props drilling problem
- **Provider** wraps components that need access
- **useContext** hook to consume context
- **Conditional rendering** based on context state
- Good for **global UI state** (theme, auth, etc.)

**Tech Stack**: React + Context API + useContext Hook

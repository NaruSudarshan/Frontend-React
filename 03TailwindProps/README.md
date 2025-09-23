# React Props + Tailwind CSS - Learning Notes 📚

## 🎯 What I Learned

### **Props (Properties)**
- **Pass data** from parent to child components
- Make components **reusable and dynamic**
- **Read-only** - child cannot modify props
- Enable **component customization**

### **Tailwind CSS**
- **Utility-first** CSS framework
- **Pre-built classes** for styling
- **No custom CSS** needed
- **Responsive design** built-in

## 🔧 Key Code Patterns

### **Passing Props**
```javascript
// Parent Component (App.jsx)
function App() {
  const myObj = { username: "Sudarshan" }
  
  return (
    <>
      <Card name="luffy" obj={myObj}/>     {/* Props: name, obj */}
      <Card name="Zoro"/>                  {/* Props: name only */}
    </>
  )
}
```

### **Receiving Props**
```javascript
// Method 1: Props object
function Card(props) {
    console.log(props)  // {name: "luffy", obj: {username: "Sudarshan"}}
    return <h5>{props.name}</h5>
}

// Method 2: Destructuring with defaults
function Card({name = "Default Name", obj}) {
    return <h5>{name}</h5>
}
```

## 📝 Props Key Concepts

### **Props Flow**
```
Parent Component → Props → Child Component
     App.jsx    →  name  →    Card.jsx
```

### **Props Object Structure**
```javascript
// When passed: <Card name="luffy" obj={myObj}/>
props = {
  name: "luffy",
  obj: { username: "Sudarshan" }
}
```

### **Default Values**
```javascript
// Option 1: In destructuring
function Card({name = "Default User"}) {
    return <h5>{name}</h5>
}

// Option 2: Inside function
function Card(props) {
    const name = props.name || "Default User"
    return <h5>{name}</h5>
}
```

## 🎨 Tailwind CSS Integration

### **Utility Classes**
```javascript
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {props.name}
    </h5>
</div>
```

### **Responsive & State Classes**
```javascript
className="bg-blue-700 hover:bg-blue-800 focus:ring-4 dark:bg-blue-600"
//         base color   hover state      focus    dark mode
```

### **Component Reusability**
- Same **Card component** used multiple times
- **Different props** create different appearances
- **Consistent styling** with Tailwind classes

## 🧠 Advanced Concepts

### **Passing Different Data Types**
```javascript
// Strings (no braces)
<Card name="luffy"/>

// Objects, arrays, functions (with braces)
<Card obj={myObj} count={5} handler={handleClick}/>

// Boolean
<Card isActive={true} disabled={false}/>
```

### **Props Validation**
```javascript
// Can access any prop passed to component
console.log(props)  // Shows all props passed from parent
```

## 🚀 Component Design Patterns

### **Reusable Card Component**
- **Base structure** stays same
- **Content changes** via props
- **Styling consistent** with Tailwind
- **Multiple instances** with different data

### **Benefits of Props**
- ✅ **Code reusability**
- ✅ **Dynamic content**
- ✅ **Component composition**
- ✅ **Separation of concerns**

## 🐛 Common Mistakes

### **Props are Read-Only**
```javascript
// ❌ Cannot modify props
function Card(props) {
    props.name = "New Name"  // Error!
}

// ✅ Use state for changes
function Card(props) {
    const [name, setName] = useState(props.name)
}
```

## 🚀 Quick Tips
- **Destructure props** for cleaner code
- Use **default values** for optional props
- **console.log(props)** to debug
- Props make components **reusable**
- Combine props with **Tailwind** for styled components

**Tech Stack**: React + Props + Tailwind CSS